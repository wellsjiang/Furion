﻿using Fur.ApplicationBase;
using Fur.Linq.Extensions;
using Fur.MirrorController.Attributes;
using Fur.MirrorController.Helpers;
using Fur.MirrorController.Options;
using Fur.TypeExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Fur.MirrorController.Conventions
{
    internal sealed class MirrorControllerModelConvention : IApplicationModelConvention
    {
        private readonly MirrorControllerOptions _attactControllerOptions;

        public MirrorControllerModelConvention(MirrorControllerOptions attactControllerOptions)
        {
            _attactControllerOptions = attactControllerOptions;
        }

        #region 解析镜面控制器 + public void Apply(ApplicationModel application)

        /// <summary>
        /// 解析镜面控制器
        /// </summary>
        /// <param name="application">应用模型</param>
        public void Apply(ApplicationModel application)
        {
            foreach (var controllerModel in application.Controllers)
            {
                var controllerTypeInfo = controllerModel.ControllerType;
                if (typeof(ControllerBase).IsAssignableFrom(controllerTypeInfo)) continue;

                // 配置控制器
                ConfigureController(controllerModel, controllerTypeInfo);

                // 配置Action
                if (controllerModel.ApiExplorer.IsVisible.Value)
                {
                    var hasRouteAttribute = controllerModel.Selectors.Any(s => s.AttributeRouteModel != null);
                    if (hasRouteAttribute)
                    {
                        foreach (var actionModel in controllerModel.Actions)
                        {
                            ConfigureActionApiExplorerAndParameters(actionModel);
                        }
                    }
                    else ConfigureAction(controllerModel);
                }
            }
        }

        #endregion 解析镜面控制器 + public void Apply(ApplicationModel application)

        #region 配置控制器模型信息 - private void ConfigureController(ControllerModel controllerModel, TypeInfo controllerTypeInfo)

        /// <summary>
        /// 配置控制器模型信息
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        /// <param name="controllerTypeInfo">控制器类型</param>
        private void ConfigureController(ControllerModel controllerModel, TypeInfo controllerTypeInfo)
        {
            var attactControllerAttribute = AppGlobal.GetPublicClassTypeCustomAttribute<MirrorControllerAttribute>(controllerTypeInfo.AsType());

            ConfigureAreaName(controllerModel, attactControllerAttribute);
            ConfigureControllerName(controllerModel);
            ConfigureControllerApiExplorer(controllerModel);
        }

        #endregion 配置控制器模型信息 - private void ConfigureController(ControllerModel controllerModel, TypeInfo controllerTypeInfo)

        #region 配置区域/ApiVersion名称 - private void ConfigureAreaName(ControllerModel controllerModel, AttachControllerAttribute attactControllerAttribute)

        /// <summary>
        /// 配置区域/ApiVersion名称
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        /// <param name="attactControllerAttribute">镜面控制器特性</param>
        private void ConfigureAreaName(ControllerModel controllerModel, MirrorControllerAttribute attactControllerAttribute)
        {
            if (!controllerModel.RouteValues.ContainsKey("area"))
            {
                if (attactControllerAttribute.ApiVersion.HasValue())
                {
                    controllerModel.RouteValues["area"] = attactControllerAttribute.ApiVersion;
                }
                else if (_attactControllerOptions.DefaultApiVersion.HasValue())
                {
                    controllerModel.RouteValues["area"] = _attactControllerOptions.DefaultApiVersion;
                }
            }
        }

        #endregion 配置区域/ApiVersion名称 - private void ConfigureAreaName(ControllerModel controllerModel, AttachControllerAttribute attactControllerAttribute)

        #region 配置控制器名称 - private void ConfigureControllerName(ControllerModel controllerModel)

        /// <summary>
        /// 配置控制器名称
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        private void ConfigureControllerName(ControllerModel controllerModel)
        {
            controllerModel.ControllerName = Helper.ClearStringAffix(controllerModel.ControllerName, _attactControllerOptions.ClearControllerRouteAffix);
        }

        #endregion 配置控制器名称 - private void ConfigureControllerName(ControllerModel controllerModel)

        #region 配置控制器导出可见情况 - private void ConfigureControllerApiExplorer(ControllerModel controllerModel)

        /// <summary>
        /// 配置控制器导出可见情况
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        private void ConfigureControllerApiExplorer(ControllerModel controllerModel)
        {
            if (controllerModel.ApiExplorer.IsVisible == null)
            {
                controllerModel.ApiExplorer.IsVisible = true;
            }
        }

        #endregion 配置控制器导出可见情况 - private void ConfigureControllerApiExplorer(ControllerModel controllerModel)

        #region 配置Action模型信息 - private void ConfigureAction(ControllerModel controllerModel)

        /// <summary>
        /// 配置Action模型信息
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        private void ConfigureAction(ControllerModel controllerModel)
        {
            foreach (var actionModel in controllerModel.Actions)
            {
                var attachActionAttribute = AppGlobal.GetPublicMethodCustomAttribute<MirrorActionAttribute>(actionModel.ActionMethod);

                ConfigureActionApiExplorerAndParameters(actionModel);
                ConfigureActionName(actionModel, attachActionAttribute);

                if (actionModel.Selectors.IsNullOrEmpty() || actionModel.Selectors.Any(a => a.ActionConstraints.IsNullOrEmpty()))
                {
                    ConfigureActionRouteAndHttpMethod(controllerModel, actionModel, attachActionAttribute);
                }
                else
                {
                    // 合并路由
                    foreach (var selector in actionModel.Selectors)
                    {
                        var attributeRouteModel = ConfigureActionRoute(controllerModel, actionModel, attachActionAttribute);
                        selector.AttributeRouteModel = selector.AttributeRouteModel == null
                            ? attributeRouteModel
                            : AttributeRouteModel.CombineAttributeRouteModel(attributeRouteModel, selector.AttributeRouteModel);
                    }
                }
            }
        }

        #endregion 配置Action模型信息 - private void ConfigureAction(ControllerModel controllerModel)

        #region 配置Action导出可见情况 - private void ConfigureActionApiExplorerAndParameters(ActionModel actionModel)

        /// <summary>
        /// 配置Action导出可见情况及参数绑定
        /// </summary>
        /// <param name="actionModel">Action模型</param>
        private void ConfigureActionApiExplorerAndParameters(ActionModel actionModel)
        {
            if (actionModel.ApiExplorer.IsVisible == null)
            {
                actionModel.ApiExplorer.IsVisible = true;
            }

            // 参数值绑定
            ConfigureActionParameters(actionModel);
        }

        #endregion 配置Action导出可见情况 - private void ConfigureActionApiExplorerAndParameters(ActionModel actionModel)

        #region 配置Action名称 - private void ConfigureActionName(ActionModel actionModel)

        /// <summary>
        /// 配置Action名称
        /// </summary>
        /// <param name="actionModel"></param>
        private void ConfigureActionName(ActionModel actionModel, MirrorActionAttribute attachActionAttribute)
        {
            // 保留原始名称
            if (attachActionAttribute?.KeepOriginalName ?? false) return;

            actionModel.ActionName = Helper.ClearStringAffix(actionModel.ActionName, _attactControllerOptions.ClearActionRouteAffix);
            // 判断是否保留谓词
            if (_attactControllerOptions.RemoveActionRouteVerb && !(attachActionAttribute?.KeepRouteVerb ?? false))
            {
                var verbKey = Helper.GetCamelCaseFirstWord(actionModel.ActionName);
                if (Consts.HttpVerbSetter.ContainsKey(verbKey.ToLower()))
                {
                    actionModel.ActionName = actionModel.ActionName.Substring(verbKey.Length);
                }
            }
        }

        #endregion 配置Action名称 - private void ConfigureActionName(ActionModel actionModel)

        #region 配置Action路由和请求方式 - private void ConfigureActionRouteAndHttpMethod(ControllerModel controllerModel, ActionModel actionModel, AttachActionAttribute attachActionAttribute)

        /// <summary>
        /// 配置Action路由和请求方式
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        /// <param name="actionModel">Action模型</param>
        /// <param name="attachActionAttribute">镜面控制器模型</param>
        private void ConfigureActionRouteAndHttpMethod(ControllerModel controllerModel, ActionModel actionModel, MirrorActionAttribute attachActionAttribute)
        {
            var verbKey = Helper.GetCamelCaseFirstWord(actionModel.ActionMethod.Name).ToLower();
            var verb = Consts.HttpVerbSetter.ContainsKey(verbKey) ? Consts.HttpVerbSetter[verbKey] : _attactControllerOptions.DefaultHttpMethod.ToUpper();

            var actionModelSelector = actionModel.Selectors[0];

            if (actionModelSelector.AttributeRouteModel == null)
            {
                actionModelSelector.AttributeRouteModel = ConfigureActionRoute(controllerModel, actionModel, attachActionAttribute);
            }

            if (!actionModelSelector.ActionConstraints.Any())
            {
                actionModelSelector.ActionConstraints.Add(new HttpMethodActionConstraint(new[] { verb }));
                switch (verb)
                {
                    case "GET":
                        actionModelSelector.EndpointMetadata.Add(new HttpGetAttribute());
                        break;

                    case "POST":
                        actionModelSelector.EndpointMetadata.Add(new HttpPostAttribute());
                        break;

                    case "PUT":
                        actionModelSelector.EndpointMetadata.Add(new HttpPutAttribute());
                        break;

                    case "DELETE":
                        actionModelSelector.EndpointMetadata.Add(new HttpDeleteAttribute());
                        break;

                    default: throw new System.Exception($"Unsupported HttpVerb: {verb}");
                }
            }
        }

        #endregion 配置Action路由和请求方式 - private void ConfigureActionRouteAndHttpMethod(ControllerModel controllerModel, ActionModel actionModel, AttachActionAttribute attachActionAttribute)

        #region 配置Action路由信息 - private AttributeRouteModel ConfigureActionRoute(ControllerModel controllerModel, ActionModel actionModel, AttachActionAttribute attachActionAttribute)

        /// <summary>
        /// 配置Action路由信息
        /// </summary>
        /// <param name="controllerModel">控制器模型</param>
        /// <param name="actionModel">Acton模型</param>
        /// <param name="attachActionAttribute">附加Action特性</param>
        /// <returns>路由模型</returns>
        private AttributeRouteModel ConfigureActionRoute(ControllerModel controllerModel, ActionModel actionModel, MirrorActionAttribute attachActionAttribute)
        {
            var stringBuilder = new StringBuilder();
            var areaName = controllerModel.RouteValues.ContainsKey("area") ? controllerModel.RouteValues["area"] : null;

            // 后续用string.format
            stringBuilder.Append($"{_attactControllerOptions.DefaultStartRoutePrefix}/{areaName}/{controllerModel.ControllerName}");
            stringBuilder.Append("/##api_version##");

            var actionName = actionModel.ActionName;
            if (!(_attactControllerOptions.RemoveActionRouteVerb && !actionModel.ActionName.HasValue()))
            {
                if (attachActionAttribute?.SplitWordToRoutePath ?? false)
                {
                    var everyWords = Helper.CamelCaseSplitString(actionModel.ActionName);
                    actionName = string.Join("/", everyWords);
                }
            }

            // 准备好方法占位符
            if (actionName.HasValue())
            {
                stringBuilder.Append($"/##action_name##");
            }

            stringBuilder.Append($"##parameter_name##");
            var parameterNames = string.Empty;
            var apiVersion = string.Empty;
            // 读取参数信息
            var parameters = AppGlobal.Application.PublicMethodWrappers.FirstOrDefault(u => u.Method == actionModel.ActionMethod).Parameters;
            var i = 0;
            foreach (var parameterInfo in parameters)
            {
                var parameterType = parameterInfo.Type;
                var isContainUnderline = parameterInfo.Name.Equals("_");
                if (parameterType.IsPrimitivePlusIncludeNullable() && !parameterType.IsNullable() && !isContainUnderline)
                {
                    var parameterAttributes = parameterInfo.CustomAttributes;
                    var hasFromAttribute = parameterAttributes.Count() == 0 ||
                                                           parameterAttributes.Any(u => u.GetType() == typeof(FromRouteAttribute)) ||
                                                           parameterAttributes.Count(u => typeof(IBindingSourceMetadata).IsAssignableFrom(u.GetType())) == 0;

                    if (!hasFromAttribute) continue;

                    parameterNames += $"/{{{parameterInfo.Name}}}";
                }
                if (isContainUnderline)
                {
                    apiVersion = parameterInfo.Parameter.DefaultValue?.ToString();
                    actionModel.Parameters.RemoveAt(i);
                }
                i++;
            }

            var route = stringBuilder.ToString();
            route = _attactControllerOptions.LowerCaseUri ? route.ToLower() : route;
            route = route
                .Replace("##api_version##", apiVersion)
                .Replace("##action_name##", ((attachActionAttribute?.KeepOriginalName ?? false) ? actionName : actionName.ToLower()))
                .Replace("##parameter_name##", parameterNames)
                .Replace("//", "/");
            return new AttributeRouteModel(new RouteAttribute(route));
        }

        #endregion 配置Action路由信息 - private AttributeRouteModel ConfigureActionRoute(ControllerModel controllerModel, ActionModel actionModel, AttachActionAttribute attachActionAttribute)

        #region Action模型参数值绑定 - private void ConfigureActionParameters(ActionModel actionModel)

        /// <summary>
        /// Action模型参数值绑定
        /// </summary>
        /// <param name="actionModel">Action模型</param>
        private void ConfigureActionParameters(ActionModel actionModel)
        {
            foreach (var parameterModel in actionModel.Parameters)
            {
                if (parameterModel.BindingInfo != null) continue;

                if (!parameterModel.ParameterType.IsPrimitivePlusIncludeNullable() && CanBindingFromBody(actionModel, parameterModel))
                {
                    parameterModel.BindingInfo = BindingInfo.GetBindingInfo(new[] { new FromBodyAttribute() });
                }
            }
        }

        #endregion Action模型参数值绑定 - private void ConfigureActionParameters(ActionModel actionModel)

        #region 检查是否能够通过Body绑定参数值 - private bool CanBindingFromBody(ActionModel actionModel, ParameterModel parameterModel)

        /// <summary>
        /// 检查是否能够通过Body绑定参数值
        /// </summary>
        /// <param name="actionModel">Action模型</param>
        /// <param name="parameterModel">参数模型</param>
        /// <returns>是否能够绑定</returns>
        private bool CanBindingFromBody(ActionModel actionModel, ParameterModel parameterModel)
        {
            var parameterType = parameterModel.ParameterType;
            if (Consts.BindFromBodyIgnoreTypes.Any(u => u.IsAssignableFrom(parameterType))) return false;

            foreach (var actionModelSelector in actionModel.Selectors)
            {
                if (actionModelSelector.ActionConstraints == null) continue;

                foreach (var actionConstraint in actionModelSelector.ActionConstraints)
                {
                    if (!(actionConstraint is HttpMethodActionConstraint httpMethodActionConstraint)) continue;

                    var httpMethods = new string[] { "GET", "DELETE", "TRACE", "HEAD" };
                    if (httpMethodActionConstraint.HttpMethods.All(u => httpMethods.Contains(u))) return false;
                }
            }

            return true;
        }

        #endregion 检查是否能够通过Body绑定参数值 - private bool CanBindingFromBody(ActionModel actionModel, ParameterModel parameterModel)
    }
}