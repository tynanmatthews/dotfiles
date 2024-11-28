"use strict";exports.id=733,exports.ids=[733],exports.modules={29733:(T,d,o)=>{o.r(d),o.d(d,{fromTokenFile:()=>E,fromWebToken:()=>l});var i=o(10889),c=o(79896);const l=e=>async()=>{e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");const{roleArn:n,roleSessionName:s,webIdentityToken:r,providerId:N,policyArns:S,policy:f,durationSeconds:A}=e;let{roleAssumerWithWebIdentity:t}=e;if(!t){const{getDefaultRoleAssumerWithWebIdentity:I}=await o.e(648).then(o.bind(o,26648));t=I({...e.clientConfig,credentialProviderLogger:e.logger,parentClientConfig:e.parentClientConfig},e.clientPlugins)}return t({RoleArn:n,RoleSessionName:s??`aws-sdk-js-session-${Date.now()}`,WebIdentityToken:r,ProviderId:N,PolicyArns:S,Policy:f,DurationSeconds:A})},g="AWS_WEB_IDENTITY_TOKEN_FILE",a="AWS_ROLE_ARN",y="AWS_ROLE_SESSION_NAME",E=(e={})=>async()=>{e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");const n=e?.webIdentityTokenFile??process.env[g],s=e?.roleArn??process.env[a],r=e?.roleSessionName??process.env[y];if(!n||!s)throw new i.C1("Web identity configuration not specified",{logger:e.logger});return l({...e,webIdentityToken:(0,c.readFileSync)(n,{encoding:"ascii"}),roleArn:s,roleSessionName:r})()}}};
