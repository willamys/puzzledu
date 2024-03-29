
/*

  SmartClient Ajax RIA system
  Version 7.0beta4/LGPL Development Only (2009-02-24)

  Copyright 2000-2007 Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE EVALUATION LICENSE AGREEMENT. If you have received this file
     without an Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/isc_eval_license_050316.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  EVALUATION ONLY
     This software is provided for limited evaluation purposes only. You must
     acquire a deployment license from Isomorphic Software in order to use
     the SmartClient system, or any portion thereof, in any non-evaluation
     application, including internal or non-commercial applications.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

var isc = window.isc ? window.isc : {};if(window.isc&&!window.isc.module_Core){isc.module_Core=1;isc._moduleStart=isc._Core_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log && isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={ message:'Core load/parse time: ' + (isc._moduleStart-isc._moduleEnd) + 'ms', category:'loadTime'};
if(isc.Log && isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime')
else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM
else isc._preLog=[isc._pTM]}var isc=window.isc?window.isc:{};isc.$d=new Date().getTime();isc.version="7.0beta4/LGPL Development Only";isc.versionNumber="7.0beta4";isc.buildDate="2009-02-24";isc.expirationDate="";isc.licenseType="LGPL";isc.licenseCompany="Isomorphic Software";isc.licenseSerialNumber="ISC_LGPL_7beta4";isc.licensingPage="http://smartclient.com/licensing";isc.$41r={SCServer:{present:"false",name:"SmartClient Server",serverOnly:true},Drawing:{present:"false",name:"Drawing Module"},PluginBridges:{present:"false",name:"PluginBridges Module"},RichTextEditor:{present:"true",name:"RichTextEditor Module"},Calendar:{present:"true",name:"Calendar Module"},Analytics:{present:"false",name:"Analytics Module"},NetworkPerformance:{present:"false",name:"Network Performance Module"},FileLoader:{present:"false",name:"Network Performance Module"},RealtimeMessaging:{present:"false",name:"RealtimeMessaging Module"}};isc.canonicalizeModules=function(_1){if(!_1)return null;if(isc.isA.String(_1)){if(_1.indexOf(",")!=-1)_1=_1.split(",");else _1=[_1]}
return _1};isc.hasOptionalModules=function(_1){if(!_1)return true;_1=isc.canonicalizeModules(_1);for(var i=0;i<_1.length;i++)if(!isc.hasOptionalModule(_1[i]))return false;return true};isc.getMissingModules=function(_1){var _2=[];_1=isc.canonicalizeModules(_1);for(var i=0;i<_1.length;i++){var _4=_1[i];if(!isc.hasOptionalModule(_4))_2.add(isc.$41r[_4])}
return _2};isc.hasOptionalModule=function(_1){var v=isc.$41r[_1];if(!v){if(isc.Log)isc.Log.logWarn("isc.hasOptionalModule - unknown module: "+_1);return false}
return v.present=="true"||v.present.charAt(0)=="$"};isc.$a=window.isc_useSimpleNames;if(isc.$a==null)isc.$a=true;if(window.OpenAjax){isc.$b=isc.versionNumber.replace(/[a-zA-Z_]+/,".0");OpenAjax.registerLibrary("SmartClient","http://smartclient.com/SmartClient",isc.$b,{namespacedMode:!isc.$a,iscVersion:isc.version,buildDate:isc.buildDate,licenseType:isc.licenseType,licenseCompany:isc.licenseCompany,licenseSerialNumber:isc.licenseSerialNumber});OpenAjax.registerGlobals("SmartClient",["isc"])}
isc.$e=window.isc_useLongDOMIDs;isc.$f="isc.";isc.addGlobal=function(_1,_2){if(_1.indexOf(isc.$f)==0)_1=_1.substring(4);isc[_1]=_2;if(isc.$a)window[_1]=_2}
isc.onLine=true;isc.isOffline=function(){return!isc.onLine};isc.goOffline=function(){isc.onLine=false};isc.goOnline=function(){isc.onLine=true};if(window.addEventListener){window.addEventListener("online",isc.goOnline,false);window.addEventListener("offline",isc.goOffline,false)}
isc.addGlobal("Browser",{isSupported:false});isc.Browser.isOpera=(navigator.appName=="Opera"||navigator.userAgent.indexOf("Opera")!=-1);isc.Browser.isNS=(navigator.appName=="Netscape"&&!isc.Browser.isOpera);isc.Browser.isIE=(navigator.appName=="Microsoft Internet Explorer"&&!isc.Browser.isOpera);isc.Browser.isMSN=(isc.Browser.isIE&&navigator.userAgent.indexOf("MSN")!=-1);isc.Browser.minorVersion=parseFloat(isc.Browser.isIE?navigator.appVersion.substring(navigator.appVersion.indexOf("MSIE")+5):navigator.appVersion);isc.Browser.version=parseInt(isc.Browser.minorVersion);isc.Browser.isIE6=isc.Browser.isIE&&isc.Browser.version<=6;isc.Browser.isMoz=(navigator.userAgent.indexOf("Gecko")!=-1)&&(navigator.userAgent.indexOf("Safari")==-1)&&(navigator.userAgent.indexOf("AppleWebKit")==-1);isc.Browser.isCamino=(isc.Browser.isMoz&&navigator.userAgent.indexOf("Camino/")!=-1);if(isc.Browser.isCamino){isc.Browser.caminoVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Camino/")+7)}
isc.Browser.isFirefox=(isc.Browser.isMoz&&navigator.userAgent.indexOf("Firefox/")!=-1);if(isc.Browser.isFirefox){isc.Browser.firefoxVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox/")+8)}
if(isc.Browser.isMoz){isc.Browser.$g=navigator.userAgent.indexOf("Gecko/")+6;isc.Browser.geckoVersion=parseInt(navigator.userAgent.substring(isc.Browser.$g,isc.Browser.$g+8));if(isc.Browser.isFirefox){if(isc.Browser.firefoxVersion.match(/^1\.0/))isc.Browser.geckoVersion=20050915;else if(isc.Browser.firefoxVersion.match(/^2\.0/))isc.Browser.geckoVersion=20071108}}
isc.Browser.isStrict=document.compatMode=="CSS1Compat";if(isc.Browser.isStrict&&isc.Browser.isMoz){isc.Browser.$51p=document.doctype.publicId;isc.Browser.$51q=document.doctype.systemId;isc.Browser.isTransitional=isc.Browser.$51p.indexOf("Transitional")!=-1||isc.Browser.$51p.indexOf("Frameset")!=-1}
isc.Browser.isIE8Strict=isc.Browser.isIE&&isc.Browser.isStrict&&document.documentMode>7;isc.Browser.isBorderBox=isc.Browser.isIE&&!isc.Browser.isStrict;isc.Browser.isAIR=(navigator.userAgent.indexOf("AdobeAIR")!=-1);isc.Browser.AIRVersion=(isc.Browser.isAIR?navigator.userAgent.substring(navigator.userAgent.indexOf("AdobeAir/")+9):null);isc.Browser.isSafari=isc.Browser.isAIR||navigator.userAgent.indexOf("Safari")!=-1||navigator.userAgent.indexOf("AppleWebKit")!=-1;isc.Browser.isChrome=isc.Browser.isSafari&&(navigator.userAgent.indexOf("Chrome/")!=-1);if(isc.Browser.isSafari){if(isc.Browser.isAIR){isc.Browser.safariVersion=530}else{if(navigator.userAgent.indexOf("Safari/")!=-1){isc.Browser.rawSafariVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Safari/")+7)}else if(navigator.userAgent.indexOf("AppleWebKit/")!=-1){isc.Browser.rawSafariVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("AppleWebKit/")+12)}else{isc.Browser.rawSafariVersion="530"}
isc.Browser.safariVersion=(function(){var _1=isc.Browser.rawSafariVersion,_2=_1.indexOf(".");if(_2==-1)return parseInt(_1);var _3=_1.substring(0,_2+1),_4;while(_2!=-1){_2+=1;_4=_1.indexOf(".",_2);_3+=_1.substring(_2,(_4==-1?_1.length:_4));_2=_4}
return parseFloat(_3)})()}}
isc.Browser.isWin=navigator.platform.toLowerCase().indexOf("win")>-1;isc.Browser.isWin2k=navigator.userAgent.match(/NT 5.01?/)!=null;isc.Browser.isMac=navigator.platform.toLowerCase().indexOf("mac")>-1;isc.Browser.isUnix=(!isc.Browser.isMac&&!isc.Browser.isWin);isc.Browser.lineFeed=(isc.Browser.isWin?"\r\n":"\r");isc.Browser.$h=false;isc.Browser.isDOM=(isc.Browser.isMoz||isc.Browser.isOpera||isc.Browser.isSafari||(isc.Browser.isIE&&isc.Browser.version>=5));isc.Browser.isSupported=((isc.Browser.isIE&&isc.Browser.minorVersion>=5.5&&isc.Browser.isWin)||isc.Browser.isMoz||isc.Browser.isOpera||isc.Browser.isSafari||isc.Browser.isAIR);isc.noOp=function(){};isc.emptyObject={};isc.$ac=[];isc.emptyString=isc.$ad="";isc.dot=".";isc.semi=";";isc.colon=":";isc.slash="/";isc.star="*";isc.auto="auto";isc.px="px";isc.nbsp="&nbsp;";isc.xnbsp="&amp;nbsp;";isc.$ae="false";isc.$af="FALSE";isc.$ag="_";isc.$ah="_$_";isc.$ai="_$SuperProto_";isc.logWarn=function(_1,_2){isc.Log.logWarn(_1,_2)}
isc.echo=function(_1){return isc.Log.echo(_1)}
isc.echoAll=function(_1){return isc.Log.echoAll(_1)}
isc.echoLeaf=function(_1){return isc.Log.echoLeaf(_1)}
isc.echoFull=function(_1){return isc.Log.echoFull(_1)}
isc.logEcho=function(_1,_2){if(_2)_2+=": ";isc.Log.logWarn((_2||isc.$ad)+isc.echo(_1))}
isc.logEchoAll=function(_1,_2){if(_2)_2+=": ";isc.Log.logWarn((_2||isc.$ad)+isc.echoAll(_1))}
isc.$aq=function(_1,_2){var _3=_2||_1;return _2==null?new Function(_3):new Function(_1,_3)};isc.doEval=function(_1){if(isc.Browser.isMoz)return isc.$as(_1);if(!isc.$at)isc.$at=[];isc.$at[isc.$at.length]=_1;return null}
isc.finalEval=function(){if(isc.$at){if(isc.Browser.isMoz){for(var i=0;i<isc.$at.length;i++){isc.eval(isc.$at[i])}}
var _2=isc.$at.join("");if(isc.Browser.isSafari)_2=isc.$as(_2);if(isc.Browser.isIE)window.execScript(_2,"javascript");else isc.eval(_2)}
isc.$at=null}
isc.$au="//$0";isc.$av="//$1";isc.$aw=0;isc.$ax=true;isc.$as=function(_1){isc.$ar=true;var _2=isc.timeStamp?isc.timeStamp():new Date().getTime();var _3=isc.$aj,_4=isc.$ay;if(isc.$ax)_3=isc.$an+_3;var _5=_1.split(isc.$az),_6=[];var _5=_1.split(isc.$au);_1=_5.join(_3);_5=_1.split(isc.$av);_1=_5.join(_4);if(isc.$ax){_5=_1.split("//$2");_1=_5.join(isc.$ap)}
var _7=isc.timeStamp?isc.timeStamp():new Date().getTime();isc.$aw+=(_7-_2);return _1}
isc.$ay="}catch($al){isc.eval(isc.$a0(";isc.$a0=function(_1){var _2="var _ = {";if(_1!=""){var _3=_1.split(",");for(var i=0;i<_3.length;i++){var _5=_3[i];_2+=_5+":"+_5;if(i<_3.length-1)_2+=","}}
_2+="};";_2+="if(isc.Log)isc.Log.$am($al,arguments,this,_);throw $al;";return _2}
isc.fillList=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27){if(_1==null)_1=[];else _1.length=0;var _28;if(_25===_28&&_26===_28&&_27===_28){_1[0]=_2;_1[1]=_3;_1[2]=_4;_1[3]=_5;_1[4]=_6;_1[5]=_7;_1[6]=_8;_1[7]=_9;_1[8]=_10;_1[9]=_11;_1[10]=_12;_1[11]=_13;_1[12]=_14;_1[13]=_15;_1[14]=_16;_1[15]=_17;_1[16]=_18;_1[17]=_19;_1[18]=_20;_1[19]=_21;_1[20]=_22;_1[21]=_23;_1[22]=_24}else{for(var i=1;i<arguments.length;i++){_1[i-1]=arguments[i]}}
return _1}
isc.$a1=[];isc.addGlobal("addProperties",function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27){var _28,_29=isc.$a1;if(_25===_28&&_26===_28&&_27===_28){isc.fillList(_29,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27)}else{_29.length=0;for(var i=1;i<arguments.length;i++){_29[i-1]=arguments[i]}}
var _31=isc.addPropertyList(_1,_29);_29.length=0;return _31});isc.$a2={};isc.$a3={};isc.$a4=function(_1){var _2=_1.Class,_3;if(isc.isA.ClassObject(_1)){_3=isc.$a3[_2]=isc.$a3[_2]||[]}else if(isc.isAn.InstancePrototype(_1)){_3=isc.$a2[_2]=isc.$a2[_2]||[]}
return _3}
isc.addPropertyList=function(_1,_2){if(_1==null){if(isc.Log)isc.Log.logWarn("Attempt to add properties to a null object. "+"Creating a new object for the list of properties.");_1={}}
var _3,_4=(isc.isA!=null),_5=(isc.isAn&&isc.isAn.Instance(_1)?_1.getClass()._stringMethodRegistry:_1._stringMethodRegistry);if(_5==null)_5=isc.emptyObject;var _6=_1.$a5?isc.$a4(_1):null;for(var i=0,l=_2.length;i<l;i++){var _9=_2[i];if(_9==null)continue;for(var _10 in _9){var _11=_9[_10];var _12;if(_5[_10]!==_12||(_4&&isc.isA.Function(_11)))
{if(_3==null)_3={};_3[_10]=_11}else{if(_6!=null)_6[_6.length]=_10;if(isc.Log!=null&&_4&&(!isc.isA.Function(_11)&&isc.isA.Function(_1[_10])))
{isc.Log.logWarn("method "+_10+" on "+_1+" overriden with non-function: '"+_11+"'")}
_1[_10]=_11}}}
if(_3!=null)isc.addMethods(_1,_3);return _1}
isc.$a6="string";isc.$a7="function";isc.$a8="constructor";isc.$bl="object";isc.addGlobal("addMethods",function(_1,_2){if(!_1||!_2)return _1;var _3=_1.$a5?isc.$a4(_1):null;if(!isc.$a9)isc.$a9={};for(var _4 in _2){if(_3!=null)_3[_3.length]=_4;var _5=_2[_4];if(isc.isAn.Instance!=null&&_5!=null&&(typeof _5==isc.$a6||typeof _5==isc.$bl))
{var _6=(isc.isAn.Instance(_1)?_1.getClass()._stringMethodRegistry:_1._stringMethodRegistry);var _7;if(_6&&!(_6[_4]===_7)&&_4!=isc.$a8)
{_5=isc.Func.expressionToFunction(_6[_4],_2[_4])}}
var _8=_1.$ba,_9=(_8!=null&&_8[_4]!=null?isc.$ah+_4:_4);if(_5!==_1[_9]){if(_5!=null){this.$bb(_5,_4,_1)}
_1[_9]=_5;if(_5!=null){if(isc.$a9[_4]){var _10=(_1.$ba!=null&&_1.$ba[isc.$a9[_4]]!=null?isc.$ah+isc.$a9[_4]:isc.$a9[_4]);_1[_10]=_5}}}}
return _1});isc._allFuncs=[]
isc._allFuncs._maxIndex=0;isc._funcClasses=new Array(5000);isc.$bb=function(_1,_2,_3){if(typeof _1!=isc.$a7)return;if(_3.Class==null)return _1.$bc=_2;if(isc.isA!=null&&isc.isAn.InstancePrototype!=null&&(isc.isAn.InstancePrototype(_3)||isc.isA.ClassObject(_3)))
{var _4=isc._allFuncs;_4[_4._maxIndex]=_1;isc._funcClasses[_4._maxIndex]=_3.Class;_4._maxIndex++;return}
var _5=(_3==isc.isA?"isA":_3.Class);_1.$bd=_5;if(isc[_3.Class]==null)_1.$bc=_2;if(isc.isA!=null&&isc.isAn.Instance!=null&&isc.isAn.Instance(_3)&&!isc.isAn.InstancePrototype(_3))
{_1.$bc=_2;_1.$be=true;if(_3[_2]!=null)_1.$bf=true}}
isc.addGlobal("getKeys",function(_1){var _2=[];if(_1!=null){for(var _3 in _1){_2[_2.length]=_3}}
return _2});isc.addGlobal("firstKey",function(_1){for(var _2 in _1)return _2});isc.addGlobal("getValues",function(_1){var _2=[];if(_1!=null){for(var _3 in _1){_2[_2.length]=_1[_3]}}
return _2});isc.addGlobal("sortObject",function(_1,_2){if(!isc.isA.Object(_1))return _1;if(isc.isAn.Array(_1)){if(_2!=null)return _1.sort(_2);return _1.sort()}
var _3=isc.getKeys(_1);_3=(_2==null?_3.sort():_3.sort(_2));var _4={};for(var i=0;i<_3.length;i++){_4[_3[i]]=_1[_3[i]]}
return _4});isc.addGlobal("sortObjectByProperties",function(_1,_2){if(!isc.isA.Object(_1))return _1;if(isc.isAn.Array(_1)){if(_2!=null)return _1.sort(_2);return _1.sort()}
var _3=isc.getValues(_1);_3=(_2==null?_3.sort():_3.sort(_2));var _4={};for(var i=0;i<_3.length;i++){var _6=_3[i];for(var _7 in _1){if(_1[_7]===_6){_4[_7]=_1[_7];continue}}}
return _4});isc.addGlobal("addDefaults",function(_1,_2){if(_1==null)return;var _3;for(var _4 in _2){if(_1[_4]===_3)_1[_4]=_2[_4]}
return _1});isc.addGlobal("propertyDefined",function(_1,_2){if(_1==null)return false;var _3;if(_1[_2]!==_3)return true;var _4=isc.getKeys(_1);return(_4.contains(_2))});isc.applyMask=function(_1,_2){var _3={};if(_1==null)return _3;if(_2==null){return isc.addProperties(_3,_1)}
var _4=false;if(!isc.isAn.Array(_1)){_4=true;_1=[_1]}
if(!isc.isAn.Array(_2))_2=isc.getKeys(_2);var _3=[],_5,_6,_7,_8;for(var i=0;i<_1.length;i++){_5=_1[i];_6=_3[i]={};for(var j=0;j<_2.length;j++){_7=_2[j];if(_5[_7]===_8)continue;_6[_7]=_5[_7]}}
return(_4?_3[0]:_3)}
isc.getProperties=function(_1,_2){if(_1==null)return null;var _3={};if(_2==null)return _3;for(var i=0;i<_2.length;i++){var _5=_2[i];_3[_5]=_1[_5]}
return _3}
isc.$bg={};isc.$bh=Math.floor;isc.$bi="-";for(isc.$bj=0;isc.$bj<10;isc.$bj++)
isc.$bg[isc.$bj]=isc.$bj.toString();isc.$bk=function(_1,_2,_3,_4){var _5=_3+_4-1,_6=_2,_7=false,_8;if(_2<0){_8=true;_2=-_2;_1[_3]=this.$bi;_3+=1;_4-=1}
while(_2>9){var _9=this.$bh(_2/ 10),_10=_2-(_9*10);_1[_5]=this.$bg[_10];_2=_9;if(_5==(_3+1)&&_2>9){isc.Log.logWarn("fillNumber: number too large: "+_6+isc.Log.getStackTrace());_7=true;break}
_5-=1}
if(_7){_5=_3+_4-1
_1[_5--]=(!_8?_6:-_6)}else{_1[_5--]=this.$bg[_2]}
for(var i=_5;i>=_3;i--){_1[i]=null}}
isc.booleanValue=function(_1,_2){if(_1==null)return _2;if(isc.isA.String(_1))return _1!=isc.$ae&&_1!=isc.$af;return _1?true:false}
isc.iscToLocaleString=function(_1){if(_1!=null){return _1.iscToLocaleString?_1.iscToLocaleString():(_1.toLocaleString?_1.toLocaleString():(_1.toString?_1.toString():isc.emptyString+_1))}
return isc.emptyString+_1}
isc.addGlobal("isA",{});isc.addGlobal("isAn",isc.isA);isc.addGlobal("is",isc.isA);isc.isA.Class="isA";isc.isA.isc=isc.isA;Function.$k=1;Array.$k=2;Date.$k=3;String.$k=4;Number.$k=5;Boolean.$k=6;RegExp.$k=7;Object.$k=8;Function.prototype.$k=1;isc.A=isc.isA;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$bl="object";isc.A.$a7="function";isc.A.$bm="text/xml";isc.A.$58k={SelectItem:true};isc.B.push(isc.A.emptyString=function(_1){return isc.isA.String(_1)&&_1==isc.emptyString}
,isc.A.nonemptyString=function(_1){return isc.isA.String(_1)&&_1!=isc.emptyString}
,isc.A.Object=function(_1){if(_1==null)return false;if(isc.Browser.isIE&&typeof _1==this.$a7)return false;if(_1.constructor&&_1.constructor.$k!=null){var _2=_1.constructor.$k;if(_2==1){}else{return(_2==8||_2==7||_2==3||_2==2)}}
if(typeof _1==this.$bl){if(isc.Browser.isIE&&isc.isA.Function(_1))return false;else return true}else{if(isc.Browser.isMoz&&isc.isA.RegularExpression(_1))return true;else return false}}
,isc.A.emptyObject=function(_1){if(!isc.isAn.Object(_1))return false;for(var i in _1){return false}
return true}
,isc.A.String=function(_1){if(_1==null)return false;if(typeof _1==this.$a7)return false;if(_1.constructor&&_1.constructor.$k!=null){return _1.constructor.$k==4}
return typeof _1=="string"}
,isc.A.Array=function(_1){if(_1==null)return false;if(typeof _1==this.$a7)return false;if(_1.constructor&&_1.constructor.$k!=null){return _1.constructor.$k==2}
if(isc.Browser.isSafari)return""+_1.splice=="(Internal function)";return""+_1.constructor==""+Array}
,isc.A.Function=function(_1){if(_1==null)return false;if(isc.Browser.isIE&&typeof _1==this.$a7)return true;var _2=_1.constructor;if(_2&&_2.$k!=null){if(_2.$k!=1)return false;if(_2===Function)return true}
return isc.Browser.isIE?(isc.emptyString+_1.constructor==Function.toString()):(typeof _1==this.$a7)}
,isc.A.Number=function(_1){if(_1==null)return false;if(_1.constructor&&_1.constructor.$k!=null){if(_1.constructor.$k!=5)return false}else{if(typeof _1!="number")return false}
return!isNaN(_1)&&_1!=Number.POSITIVE_INFINITY&&_1!=Number.NEGATIVE_INFINITY}
,isc.A.SpecialNumber=function(_1){if(_1==null)return false;if(_1.constructor&&_1.constructor.$k!=null){if(_1.constructor.$k!=5)return false}else{if(typeof _1!="number")return false}
return(isNaN(_1)||_1==Number.POSITIVE_INFINITY||_1==Number.NEGATIVE_INFINITY)}
,isc.A.Boolean=function(_1){if(_1==null)return false;if(_1.constructor&&_1.constructor.$k!=null){return _1.constructor.$k==6}
return typeof _1=="boolean"}
,isc.A.Date=function(_1){if(_1==null)return false;if(_1.constructor&&_1.constructor.$k!=null){return _1.constructor.$k==3}
return(""+_1.constructor)==(""+Date)&&_1.getDate&&isc.isA.Number(_1.getDate())}
,isc.A.RegularExpression=function(_1){if(_1==null)return false;if(_1.constructor&&_1.constructor.$k!=null){return _1.constructor.$k==7}
return(""+_1.constructor)==(""+RegExp)}
,isc.A.XMLNode=function(_1){if(_1==null)return false;if(isc.Browser.isIE){return _1.specified!=null&&_1.parsed!=null&&_1.nodeType!=null&&_1.hasChildNodes!=null}
var _2=_1.ownerDocument;if(_2==null)return false;return _2.contentType==this.$bm}
,isc.A.AlphaChar=function(_1){var _2=_1.charCodeAt(0)
return((_2>=65&&_2<=90)||(_2>=97&&_2<=122))}
,isc.A.NumChar=function(_1){var _2=_1.charCodeAt(0)
return(_2>=48&&_2<=57)}
,isc.A.AlphaNumericChar=function(_1){return(isc.isA.AlphaChar(_1)||isc.isA.NumChar(_1))}
,isc.A.WhitespaceChar=function(_1){var _2=_1.charCodeAt(0)
return(_2>=0&&_2<=32)}
,isc.A.color=function(_1){if(!isc.isA.String(_1))return false;if(!this.$bn){this.$bn=new RegExp("^(#([\\dA-F]{2}){3}|"+"rgb\\((\\s*[\\d]{1,3}\\s*,\\s*){2}\\s*[\\d]{1,3}\\s*\\)|"+"[a-z]+)$","i")}
return this.$bn.test(_1)}
,isc.A.ResultSet=function(_1){return false}
,isc.A.ResultTree=function(_1){return false}
,isc.A.SelectItem=function(_1){if(!_1||!isc.isA.FormItem(_1))return false;var _2=_1.getClass();return(_2==isc.SelectItem||_2==isc.NativeSelectItem)}
,isc.A.SelectOtherItem=function(_1){if(!_1||!isc.isA.FormItem(_1))return false;var _2=_1.getClass();return((_2==isc.SelectItem||_2==isc.NativeSelectItem)&&_1.isSelectOther)}
);isc.B._maxIndex=isc.C+22;isc.addGlobal("ClassFactory",{});isc.ClassFactory.Class="ClassFactory";isc.A=isc.isA;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.Instance=function(_1){return(_1!=null&&_1.$bo!=null)}
,isc.A.ClassObject=function(_1){return(_1!=null&&_1.$bp==true)}
,isc.A.Interface=function(_1){return(_1!=null&&_1.$a5==true)}
,isc.A.InstancePrototype=function(_1){return(isc.isAn.Instance(_1)&&_1.$bo==_1)}
);isc.B._maxIndex=isc.C+4;isc.A=isc.ClassFactory;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$f="isc.";isc.A.$bq="Window";isc.A.$br="Selection";isc.A.$bs={};isc.A.$bt="object";isc.A.$bu=["if(object==null||object.isA==null||object.isA==isc.isA)return false;return object.isA(isc.",null,")"];isc.A.$60l={toolbar:true,parent:true,window:true};isc.A._$isc_OID_="isc_OID_";isc.A._$isc_="isc_";isc.A.$bv="_";isc.A.$bw=[];isc.A.reuseGlobalIDs=true;isc.A.globalIDClassPoolSize=1000;isc.A.$63v={};isc.A.$bx=0;isc.A._$isc_="isc_";isc.A.$by=[null,"_",null];isc.A.reuseDOMIDs=false;isc.A.DOMIDPoolSize=10000;isc.A.$63w=[];isc.A.$bz=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];isc.A.$b0=[];isc.A.$b1="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p";isc.B.push(isc.A.defineClass=function(_1,_2,_3,_4){return this.$b2(_1,_2,_3,null,_4)}
,isc.A.defineInterface=function(_1,_2){return this.$b2(_1,_2,null,true)}
,isc.A.defineRootClass=function(_1){return this.$b3(_1,null)}
,isc.A.$b2=function(_1,_2,_3,_4,_5){_2=(_2||isc.ClassFactory.defaultSuperClass);if(!_2){isc.Log.logWarn("isc.ClassFactory.defineClass("+_1+") called with null"+" superClass and no ClassFactory.defaultRootClass is defined.");return null}
return this.$b3(_1,_2,_3,_4,_5)}
,isc.A.$b3=function(_1,_2,_3,_4,_5){var _6=(isc.Browser.isMoz&&(_1==this.$bq||_1==this.$br));var _7,_8,_9=(isc.$a&&!_5);_7=isc[_1];if(_7!=null)_8=true
else if(_9&&!_6){_7=window[_1]}
if(_7!=null&&_1!="IButton")
{var _10="New Class ID: '"+_1+"' collides with ID of existing "+(isc.isA&&isc.isA.Function(isc.isA.Class)&&isc.isA.Class(_7)?"Class object '":"object with value '")+_7+"'.  Existing object will be replaced.";if(!_8)_10+="\nThis conflict would be avoided by disabling "+"ISC Simple Names mode.  See documentation for "+"further information."
if(window.isc.Log)isc.Log.logWarn(_10)}
_2=this.getClass(_2);var _11=(_2?new _2.$b4.$b5():{});var _12=this.$b6(_2);_11.$b5=this.$b7(_11);_12.Class=_1;_12.$bp=true;_12.$a5=_11.$a5=!!_4;_12.$b8=_2;_12.$b4=_11;_11.Class=_1;_11.$b9=_12;_11.$bo=_11;isc[_1]=_12;if(_9)window[_1]=_12;this.classList[this.classList.length]=_1
if(!(isc.isA.$58k[_1]&&isc.isA[_1])){isc.isA[_1]=this.makeIsAFunc(_1)}
if(_3!=null){if(!isc.isAn.Array(_3))_3=[_3];for(var i=0;i<_3.length;i++){this.mixInInterface(_1,_3[i])}}
return _12}
,isc.A.makeIsAFunc=function(_1){if(this.isFirefox2==null){this.isFirefox2=(isc.Browser.isFirefox&&isc.Browser.geckoVersion>=20061010)}
if(this.isFirefox2){return function(_3){if(_3==null||_3.isA==null||_3.isA==isc.isA)return false;return _3.isA(_1)}}else{var _2=this.$bu;_2[1]=_1;return new Function(this.$bt,_2.join(isc.$ad))}}
,isc.A.$b6=function(_1){if(!_1)return{};var _2=_1.$b8,_3=_1.$ca;if(!
(_3&&(_2==null||_3!==_2.$ca)))
{_3=_1.$ca=this.$b7(_1)}
return new _3()}
,isc.A.getClass=function(_1){if(isc.isA.String(_1)){var _2=isc[_1];if(_2&&isc.isA.ClassObject(_2)){return _2}}
if(isc.isA.ClassObject(_1))return _1;if(isc.isAn.Instance(_1))return _1.$b9;return null}
,isc.A.newInstance=function(_1,_2,_3,_4,_5,_6){var _7=this.getClass(_1);if(_7==null&&isc.isAn.Object(_1)){var _8;for(var i=0;i<arguments.length;i++){var _10=arguments[i];if(_10!=null&&_10._constructor!=null)
{_8=_10._constructor}}
_6=_5;_5=_4;_4=_3;_3=_2;_2=_1;_1=_8;if(isc.isA.String(_2.constructor)){if(_1==null)_1=_2.constructor;isc.Log.logWarn("ClassFactory.newInstance() passed an object with illegal 'constructor' "+"property - removing this property from the final object. "+"To avoid seeing this message in the future, "+"specify the object's class using '_constructor'.","ClassFactory");_2.constructor=null}
_7=this.getClass(_8)}
if(_7==null){isc.Log.logWarn("newInstance("+_1+"): class not found","ClassFactory");return null}
return _7.newInstance(_2,_3,_4,_5,_6)}
,isc.A.$b7=function(_1){var _2=(isc.Browser.isSafari?function(){}:new Function());_2.prototype=_1;return _2}
,isc.A.addGlobalID=function(_1,_2,_3){_1.ID=_2||_1.ID;if(_1.ID==null){_1.ID=this.getNextGlobalID(_1);_1.$541=true}
var _4=this.getWindow();var _5,_6;if(_4[_1.ID]!=null){var _7=isc.isA.Canvas(_4[_1.ID]);if(!_3){isc.Log.logWarn("ClassFactory.addGlobalID: ID:'"+_1.ID+"' for object '"+_1+"' collides with ID of existing object '"+_4[_1.ID]+"'."+(_7?" The pre-existing widget will be destroyed.":" The global reference to this object will be replaced"))}
if(_7)_4[_1.ID].destroy();if(!_7){if(this.$60l[_2])_5=true;else _6=true}}
if(!_5){if(_6){try{_4[_1.ID]=_1}catch(e){_5=true}
if(_4[_1.ID]!=_1){_5=true}}else{_4[_1.ID]=_1}}
if(_5){var _8=this.getNextGlobalID(_1);isc.logWarn("ClassFactory.addGlobalID: ID specified as:"+_1.ID+". This is a reserved word in Javascript or a native property of the"+" browser window object and can not be used as an ID."+" Setting ID to "+_8+" instead.");_1.ID=_8;_1.$541=true;_4[_1.ID]=_1}
if(isc.globalsSnapshot)isc.globalsSnapshot.add(_1.ID)}
,isc.A.getNextGlobalID=function(_1){if(_1!=null&&isc.isA.String(_1.Class)){var _2=this.$63v[_1.Class]
if(_2&&_2.length>0){var _3=_2[_2.length-1];_2.length=_2.length-1;return _3}
var _4=this.$bw;_4[0]=this._$isc_;_4[1]=_1.Class;_4[2]=this.$bv;isc.$bk(_4,this.$cb++,3,5);var _5=_4.join(isc.emptyString);return _5}
return this._$isc_OID_+this.$cb++}
,isc.A.dereferenceGlobalID=function(_1){if(window[_1.ID]==_1){window[_1.ID]=null;if(_1.Class!=null&&_1.$541){this.releaseGlobalID(_1.Class,_1.ID)}}}
,isc.A.releaseGlobalID=function(_1,_2){if(!this.reuseGlobalIDs)return;var _3=this.$63v[_1];if(!_3)this.$63v[_1]=[_2];else if(_3.length<=this.globalIDClassPoolSize)_3[_3.length]=_2}
,isc.A.releaseDOMID=function(_1){if(!this.reuseDOMIDs||this.$63w.length>this.DOMIDPoolSize)return;this.$63w[this.$63w.length]=_1}
,isc.A.getDOMID=function(_1,_2){if(!isc.$e||!_1||!_2){var _3=this.$63w.length
if(_3>0){var _1=this.$63w[_3-1];this.$63w.length=_3-1;return _1}
var _4=this.$bx++;return this.$cc(_4,this._$isc_)}
this.$by[0]=_1;this.$by[2]=_2;return this.$by.join(isc.emptyString)}
,isc.A.$cc=function(_1,_2){var _3=this.$bz,_4=this.$b0;_4.length=0;if(_2)_4[0]=_2;var _5=3;if(_1>46655){while(Math.pow(36,_5)<=_1)_5+=1}
while(_1>=36){var _6=_1%36;_4[_5-(_2?0:1)]=_3[_6];_5-=1;_1=Math.floor(_1/ 36)}
_4[_5-(_2?0:1)]=_3[_1];return _4.join(isc.emptyString)}
,isc.A.mixInInterface=function(_1,_2){var _3=this.getClass(_2),_4=this.getClass(_1);if(!_3||!_4)return null;if(!_3.$a5){isc.Log.logWarn("ClassFactory.mixInInterface asked to mixin a class which was not"+" declared as an Interface: "+_2+" onto "+_1);return}
if(!_4.$cd)_4.$cd=[];else _4.$cd=_4.$cd.duplicate();while(_3){this.$ce(_3,_4,true);this.$ce(_3,_4);_4.$cd[_4.$cd.length]=_2;_3=_3.getSuperClass();if(_3&&!_3.$a5)break}}
,isc.A.$ce=function(_1,_2,_3){var _4;if(_3){_4=isc.$a3[_1.Class]}else{_4=isc.$a2[_1.Class];_1=_1.getPrototype();_2=_2.getPrototype()}
if(_4==null)return;for(var i=0;i<_4.length;i++){var _6=_4[i];if(_2[_6]!=null)continue;var _7=_1[_6];if(isc.isA.String(_7)&&_7==this.TARGET_IMPLEMENTS){var _8=(_3?"Class":"Instance")+" method "+_6+" of Interface "+_1.Class+" must be implemented by "+"class "+_2.Class;_2[_6]=new Function('this.logError("'+_8+'")')}else{_2[_6]=_7}}}
,isc.A.makePassthroughMethods=function(_1,_2){if(!_2)_2="parentElement";var _3=this.$cf;if(_3==null){_3=this.$cf=["return this.",,".",,"("+this.$b1+")"]}
var _4={};for(var i=0;i<_1.length;i++){var _6=_1[i];_3[1]=_2;_3[3]=_6;_4[_6]=new Function(this.$b1,_3.join(isc.emptyString))}
return _4}
,isc.A.writePassthroughFunctions=function(_1,_2,_3){var _4=this.makePassthroughMethods(_3,_2);_1.addMethods(_4)}
);isc.B._maxIndex=isc.C+21;isc.A=isc.ClassFactory;isc.A.TARGET_IMPLEMENTS="TARGET_IMPLEMENTS";isc.A.$cb=0;isc.A.classList=[];isc.defineClass=function(_1,_2,_3,_4){return isc.ClassFactory.defineClass(_1,_2,_3,_4)}
isc.defineInterface=function(_1,_2){return isc.ClassFactory.defineInterface(_1,_2)}
isc.defer=function(_1){var _2=isc.ClassFactory.getClass(isc.ClassFactory.classList.last()),_3=_2.$cg;isc.Log.logWarn("deferred code being placed on class: "+_2);if(!_3)_2.$cg=[_1];else _3.add(_1)}
if(!isc.Browser.isSafari){isc.$ch=window;isc.$ci=window.document}
if(window.isc_enableCrossWindowCallbacks&&isc.Browser.isIE){isc.enableCrossWindowCallbacks=true;Object.$ch=window}
isc.ClassFactory.defineRootClass('Class');isc.ClassFactory.defaultSuperClass=isc.Class;isc.A=isc.Class;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.addClassMethods=function(){for(var i=0;i<arguments.length;i++)
isc.addMethods(this,arguments[i])}
);isc.B._maxIndex=isc.C+1;isc.A=isc.Class;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$cj={};isc.A.$ck={};isc.A.fireOnPauseDelay=200;isc.A.$cl="$cm";isc.A.$cn={};isc.A.$co={};isc.A.useFastEvalWithVars=isc.Browser.isMoz&&isc.Browser.geckoVersion>=20061010;isc.A.$cp="ID";isc.A.getWindow=(isc.Browser.isSafari?function(){return window}:function(){return this.ns.$ch});isc.A.getDocument=(isc.Browser.isSafari?function(){return window.document}:function(){return this.ns.$ci});isc.B.push(isc.A.create=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13){var _14=this.createRaw();_14=_14.completeCreation(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13);return _14}
,isc.A.createRaw=function(){if(!this.initialized())this.init();var _1=new this.$b4.$b5();_1.ns=this.ns;return _1}
,isc.A.init=function(){var _1=this.getSuperClass();if(_1&&!_1.initialized())_1.init();var _2=this.$cg;if(_2){this.$cg=null;_2.map(eval)}
this.$cj[this.Class]=true}
,isc.A.initialized=function(){return this.$cj[this.Class]}
,isc.A.getClassName=function(){return this.Class}
,isc.A.getSuperClass=function(){return this.$b8}
,isc.A.getPrototype=function(){return this.$b4}
,isc.A.addMethods=function(){if(this.$a5){this.logWarn("Use addInterfaceMethods() to add methods to interface "+this)}
for(var i=0;i<arguments.length;i++)
isc.addMethods(this.$b4,arguments[i]);return this.$b4}
,isc.A.addInterfaceMethods=function(){for(var i=0;i<arguments.length;i++)
isc.addMethods(this.$b4,arguments[i])}
,isc.A.addInterfaceProperties=function(){isc.addPropertyList(this.$b4,arguments)}
,isc.A.registerStringMethods=function(_1,_2){var _3=this._stringMethodRegistry;if(!this.isOverridden("_stringMethodRegistry")){var _4={},_5=_4.$cq=(_3.$cq?_3.$cq.duplicate():[]);for(var i=0;i<_5.length;i++){_4[_5[i]]=_3[_5[i]]}
this._stringMethodRegistry=_3=_4}
if(!isc.isA.String(_1)){var _7=_1;if(!isc.isAn.Object(_7)){this.logWarn("registerStringMethods() called with a bad argument: "+_1);return false}
for(var _1 in _7){_3[_1]=_7[_1]
_3.$cq.add(_1)}}else{if(_2==null)_2=null;_3[_1]=_2;_3.$cq.add(_1)}
return true}
,isc.A.evaluate=function(_1,_2,_3){if(!isc.$611)isc.$611=0;isc.$611++;var _4;if(_2){with(_2){if(_3)_4=window.eval(_1)
else _4=eval(_1)}}else{if(_3)_4=window.eval(_1)
else _4=eval(_1)}
if(isc.$611!=null)isc.$611--;if(isc.$611==0)delete isc.$611;return _4}
,isc.A.addClassProperties=function(){isc.addPropertyList(this,arguments);return this}
,isc.A.addProperties=function(){if(this.$a5){this.logWarn("Use addInterfaceProperties() to add methods to interface "+this)}
isc.addPropertyList(this.$b4,arguments);return this}
,isc.A.addPropertyList=function(_1){isc.addPropertyList(this.$b4,_1);return this}
,isc.A.changeDefaults=function(_1,_2){var _3=this.$cr(_1),_4=false;var _5=this.getSuperClass();if(_5){var _6=_5.$cr(_1);if(_6!=null&&_6==_3){_3=isc.addProperties({},_3);_4=true}}
if(_3==null){_3=_2||{};_4=true}else{isc.addProperties(_3,_2)}
if(_4){var _7={};_7[_1]=_3;this.addProperties(_7)}}
,isc.A.$cr=function(_1){var _2=this.$ck[this.Class],_3=this.getInstanceProperty(_1)||(_2?_2[_1]:null);return _3}
,isc.A.replaceDefaults=function(_1,_2){this.changeDefaults(_1,_2)}
,isc.A.setProperties=function(){var _1;if(arguments.length==1){_1=arguments[0]}else{_1={};for(var i=0;i<arguments.length;i++){isc.addProperties(_1,arguments[i])}}
this.$b4.setProperties(_1)}
,isc.A.isOverridden=function(_1){return(!(this[_1]===this.$b8[_1]))}
,isc.A.isA=function(_1){if(_1==null)return false;if(!isc.isA.String(_1)){_1=_1.Class;if(!isc.isA.String(_1))return false}
if(isc.startsWith(_1,isc.ClassFactory.$f)){_1=_1.substring(4)}
var _2=this;while(_2){if(_2.Class==_1)return true;_2=_2.$b8}
if(this.$cd){for(var i=0;i<this.$cd.length;i++){var _4=isc.ClassFactory.getClass(this.$cd[i]);while(_4){if(_4.Class==_1)return true;_4=_4.$b8}}}
return false}
,isc.A.$cs=function(_1,_2,_3,_4){var _5;for(;;){if(_2==null){_5=null;break}
var _5=isc.Class.$ct(_3,_2);if(_5==null)break;if(_1!=_5){break}
if(_4){_2=_2.$b8}else{_2=_2.$b9.$b8.$b4}}
if(_5!=null)return _2;return null}
,isc.A.Super=function(_1,_2,_3){if(isc.$cv)arguments.$cw=this;if(_2!=null&&(_2.length==null||isc.isA.String(_2)))_2=[_2];if(_2==null)_2=isc.$ac;this.$cx=_3||_2;this.$cy=isc.Class.$cz(_1,this);this.$c0=true;return this.invokeSuper(null,_1)}
,isc.A.$ct=function(_1,_2){var _3=_2[_1];while(_3&&_3.$c1){_3=_2[_3.$c1]}
return _3}
,isc.A.invokeSuper=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10){var _11=this.$bp;var _12=this.$c0;this.$c0=null;var _13=this.$cx;this.$cx=null;var _14;if(_12){_14=this.$cy;this.$cy==null}else{if(_1!=null){_14=_11?_1:_1.$b4}}
var _15,_16;if(_14==null){_15=isc.Class.$ct(_2,this);_16=_11?this:this.getPrototype()}else{_15=isc.Class.$ct(_2,_14);if(_11){_16=_14.$b8}else{_16=_14.$b9.$b8.$b4}
if(_13&&_13.callee!=null&&_13.callee!=_15)
{_15=isc.Class.$ct(_2,this);_16=_11?this:this.getPrototype()}}
_16=isc.Class.$cs(_15,_16,_2,_11);if(_16==null){if(isc.Log)isc.Log.logWarn("Call to Super for method: "+_2+" failed on: "+this+": couldn't find a superclass implementation of : "+(_14?_14.Class:this.Class)+"."+_2+this.getStackTrace());return null}
var _17=_16[_2];isc.Class.$c2(_2,_16,this);var _18;if(_12){if(_13){_18=_17.apply(this,_13)}else{_18=_17.apply(this)}}else{_18=_17.call(this,_3,_4,_5,_6,_7,_8,_9,_10)}
isc.Class.$c3(_2,this);return _18}
,isc.A.$cz=function(_1,_2){var _3=_2.$c4,_4=_3==null?null:_3[_1];if(isc.isAn.Array(_4))return _4.last();return _4}
,isc.A.$c3=function(_1,_2){var _3=_2.$c4,_4=_3[_1];if(_4==null){return}
if(!isc.isAn.Array(_4)){_3[_1]=null}else{_4.length=Math.max(0,_4.length-1);if(_4.length==0)_3[_1]=null}}
,isc.A.$c2=function(_1,_2,_3){var _4=_3.$c4=_3.$c4||{},_5=_4[_1];if(_5==null){_4[_1]=_2}else{if(isc.isAn.Array(_5))_5.add(_2);else _4[_1]=[_5,_2]}}
,isc.A.map=function(_1,_2,_3,_4,_5,_6,_7){if(_1==null)return _2;var _8=[];for(var i=0;i<_2.length;i++){_8.add(this[_1](_2[i],_3,_4,_5,_6,_7))}
return _8}
,isc.A.getInstanceProperty=function(_1){var _2=this.$b4[_1];return _2}
,isc.A.setInstanceProperty=function(_1,_2){this.$b4[_1]=_2}
,isc.A.getArgString=function(_1){var _2=this._stringMethodRegistry[_1];var _3;if(_2!==_3)return _2||isc.emptyString;var _4=this.getInstanceProperty(_1);if(_4==null)return"";return isc.Func.getArgString(_4)}
,isc.A.fireCallback=function(_1,_2,_3,_4,_5){arguments.$cw=this;if(_1==null)return;var _6;if(_2==null)_2=_6;var _7=_1;if(isc.isA.String(_1)){if(_4!=null&&isc.isA.Function(_4[_1]))_7=_4[_1];else _7=this.$c5(_1,_2)}else if(isc.isAn.Object(_1)&&!isc.isA.Function(_1)){if(_1.caller!=null)_4=_1.caller;else if(_1.target!=null)_4=_1.target;if(_1.args)_3=_1.args;if(_1.argNames)_2=_1.argNames;if(_1.method)_7=_1.method;else if(_1.methodName&&_4!=null)_7=_4[_1.methodName];else if(_1.action)
_7=this.$c5(_1.action,_2)}
if(!isc.isA.Function(_7)){this.logWarn("fireCallback() unable to convert callback: "+this.echo(_1)+" to a function.");return}
if(_4==null)_4=window;else if(_4.destroyed){if(this.logIsInfoEnabled("callbacks")){this.logInfo("aborting attempt to fire callback on destroyed target:"+_4+". Callback:"+isc.Log.echo(_1)+",\n stack:"+this.getStackTrace())}
return}
_7.$c6=true;if(_3==null)_3=[];if(isc.enableCrossWindowCallbacks&&isc.Browser.isIE){var _8=_4.constructor?_4.constructor.$ch:_4;if(_8&&_8!=window&&_8.isc){var _9=_8.Array.newInstance();for(var i=0;i<_3.length;i++)_9[i]=_3[i];_3=_9}}
var _11;if(!_5||!isc.Browser.isMoz){_11=_7.apply(_4,_3)}else{try{_11=_7.apply(_4,_3)}catch(e){isc.Log.$am(e);throw e;}}
return _11}
,isc.A.delayCall=function(_1,_2,_3,_4){if(_4==null)_4=this;if(_3==null)_3=0;return isc.Timer.setTimeout({target:_4,methodName:_1,args:_2},_3)}
,isc.A.$c5=function(_1,_2){if(_2==null){var _3;_2=_3}
var _4=isc.$aq(_2,_1);_4.$c7=true;return _4}
,isc.A.fireOnPause=function(_1,_2,_3,_4,_5){if(!_1)return;if(!_3)_3=this.fireOnPauseDelay;if(_5==null)_5=this.getClassName();if(!this.$cn[_1]){this.$cn[_1]={}}
this.$cn[_1][_5]={fireTime:_3,callback:_2,target:_4};var _6=isc.timeStamp(),_7=this.$c8?_6-this.$c8:null;this.$c8=_6;if(_7&&_3>=(this.$c9-_7))return;if(this.$da)isc.Timer.clearTimeout(this.$da);this.$da=this.delayCall(this.$cl,null,_3);this.$c9=_3}
,isc.A.$cm=function(){var _1;var _2=isc.timeStamp()-this.$c8,_1;for(var _3 in this.$cn){var _4=this.$cn[_3];for(var _5 in _4){var _6=_4[_5];if(_6.fireTime<=_2){this.fireCallback(_6.callback,null,null,_6.target);delete this.$cn[_3][_5]}else{_6.fireTime-=_2;if(_1==null)_1=_6.fireTime;else _1=Math.min(_1,_6.fireTime)}}
if(isc.isAn.emptyObject(this.$cn[_3]))delete this.$cn[_3]}
if(_1!=null){this.$c9=_1;this.$c8=isc.timeStamp();this.delayCall(this.$cl,null,_1)}else{this.$c8=null}}
,isc.A.evalWithVars=function(_1,_2,_3){if(!_3)_3=window;if(this.useFastEvalWithVars){return this.evaluate.call(_3,_1,_2)}
var _4=["evalString"];var _5=[_1];if(_2){for(var _6 in _2){_4.push(_6);_5.push(_2[_6])}}
var _7=isc.$aq(_4.join(","),"return eval(evalString)");return _7.apply(_3,_5)}
,isc.A.evalWithCapture=function(_1,_2,_3){var _4=isc.globalsSnapshot=[];this.evalWithVars(_1,_2,_3);isc.globalsSnapshot=null;return _4}
,isc.A.destroyGlobals=function(_1){if(!isc.isAn.Array(_1))_1=[_1];for(var i=0;i<_1.length;i++){var _3=_1[i];if(window[_3]&&isc.isA.Function(window[_3].destroy))window[_3].destroy();else window[_3]=null}}
,isc.A.globalEvalWithCapture=function(_1,_2,_3,_4){if(_4==null)_4=true;this.$db=_3;this.$dc=_2;if(isc.Browser.isSafari){_1="isc.Class.$dd();\n"+_1+"\nisc.Class.$de();";window.setTimeout(_1,0);return}
this.$dd(_3);var _5;try{if(isc.Browser.isIE){window.execScript(_1,"javascript")}else{isc.Class.evaluate(_1,null,true)}}catch(e){if(_4)isc.Log.$am(e);_5=e}
this.$de(_5)}
,isc.A.$dd=function(){var _1,_2=this.$db;this.$df={};if(_2){for(var _3 in _2){var _4=window[_3];if(_4!==_1)this.$df[_3]=_4;window[_3]=_2[_3]}}
isc.globalsSnapshot=[]}
,isc.A.$de=function(_1){var _2,_3=this.$db;if(_3){for(var _4 in _3){var _5=this.$df[_4];if(_5!==_2)window[_4]=this.$df[_4];else window[_4]=_2}}
var _6=this.$dc;var _7=isc.globalsSnapshot;isc.globalsSnapshot=this.$dc=this.$db=this.$df=null;this.fireCallback(_6,["globals","error"],[_7,_1])}
,isc.A.$dg=function(_1,_2,_3){_3.$dh-=1;if(_3.$dh)return;var _4=false;for(var i=0;i<_3.length;i++){if(_3[i].$di){_4=true;_3.removeItem(i);i--;continue}
if(_3[i].$dj){delete _3[i].$dj;_4=true}}
if(_4){if(_3.length==0){var _6=isc.$ah+_2;_1[_2]=_1[_6];delete _1[_6]}else{_1[_2]=_1.$dk(_2,_3)}}}
,isc.A.getArrayItem=function(_1,_2,_3){if(_2==null)return null;if(isc.isA.String(_1))return _2.find(_3||this.$cp,_1);if(isc.isAn.Object(_1))return _1;if(isc.isA.Number(_1))return _2[_1];return null}
,isc.A.getArrayItemIndex=function(_1,_2,_3){if(isc.isA.Number(_1))return _1;var _4=isc.Class.getArrayItem(_1,_2,_3);return _2.indexOf(_4)}
,isc.A.getDocumentBody=function(_1){var _2=(!_1&&isc.Browser.isIE&&isc.Browser.isStrict);var _3=(_2?this.ns.$dl:this.ns.$dm);if(_3!=null)return _3;var _4=this.getDocument();if(_2){this.ns.$dl=_4.documentElement;return this.ns.$dl}
if(isc.Browser.isIE){_3=_4.body}else{if(_4.body!=null)_3=_4.body;else{var _5=_4.documentElement.namespaceURI;_3=_4.getElementsByTagNameNS(_5,"body")[0];if(_3==null){_3=_4.documentElement.childNodes[1];if(_3!=null&&_3.tagName!="body")_3=null}
if(!_3)return null}}
this.ns.$dm=_3;return _3}
,isc.A.getActiveElement=function(){try{return this.getDocument().activeElement}catch(e){this.logWarn("error accessing activeElement: "+e.message)}
return null}
);isc.B._maxIndex=isc.C+48;isc.A=isc.Class;isc.A.newInstance=isc.Class.create;isc.Class.ns=isc;isc.A=isc.ClassFactory;isc.A.ns=isc;isc.A.getWindow=isc.Class.getWindow;isc.A.getDocument=isc.Class.getDocument;isc.A=isc.Class.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.getWindow=(isc.Browser.isSafari?function(){return window}:function(){return this.ns.$ch});isc.A.getDocument=(isc.Browser.isSafari?function(){return window.document}:function(){return this.ns.$ci});isc.A.$dn="_autoMaker";isc.A.$58e="creator";isc.A.$do="show";isc.A.$dp="Constructor";isc.A.$dq="Defaults";isc.A.$dr="Properties";isc.A.map=isc.Class.map;isc.A.Super=isc.Class.Super;isc.A.invokeSuper=isc.Class.invokeSuper;isc.B.push(isc.A.init=function(){}
,isc.A.destroy=function(){}
,isc.A.completeCreation=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13){if(this.addPropertiesOnCreate!=false){if(isc.captureInitData){var _14={className:this.Class,defaults:isc.addProperties({},_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13)}
if(!isc.capturedComponents)isc.capturedComponents=[];isc.capturedComponents.add(_14);if(_14.defaults.ID){isc.ClassFactory.addGlobalID(_14,_14.defaults.ID)}
return _14}
isc.addProperties(this,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13)}
this.init(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13);return this}
,isc.A.getUniqueProperties=function(_1){if(_1==null)_1={};var _2=this.getPrototype();for(var _3 in this){if(_3.startsWith("_"))continue;if(_3=="ns")continue;if(_3=="ID"&&this.ID.startsWith("isc_OID_"))continue;var _4=this[_3];if(isc.isA.Function(_4))continue;if(_4!=_2[_3]){_1[_3]=this[_3]}}
return _1}
,isc.A.clone=function(){return this.getClass().create(this.getUniqueProperties())}
,isc.A.serialize=function(_1){return isc.Comm.serialize(this,_1,null)}
,isc.A.xmlSerialize=function(_1){return isc.Comm.xmlSerialize(this.getClassName(),this,_1)}
,isc.A.getSerializeableFields=function(_1,_2){var _3=isc.DS?isc.DS.getNearestSchema(this):null;var _4=this.getUniqueProperties();if(_3==null){this.logDebug("No schema available for class"+this.getClassName());return _4}else{this.logDebug("Constraining serializeable fields for class: "+this.getClassName()+" with schema : "+_3.ID)}
var _5=isc.applyMask(_4,_3.getFields());_1=_1||[];_2=_2||[];_1.map(function(_7){delete _5[_7]});for(var i=0;i<_2.length;i++){_5[_2[i]]=this[_2[i]]}
return _5}
,isc.A.getID=function(){return this.ID}
,isc.A.getClass=function(){return this.$b9}
,isc.A.getSuperClass=function(){return this.$b9.$b8}
,isc.A.getClassName=function(){return this.getClass().getClassName()}
,isc.A.getPrototype=function(){return this.$bo}
,isc.A.getGlobalReference=function(_1){if(typeof _1=="string")return this.evaluate(_1);return _1}
,isc.A.addMethods=function(){for(var i=0;i<arguments.length;i++){return isc.addMethods(this,arguments[i])}}
,isc.A.addProperties=function(){return isc.addPropertyList(this,arguments)}
,isc.A.addPropertyList=function(_1){return isc.addPropertyList(this,_1)}
,isc.A.$ds=function(_1){var _2="set"+_1.substring(0,1).toUpperCase()+_1.substring(1);return(isc.isA.Function(this[_2])?_2:null)}
,isc.A.$dt=function(_1){var _2="get"+_1.substring(0,1).toUpperCase()+_1.substring(1);return(isc.isA.Function(this[_2])?_2:null)}
,isc.A.setProperty=function(_1,_2){var _3={};_3[_1]=_2;this.setProperties(_3)}
,isc.A.setProperties=function(){var _1=isc.isA,_2,_3={};if(arguments.length<1)return;if(arguments.length==1){_2=arguments[0];if(_2==null)return}else{_2={};for(var i=0;i<arguments.length;i++){isc.addProperties(_2,arguments[i])}}
for(var _5 in _2){var _6=_2[_5],_7=this.$ds(_5);if(isc.isA.StringMethod(_6))_6=_6.getValue();if(_7){this[_7](_6);if(this.propertyChanged)this.propertyChanged(_5,_6)}else{_3[_5]=_6}}
this.addProperties(_3)
if(this.propertyChanged){for(var _5 in _3){this.propertyChanged(_5,_3[_5])}}
if(this.doneSettingProperties)this.doneSettingProperties(_2)}
,isc.A.getProperty=function(_1){var _2=this.$dt(_1);if(_2)return this[_2]();return this[_1]}
,isc.A.$du=function(_1,_2,_3,_4,_5,_6){return _1!=null?_1:(_2!=null?_2:(_3!=null?_3:(_4!=null?_4:(_5!=null?_5:_6))))}
,isc.A.isA=function(_1){return this.getClass().isA(_1)}
,isc.A.observe=function(_1,_2,_3){if(_1==null){this.logWarn("Invalid observation: Target is not an object.  target: "+_1+", methodName: "+_2+", action: '"+_3+"'");return false}
if(!isc.Func.convertToMethod(_1,_2)){this.logWarn("Invalid observation: property: '"+_2+"' is not a method on "+_1);return false}
var _4=isc.$a9[_2];if(_1[_4])this.observe(_1,_4,_3)
var _5=_1[_2],_6;if(isc.isAn.Instance(_1)&&_1.getClass().getInstanceProperty(_2)){_6=_1.getClass().getArgString(_2)}else{_6=isc.Func.getArgString(_5)}
var _7=_6.split(",");if(!_1.$ba)_1.$ba={};if(!_1.$ba[_2]){var _8=_1.$ba[_2]=[];if(_7.length>0){_8.argStr=_6}}else{var _8=_1.$ba[_2];for(var i=0,_10=_8.length;i<_10;i++){if(_8[i].target==this){if(_8[i].$di){_8[i].$di=false;_8[i].action=_3;return true}
this.logWarn("Observer: "+this+" is already observing method '"+_2+"' on object '"+_1+"', ignoring");return false}}}
if(_3==null||isc.is.emptyString(_3)){if(!this[_2]||!this.convertToMethod(_2)){this.logWarn("Invalid Observation - no action specified, and observer: "+this+" has no method '"+_2+"', ignoring");return false}
_3="it."+_2+"("+_6+")"}
var _11=_8.$dh;_8.add({target:this,action:_3,$dj:_11});var _12=isc.$ah+_2;if(!_1[_12])_1[_12]=_5;if(!_11)_1[_2]=this.$dk(_2,_8);return true}
,isc.A.$dk=function(_1,_2){var _3=isc.StringBuffer.create();_3.append((isc.$cv?"arguments.$cw=this;":""),"var queue=this.$ba.",_1,";\r","queue.$dh=queue.$dh?queue.$dh+1:1;\r","var returnVal=this.",isc.$ah,_1,"(",(_2.argStr?_2.argStr:""),"),\r","observed=this,observer,it;\r");for(var i=0,_5=_2.length;i<_5;i++){_3.append("if(!queue)return;\r");_3.append("observer=it=queue[",i,"].target;\r");if(isc.isA.String(_2[i].action))_3.append(_2[i].action,";\r");if(isc.isA.Function(_2[i].action)){_3.append("queue[",i,"].action.apply(it, ",(_2.argStr?"'"+_2.argStr+"'":"null"),");\r")}}
if(isc.Browser.isSafari){_3.append("arguments.callee.$dv.Class.$dg(this,'",_1,"',queue);\r")}else{_3.append("isc.Class.$dg(this,'",_1,"',queue);\r")}
_3.append("return returnVal;\r");var _6=isc.$aq(_2.argStr,_3);_6.$dw=true;_6.$dx=_1+"Observation";_6.$c1=isc.$ah+_1;if(isc.Browser.isSafari)_6.$dv=isc;return _6}
,isc.A.ignore=function(_1,_2){var _3=isc.$a9[_2];if(_1[_3])this.ignore(_1,_3);var _4=isc.$ah+_2;if(!_1[_4]||!_1.$ba)return false;var _5=_1.$ba[_2],_6=_5.$dh;for(var i=0,_8=_5.length;i<_8;i++){if(_5[i].target==this){if(_6)
_5[i].$di=true;else
_5.removeAt(i);break}}
if(_5.length==0){_1[_2]=_1[_4];delete _1[_4];delete _1.$ba[_2]}else{if(!_6){_1[_2]=this.$dk(_2,_5)}}
return true}
,isc.A.getObserversOf=function(_1){if(!this.$ba||!this.$ba[_1])return null;var _2=this.$ba[_1];for(var _3=[],i=0;i<_2.length;i++){_3[i]=(_2[i]?_2[i].target:null)}
return _3}
,isc.A.isObserving=function(_1,_2){if(!_1.$ba)return false;var _3=_1.$ba[_2];if(!_3)return false;for(var i=0;i<_3.length;i++){if(_3[i].target==this)return true}
return false}
,isc.A.convertToMethod=function(_1){return isc.Func.convertToMethod(this,_1)}
,isc.A.evaluate=function(_1,_2){return isc.Class.evaluate.apply(this,[_1,_2])}
,isc.A.fireCallback=function(_1,_2,_3,_4){return isc.Class.fireCallback(_1,_2,_3,this,_4)}
,isc.A.delayCall=function(_1,_2,_3){return isc.Class.delayCall(_1,_2,_3,this)}
,isc.A.fireOnPause=function(_1,_2,_3){return this.getClass().fireOnPause(_1,_2,_3,this,this.getID())}
,isc.A.evalWithVars=function(_1,_2){return isc.Class.evalWithVars(_1,_2,this)}
,isc.A.getDocumentBody=function(){return isc.Class.getDocumentBody()}
,isc.A.getActiveElement=function(){return isc.Class.getActiveElement()}
,isc.A.addAutoChildren=function(_1,_2,_3){if(_1==null)return;if(!isc.isAn.Array(_1))_1=[_1];for(var i=0;i<_1.length;i++){var _5=_1[i];if(isc.isA.Canvas(_5)){_2=_2||this;this.$dy(_5,_2,_3);continue}
this.addAutoChild(_5,null,null,_2,_3)}}
,isc.A.addAutoChild=function(_1,_2,_3,_4,_5){var _6=this[_1];if(isc.isAn.Instance(_6))return _6;if(!this.$542)this.$542={};this.$542[_1]=true;if(isc.isAn.Object(_1)&&_1.autoChildName){_2=_1;_3=_2._constructor||_3;_1=_2.autoChildName}
if(isc.isA.String(_6)&&window[_6]){this[_1]=window[_6];return this[_1]}
if(_1!=null&&!this.shouldCreateChild(_1))return;var _7,_8=_1+this.$dn;if(_1!=null&&this[_8])_7=this[_8](_2);else{_7=this.createAutoChild(_1,_2,_3,true)}
if(!_7)return;this[_1]=_7;this.$dz(_1,_7,_4,_5);return _7}
,isc.A.$dz=function(_1,_2,_3,_4){if(_3==null){_3=_2.autoParent||this.getAutoChildParent(_1)}
if(isc.isA.String(_3)){if(_3==isc.Canvas.NONE){if(this.isDrawn())_2.draw();return}
var _5=this[_3]||window[_3]||_3;if(!isc.isA.Canvas(_5)){this.logWarn("no valid parent could be found for String '"+_3+"'")}else _3=_5}
if(!isc.isA.Canvas(_2)||!isc.isA.Canvas(_3))return;this.$dy(_2,_3,_4)}
,isc.A.$dy=function(_1,_2,_3){if(_1.addAsPeer||_1.snapEdge)_2.addPeer(_1);else if(isc.isA.Layout(_2)&&!_1.addAsChild&&!_1.snapTo)_2.addMember(_1,_3);else if(isc.isA.TileLayout(_2)&&!_1.addAsChild&&!_1.snapTo)_2.addTile(_1,_3);else _2.addChild(_1)}
,isc.A.shouldCreateChild=function(_1){var _2=this.$do+_1.charAt(0).toUpperCase()+_1.substring(1);if(this[_2]!=null&&this[_2]==false)return false;var _3=this.$d0(_1);if(_3==null)return true;return(this.shouldCreateChild(_3))}
,isc.A.getAutoChildClass=function(_1,_2,_3,_4,_5){_4=_4||this.$d1(_1);var _6=this[_4];_5=_5||this.$543(_1);var _7=this[_5];return this[_1+this.$dp]||(_2?_2._constructor:null)||(_7?_7._constructor:null)||(_6?_6._constructor:null)||_3||isc.Canvas}
,isc.A.applyBaseDefaults=function(_1,_2,_3){_1.autoDraw=false;_1._generated=true;_1.creator=this;var _4=this.creatorName;if(_4)_1[_4]=this;var _5;if(_3==null||_3.ID===_5){_1.ID=this.getID()+isc.$ag+_2;if(window[_1.ID]){_1.ID=_1.ID+isc.$ag+isc.ClassFactory.getNextGlobalID()}}}
,isc.A.getDynamicDefaults=function(){}
,isc.A.$d1=function(_1){var _2=isc.Class.$d2;if(!_2)isc.Class.$d2=_2={};if(_2[_1])return _2[_1];var _3=_1+this.$dq;if(this[_3])_2[_1]=_3;return _3}
,isc.A.$543=function(_1){var _2=isc.Class.$544;if(!_2)isc.Class.$544=_2={};if(_2[_1])return _2[_1];var _3=_1+this.$dr;if(this[_3])_2[_1]=_3;return _3}
,isc.A.createAutoChild=function(_1,_2,_3,_4){var _5=this.getDynamicDefaults(_1);if(_5!=null&&_2!=null){_5=isc.addProperties({},_5,_2)}else{_5=_2||_5}
var _6=this.$d1(_1),_7=this[_6],_8=this.$543(_1),_9=this[_8],_10=this.getAutoChildClass(_1,_5,_3,_6,_8),_11=isc.ClassFactory.getClass(_10);if(_11==null){this.logWarn("Unable to create autoChild '"+_1+"' of type '"+_10+"' - no such class in runtime.");return null}
var _12=_11.createRaw();var _13=this.autoPassthroughs,_14,_15;if(_13){for(var _16 in _13){var _17=_13[_16];if(_1==_17&&this[_16]!==_15){_12[_16]=this[_16]}}}
this.applyBaseDefaults(_12,_1,_2);isc.addProperties(_12,this.autoChildDefaults,_7,_14,_5);if(_4)this[_1]=_12;if(_12.autoConfigure)_12.autoConfigure(this,_1);if(this.configureAutoChild)this.configureAutoChild(_12,_1);isc.addProperties(_12,this[_8]);_12.init();return _12}
,isc.A.$d3=function(_1,_2,_3){this.applyBaseDefaults(_2,_1,_3);var _4=this.$d1(_1),_5=this.$543(_1);_2.completeCreation(this.autoChildDefaults,this[_4],_3,this[_5])}
,isc.A.$d0=function(_1){var _2=this.autoChildParentMap;if(_2)return _2[_1]}
,isc.A.getAutoChildParent=function(_1){var _2=this.$d0(_1);if(_2)return this[_2];return this}
,isc.A.setAutoChild=function(_1,_2){if(!this.shouldCreateChild(_1)){if(this[_1])this[_1].destroy();delete this[_1]}else{if(isc.isA.Canvas(_2)){var _3=_2;if(this[_1])this[_1].destroy();this[_1]=_3;this.$dz(_1,_3);return}
return this.addAutoChild(_1,_2)}}
);isc.B._maxIndex=isc.C+52;isc.Class.toString=function(){return"[Class "+this.Class+"]"}
isc.Class.getPrototype().toString=function(){return"["+this.Class+" ID:"+this.ID+"]"}
isc.A=isc.Class;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.ns=isc;isc.A._stringMethodRegistry={};isc.B.push(isc.A.NO_OP=function(){}
);isc.B._maxIndex=isc.C+1;isc.A=isc.ClassFactory;isc.A.observe=isc.Class.getPrototype().observe;isc.A.ignore=isc.Class.getPrototype().ignore;isc.A.$dk=isc.Class.getPrototype().$dk;isc.eval=function(_1){return isc.Class.evaluate(_1)}
Function.prototype.Class="Function";isc.ClassFactory.defineClass("Func");isc.A=isc.Func;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$d5=new RegExp("function\\s+([\\w$]+)\\s*\\(");isc.B.push(isc.A.getName=function(_1,_2){if(_1==Function.prototype.apply)return"Function.apply";if(_1==Function.prototype.call)return"Function.call";if(_1.$dx==null){if(_1.$bd==null&&isc._allFuncs){var _3=isc._allFuncs.indexOf(_1);if(_3!=-1){for(var _4=isc._funcClasses[_3];_4==null;_3--){_4=isc._funcClasses[_3]}
_1.$bd=_4}}
var _5=_1.$bc;if(_5==null&&_1.$bd!=null){var _6;var _7=isc.ClassFactory.getClass(_1.$bd);if(_7==null){_7=isc[_1.$bd]||window[_1.$bd]}else{_6=_7.getPrototype()}
if(_6!=null){for(var _8 in _6){if(_6[_8]===_1){_5=_8;break}}}
if(_5==null&&_7!=null){for(var _8 in _7){if(_7[_8]===_1){_5=_8;break}}
if(_5==null&&!isc.isA.Class(_7)&&_7.prototype!=null){for(var _8 in _7.prototype){if(_7.prototype[_8]===_1){_5=_8;break}}}}}
if(_5!=null){_1.$dx=(_1.$be?(_1.$bf?"[o]":"[a]"):isc.$ad)+(_1.$bd?_1.$bd+isc.dot:isc.$ad)+_5}else{if(_1.$c6)_1.$dx="callback";else{var _9=isc.Func.$d5.exec(_1.toString());if(_9)_1.$dx=_9[1];else _1.$dx="anonymous"}}}
return _1.$dx}
,isc.A.getArgs=function(_1){var _2=isc.Func.getArgString(_1);if(_2=="")return[];return _2.split(",")}
,isc.A.getArgString=function(_1){var _2=_1.toString(),_3=_2.substring(_2.indexOf("(")+1,_2.indexOf(")"));return _3}
,isc.A.getBody=function(_1){var _2=_1.toString();return _2.substring(_2.indexOf("{")+1,_2.lastIndexOf("}"))}
,isc.A.getShortBody=function(_1){var _2=_1.toString();return _2.substring(_2.indexOf("{")+1,_2.lastIndexOf("}")).replace(/[\r\n\t]*/g,"")}
);isc.B._maxIndex=isc.C+5;if(!Function.prototype.apply){isc.A=Function.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.apply=function(targetObject,args){if(targetObject==null)targetObject=window;var tempFunctionName="__TEMPF_"+Function.prototype.$d6++;var returnValue;targetObject[tempFunctionName]=this;if(!args)args=[];if(args.length<=10){returnValue=targetObject[tempFunctionName](args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9])}else{var functionString='targetObject[tempFunctionName](';for(var i=0;i<args.length;i++){functionString+="args"+'['+i+']';if(i+1<args.length){functionString+=','}}
functionString+=');';isc.eval('returnValue ='+functionString)}
delete targetObject[tempFunctionName];return returnValue}
);isc.B._maxIndex=isc.C+1;Function.prototype.$d6=0}
isc.A=isc.Func;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$d7=[["//","\n"],["//","\\n"],["/*","*/"]];isc.A.$d8=["\"","\'"];isc.A.$d9=["switch","while","if","return","for","var"];isc.A.$ea=["(",")","[","]","{","}",":","?","!","+","-","/","*","=",">","<","|","&",",","\\"];isc.B.push(isc.A.expressionToFunction=function(_1,_2,_3){var _4=this.$eb(_1,_2,_3);return _4}
,isc.A.$eb=function(_1,_2,_3){if(_2==null){isc.Log.logInfo("makeFunctionExpression() called with empty expression");_2=""}
if(isc.isAn.Object(_2)){if(isc.isA.StringMethod(_2))_2=_2.getValue();var _4=_1;if(isc.isA.String(_4))_4=_1.split(",");else if(isc.isAn.Array(_4)){_1=_4.join()}
if(!isc.isAn.Array(_4))_4=[];var _5=["if (!window.",,"){var message='Component ID \"",,"\", target of action \"",,"\" does not exist';isc.Log.logWarn(message);if(isc.designTime)isc.say(message)}",,".",,"(",,")"];_5[1]=_5[3]=_5[7]=_2.target;_5[9]=_2.name;if(_2.title)_5[5]=_2.title;else _5[5]="[No title specified]"
var _6=_2.mapping||[];if(!isc.isAn.Array(_6))_6=[];_5[11]=_6.join();var _7=_5.join(isc.emptyString);var _8;try{_8=isc.$aq(_1,_7)}catch(e){this.logWarn("invalid code: "+_7+" generated from action: "+this.echo(_2));_8=new Function()}
_8.iscAction=_2;return _8}
var _9="swirfv";if(isc.isAn.Array(_1)){_1=_1.join()}
var _10=true;var i=0;var _12=this.$d7;var _13=this.$d8;var _14=this.$d9;var _15=this.$ea;var _16=false;var _17=isc.$ad,_18=isc.slash,_19="\n",_20="\\",_21="+",_22=isc.semi;var _23=_17;var _24=_17;while(i<_2.length){var _25=_2.charAt(i);if(_25==_18){for(var j=0;j<_12.length;j++){var _27=_12[j],_28=_27[0],_29=_27[1];if(_2.indexOf(_28,i)==i){var k=i+_28.length;while(k<_2.length){if(_2.substring(k,k+_29.length)==_29){k=k+_29.length;break}
k++}
i=k;_23=_17;_24=this.$ec(_2,i)}}}
if(_16){if(_24==_17){break}else{if(isc.isA.WhitespaceChar(_25)){i++;continue}else{_10=false;break}}}
for(var j=0;j<_13.length;j++){var _31=_13[j]
if(_25==_31){var k=i+1;while(k<_2.length){if(_2.charAt(k)==_20)k=k+2;if(_2.charAt(k)==_31){k++;break}
k++}
i=k;_23=_31.charAt(0);_24=this.$ec(_2,i)}}
if(_25==_19){var _32=false;for(var j=0;j<_15.length;j++){if(_23==_15[j]){_32=true;break}}
if(_32||_24==_21){_23=_17}else{_10=false;break}}
if(_25==_22){_16=true}
if(_9.indexOf(_25)!=-1){for(var j=0;j<_14.length;j++){var _33=_14[j],_34=_33.length;if((i+_34<=_2.length)&&(_2.substring(i,i+_34)==_33)&&(i+_34==_2.length||!isc.isA.AlphaNumericChar(_2.charAt(i+_34)))&&(i==0||!isc.isA.AlphaNumericChar(_2.charAt(i-1)))){_10=false;break}}}
if(!isc.isA.WhitespaceChar(_25))_23=_25;i++;_24=this.$ec(_2,i)}
if(_10){_2="return "+_2}
if(_3)_2="//"+_3+"\r\n"+_2;var _8=isc.$aq(_1,_2);return _8}
,isc.A.$ec=function(_1,_2){var _3=isc.$ad;for(var j=(_2+1);j<_1.length;j++){if(!isc.isA.WhitespaceChar(_1.charAt(j))){_3=_1.charAt(j);break}}
if(j>=_1.length)_3=isc.$ad;return _3}
,isc.A.convertToMethod=function(_1,_2){if(!isc.isAn.Object(_1)||!isc.isA.nonemptyString(_2)){isc.Log.logWarn("convertToMethod() called with bad parameters.  Cannot convert "+" property '"+_2+"' on object "+_1+" to a function.  Returning false.");return false}
if(_1[_2]&&isc.isA.Function(_1[_2]))return true;var _3=(isc.isAn.Instance(_1)?_1.getClass()._stringMethodRegistry:_1._stringMethodRegistry);if(_3==null)return false;var _4;var _5=_3[_2];if(_5===_4)return false;isc.Func.replaceWithMethod(_1,_2,_5);return true}
,isc.A.replaceWithMethod=function(_1,_2,_3,_4){if(_1[_2]==null){_1[_2]=isc.is.emptyString(_3)?isc.Class.NO_OP:new Function(_3,isc.$ad)}
var _5=_1[_2];if(isc.isA.Function(_5))return;var _6;if(isc.isA.String(_5)||isc.isA.Object(_5)){_6=isc.Func.expressionToFunction(_3,_5,_4)}else{isc.Log.logWarn("Property '"+_2+"' on object "+_1+" is of type "+typeof _5+".  This can not be converted to a method.","Function");return}
var _7={};_7[_2]=_6;isc.addMethods(_1,_7)}
);isc.B._maxIndex=isc.C+5;Array.prototype.Class="Array";Array.newInstance=function(){var _1=[];isc.addPropertyList(_1,arguments);return _1}
Array.create=Array.newInstance;Array.LOADING="loading";Array.isLoading=function(_1){return _1!=null&&!isc.isAn.XMLNode(_1)&&(_1===Array.LOADING)}
isc.A=Array.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.newInstance=Array.newInstance;isc.A.create=Array.newInstance;isc.A.slice=(Array.prototype.slice?Array.prototype.slice:function(_1,_2){if(_2==null)_2=this.length;for(var _3=[],l=this.length;_1<_2&&_1<l;_1++)
_3[_3.length]=this[_1];return _3});isc.A.observe=isc.Class.getPrototype().observe;isc.A.ignore=isc.Class.getPrototype().ignore;isc.A.$dk=isc.Class.getPrototype().$dk;isc.B.push(isc.A.getPrototype=function(){return Array.prototype}
,isc.A.get=function(_1){return this[_1]}
,isc.A.getLength=function(){return this.length}
,isc.A.isEmpty=function(){return this.getLength()==0}
,isc.A.first=function(){return this[0]}
,isc.A.last=function(){return this[this.length-1]}
,isc.A.indexOf=function(_1,_2,_3){if(_2==null)_2=0;if(_3==null)_3=this.length-1;for(var i=_2;i<=_3;i++)
if(this[i]==_1)return i;return-1}
,isc.A.lastIndexOf=function(_1,_2,_3){if(_2==null)_2=this.length-1;if(_3==null)_3=0;for(var i=_2;i>=_3;i--)
if(this[i]==_1)return i;return-1}
,isc.A.contains=function(_1,_2){return(this.indexOf(_1,_2)!=-1)}
,isc.A.containsAll=function(_1){if(_1==null)return true;var _2=_1.getLength();for(var i=0;i<_2;i++){if(!this.contains(_1.get(i)))return false}
return true}
,isc.A.intersect=function(){var _1=[];for(var i=0;i<this.length;i++){var _3=this.get(i),_4=true;if(_3==null)continue;for(var a=0;a<arguments.length;a++){if(!arguments[a].contains(_3)){_4=false;break}}
if(_4)_1.add(_3)}
return _1}
,isc.A.equals=function(_1){if(_1==null||!isc.isA.List(_1))return false;var _2=_1.getLength();if(_2!=this.getLength())return false;for(var i=0;i<_2;i++){if(_1.get(i)!=this.get(i))return false}
return true}
,isc.A.getItems=function(_1){var _2=[],_3=_1.getLength();for(var i=0;i<_3;i++){_2[i]=this.get(_1.get(i))}
return _2}
,isc.A.getRange=function(_1,_2){if(_2==null)_2=this.length-1;return this.slice(_1,_2)}
,isc.A.duplicate=function(){return isc.$ac.concat(this)}
,isc.A.set=function(_1,_2){this[_1]=_2;this.dataChanged()}
,isc.A.addAt=function(_1,_2){if(_2==null)_2=0;for(var i=this.length-1;i>=_2;i--){this[i+1]=this[i]}
this[_2]=_1;this.dataChanged();return _1}
,isc.A.removeAt=function(_1){var _2=this.length;if(_1>=_2||_1<0)return null;var _3=this[_1];for(;_1<_2-1;_1++)
this[_1]=this[_1+1];this.length--;this.dataChanged();return _3}
,isc.A.add=function(_1,_2){var _3;if(_2!==_3){return this.addAt(_1,_2)}
var _4;if(this.sortUnique){_4=this.indexOf(_1);if(_4==-1)_4=this.length}else{_4=this.length}
this[_4]=_1;if(this.sortProps&&this.sortProps.length>0){this.sortByProperties(this.sortProps,this.sortDirections,this.sortNormalizers)}
this.dataChanged();return _1}
,isc.A.addList=function(_1,_2,_3){if(_1==null)return null;this.$ed();if(_2==null)_2=0;if(_3==null)_3=_1.getLength();for(var _4=_2;_4<_3;_4++){this.add(_1.get(_4))}
this.$ee();return _1}
,isc.A.setLength=function(_1){this.length=_1}
,isc.A.addListAt=function(_1,_2){if(_1==null)return null;for(var i=this.length-1,l=_1.length;i>=_2;i--){this[i+l]=this[i]}
for(i=0;i<l;i++){this[i+_2]=_1[i]}
this.dataChanged();return _1}
,isc.A.remove=function(_1){var _2=this.indexOf(_1);if(_2==-1)return false;for(var i=_2;i<this.length;i++)this[i]=this[i+1];this.length=this.length-1;this.dataChanged();return true}
,isc.A.removeList=function(_1){if(_1==null)return null;for(var _2=[],i=0,l=this.length;i<l;i++){if(!_1.contains(this[i]))_2.add(this[i])}
this.setArray(_2);return _1}
,isc.A.removeEvery=function(_1){this.removeList([_1]);return this}
,isc.A.dataChanged=function(){}
,isc.A.$ed=function(){var _1;if(this.$ef===_1)this.$ef=0;this.$ef++}
,isc.A.$ee=function(){if(--this.$ef==0)this.dataChanged()}
,isc.A.$52z=function(){return(this.$ef!=null&&this.$ef>0)}
,isc.A.setArray=function(_1){this.setLength(_1.length);for(var i=0;i<_1.length;i++)this[i]=_1[i];this.dataChanged()}
,isc.A.addAsList=function(_1){if(!isc.isAn.Array(_1))_1=[_1];return this.addList(_1)}
,isc.A.removeRange=function(_1,_2){var _3;if(_1===_3)return this;if(!isc.isA.Number(_1))_1=0;if(!isc.isA.Number(_2))_2=this.length;return this.splice(_1,_2-_1)}
,isc.A.removeWhere=function(_1,_2){for(var i=0,_4=[];i<this.length;i++){if(!this[i]||this[i][_1]!=_2){_4.add(this[i])}}
this.setArray(_4)}
,isc.A.removeEmpty=function(_1,_2){for(var i=0,_4=[];i<this.length;i++){if(this[i]!=null){_4.add(this[i])}}
this.setArray(_4)}
,isc.A.getProperty=function(_1){for(var _2=[],i=0,l=this.length;i<l;i++)
_2[_2.length]=(this[i]?this[i][_1]:null);return _2}
,isc.A.getValueMap=function(_1,_2){var _3={};for(var i=0,l=this.getLength();i<l;i++){var _6=this.get(i);if(!isc.isAn.Object(_6))continue;if(_6&&_6[_1]){_3[_6[_1]]=_6[_2]}}
return _3}
,isc.A.map=function(_1,_2,_3,_4,_5,_6){var _7=isc.isA.Function(_1),_8=[],_9=this.getLength();for(var i=0;i<_9;i++){var _11=this.get(i);if(_7){_8[i]=_1(_11,_2,_3,_4,_5,_6)}else{_8[i]=(_11&&_11[_1]!=null?_11[_1](_2,_3,_4,_5,_6):null)}}
return _8}
,isc.A.setProperty=function(_1,_2){for(var i=0,l=this.length;i<l;i++)
if(this[i])this[i][_1]=_2}
,isc.A.clearProperty=function(_1){var _2=false,_3;for(var i=0,l=this.length;i<l;i++){_2=_2||this[i]!==_3;if(this[i])delete this[i][_1]}
return _2}
,isc.A.getProperties=function(_1){return isc.applyMask(this,_1)}
,isc.A.getUniqueItems=function(){for(var _1=[],i=0,l=this.length;i<l;i++){if(!_1.contains(this[i]))_1[_1.length]=this[i]}
return _1}
,isc.A.findIndex=function(_1,_2){return this.findNextIndex(0,_1,_2)}
,isc.A.findNextIndex=function(_1,_2,_3,_4){if(_1==null)_1=0;else if(_1>=this.length)return-1;if(_4==null)_4=this.length-1;if(_2==null)return-1;if(isc.isA.String(_2)){for(var i=_1;i<=_4;i++){if(this[i]&&this[i][_2]==_3)return i}
return-1}else{return this.findNextMatch(_2,_1,_4)}}
,isc.A.findNextMatch=function(_1,_2,_3){var _4=isc.getKeys(_1);for(var i=_2;i<=_3;i++){var _6=this.get(i);if(!_6)continue;var _7=true;for(var j=0;j<_4.length;j++){var _9=_4[j];if(_6[_9]!=_1[_9]){_7=false;break}}
if(_7)return i}
return-1}
,isc.A.find=function(_1,_2){var _3=this.findIndex(_1,_2);return(_3!=-1)?this.get(_3):null}
,isc.A.findByKeys=function(_1,_2,_3,_4){if(_1==null){isc.Log.logWarn("findByKeys: passed null record");return-1}
var _5={},_6=_2.getPrimaryKeyFields(),_7=false;for(var _8 in _6){_7=true;if(_1[_8]==null){isc.Log.logWarn("findByKeys: passed record does not have a value for key field '"+_8+"'");return-1}
_5[_8]=_1[_8]}
if(!_7){isc.Log.logWarn("findByKeys: dataSource '"+_2.ID+"' does not have primary "+"keys declared, can't find record");return-1}
return this.findNextIndex(_3,_5,null,_4)}
,isc.A.containsProperty=function(_1,_2){var _3=this.findIndex(_1,_2);return(_3!=-1)}
,isc.A.findAll=function(_1,_2){if(_1==null)return null;if(isc.isA.String(_1)){var _3=null,l=this.length;var _5=isc.isAn.Array(_2);for(var i=0;i<l;i++){var _7=this[i];if(_7&&_5?_2.contains(_7[_1]):_7[_1]==_2){if(_3==null)_3=[];_3.add(_7)}}
return _3}else{return this.findAllMatches(_1)}}
,isc.A.findAllMatches=function(_1){var l=this.getLength(),_3=isc.getKeys(_1),_4=null;for(var i=0;i<l;i++){var _6=this.get(i);if(!_6)continue;var _7=true;for(var j=0;j<_3.length;j++){var _9=_3[j];if(_6[_9]!=_1[_9]){_7=false;break}}
if(_7){if(_4==null)_4=[];_4.add(_6)}}
return _4}
,isc.A.slide=function(_1,_2){this.slideRange(_1,_1+1,_2)}
,isc.A.slideRange=function(_1,_2,_3){var _4=this.splice(_1,_2-_1);this.addListAt(_4,_3)}
,isc.A.slideList=function(_1,_2){var _3=[],i;if(_2<0)_2=0;for(i=0;i<_2;i++)
if(!_1.contains(this[i]))
_3.add(this[i]);for(i=0;i<_1.length;i++)
_3.add(_1[i]);for(i=_2;i<this.length;i++)
if(!_1.contains(this[i]))
_3.add(this[i]);this.setArray(_3)}
,isc.A.makeIndex=function(_1,_2,_3){var _4={};var _5=(_2==-1);_2=(_2!=null&&_2!=0);for(var i=0;i<this.length;i++){var _7=this[i],_8=_7[_1];if(_8==null){if(!_3)continue;_8=i}
if(_5){_4[_8]=_7;continue}
var _9=_4[_8];if(_9==null){if(_2){_4[_8]=[_7]}else{_4[_8]=_7}}else{if(_2){_4[_8].add(_7)}else{var _9=_4[_8];if(isc.isAn.Array(_9)){_4[_8].add(_9)}else{_4[_8]=[_9,_7]}}}}
return _4}
,isc.A.arraysToObjects=function(_1){var _2=_1.length;for(var _3=[],i=0,l=this.length;i<l;i++){var _6=_3[i]={};for(var p=0;p<_2;p++){var _8=_1[p];_6[_8]=this[i][p]}}
return _3}
,isc.A.objectsToArrays=function(_1){var _2=_1.length;for(var _3=[],i=0,l=this.length;i<l;i++){var _6=_3[i]=[];for(var p=0;p<_2;p++){var _8=_1[p];_6[p]=this[i][_8]}}
return _3}
,isc.A.spliceArray=function(_1,_2,_3){var _4;if(_1===_4)return this.splice();if(_2===_4)return this.splice(_1);if(_3===_4)return this.splice(_1,_2);if(!isc.isAn.Array(_3)){isc.Log.logWarn("spliceArray() method passed a non-array third parameter. Ignoring...","Array");return this.splice(_1,_2)}
return this.splice.apply(this,[_1,_2].concat(_3))}
,isc.A.peek=function(){var _1=this.pop();this.push(_1);return _1}
,isc.A.removeItem=function(_1){return this.removeAt(_1)}
,isc.A.getItem=function(_1){return this.get(_1)}
,isc.A.setItem=function(_1){return this.set(_1)}
,isc.A.clearAll=function(_1){return this.removeList(this)}
,isc.A.size=function(){return this.getLength()}
,isc.A.subList=function(_1,_2){return this.getRange(_1,_2)}
,isc.A.addAll=function(_1){return this.addList(_1)}
,isc.A.removeAll=function(_1){var _2=this.getLength();this.removeList(_1);return this.getLength()!=_2}
,isc.A.clear=function(){this.setLength(0)}
,isc.A.toArray=function(){return this.duplicate()}
);isc.B._maxIndex=isc.C+67;Number.prototype.Class="Number";isc.A=Number.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.stringify=function(_1){if(!_1)_1=2;var _2=this.toString(),_3=_1-_2.length,_4=Number.$eg(_3);if(_4==null)return _2;return _4+_2}
,isc.A.toCurrencyString=function(_1,_2,_3,_4){var _5=Math.floor(this),_6=Math.round((this-_5)*100),_7=isc.StringBuffer.create();if(!isc.isA.String(_1))_1="$";if(!isc.isA.nonemptyString(_2))_2=".";if(_3==null)_3=true;if(_4!=true)_7.append(_1);_7.append(_5.stringify(1));if(_3){_7.append(_2);_7.append(_6.stringify(2))}else if(_6!=0){_7.append(_2);if(_6%10==0)_7.append(_6/ 10);else _7.append(_6.stringify(2))}
if(_4==true)_7.append(_1);return _7.toString()}
);isc.B._maxIndex=isc.C+2;isc.A=Number;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A._1zero="0";isc.A._2zero="00";isc.A._3zero="000";isc.A._4zero="0000";isc.B.push(isc.A.setStandardFormatter=function(_1){if(isc.isA.Function(Number.prototype[_1]))
Number.prototype.formatter=_1}
,isc.A.setStandardLocaleStringFormatter=function(_1){if(isc.isA.Function(Number.prototype[_1]))
Number.prototype.localeStringFormatter=_1}
,isc.A.$eg=function(_1){if(_1<=0)return;var _2;while(_1>4){if(_2==null)_2=this._4zero;else _2+=this._4zero;_1-=4}
var _3;switch(_1){case 4:_3=this._4zero;break;case 3:_3=this._3zero;break;case 2:_3=this._2zero;break;case 1:_3=this._1zero;break}
if(_2==null)return _3;return _2+_3}
);isc.B._maxIndex=isc.C+3;if(!Number.prototype.formatter)Number.prototype.formatter="toString";if(!Number.prototype.localeStringFormatter)
Number.prototype.localeStringFormatter="toString";isc.A=Number.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.localeProperties={decimalSymbol:".",groupingSymbol:",",negativeSymbol:"-",currencySymbol:"$",negativeFormat:1,groupingFormat:1};isc.A.$eh=".";isc.B.push(isc.A.iscToLocaleString=function(){return this[this.localeStringFormatter]()}
,isc.A.toFormattedString=function(_1){return this[(_1?_1:this.formatter)]()}
,isc.A.toLocalizedString=function(_1,_2,_3,_4){var _5=Math.abs(this),_6=Math.floor(_5),_7,_8,_9=[];if(_1){var _10=Math.round((_5-_6)*Math.pow(10,_1));_8=_10.stringify(_1)}else if(_1==0){_6=Math.round(_5)}else{if(_5-_6>0){_8=_5.toString().split(this.$eh)[1]}}
_7=_6.toString();var _11=_7.length;var _12=Math.floor(_11/ 3);if(_11%3){_9[0]=_7.substr(0,_11%3)}
for(var i=0;i<_12;i++){_9[_9.length]=_7.substr(_11%3+i*3,3)}
var _14=_9.join(_3||this.localeProperties.groupingSymbol);if(_8)_14=_14+(_2||this.localeProperties.decimalSymbol)+_8;if(this<0)_14=(_4||this.localeProperties.negativeSymbol)+_14;return _14}
,isc.A.toUSString=function(_1){return this.toLocalizedString(_1)}
,isc.A.toUSDollarString=function(_1){return this.localeProperties.currencySymbol+this.toLocalizedString(_1)}
);isc.B._maxIndex=isc.C+5;isc.defineClass("Format");isc.A=isc.Format;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.toUSString=function(_1,_2){if(!isc.isA.Number(_1))return _1;return _1.toUSString(_2)}
,isc.A.toUSDollarString=function(_1,_2){if(!isc.isA.Number(_1))return _1;return _1.toUSDollarString(_2)}
,isc.A.toCurrencyString=function(_1,_2,_3,_4,_5){if(!isc.isA.Number(_1))return _1;return _1.toCurrencyString(_2,_3,_4,_5)}
);isc.B._maxIndex=isc.C+3;isc.Math={random:function(_1,_2){if(_2==null){return Math.round(Math.random()*_1)}else{return Math.round(Math.random()*(_2-_1))+_1}}}
isc.addGlobal("timeStamp",function(){return new Date().getTime()});isc.addGlobal("timestamp",isc.timeStamp);Date.prototype.Class="Date";Date.Class="Date";isc.A=Date;isc.A.INVALID_DATE_STRING="Invalid date format";isc.A=Date;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$64g={toUSShortDate:"MDY",toUSShortDateTime:"MDY",toEuropeanShortDate:"DMY",toEuropeanShortDateTime:"DMY",toJapanShortDate:"YMD",toJapanShortDateTime:"YMD"};isc.B.push(isc.A.newInstance=function(_1,_2,_3,_4,_5,_6,_7){return new Date(_1,_2,_3,_4,_5,_6,_7)}
,isc.A.create=function(_1,_2,_3,_4,_5,_6,_7){return new Date(_1,_2,_3,_4,_5,_6,_7)}
,isc.A.compareDates=function(_1,_2){var _3=(_1!=null?_1.getTime():0),_4=(_2!=null?_2.getTime():0);return _3>_4?-1:(_4>_3?1:0)}
,isc.A.setInputFormat=function(_1){this.$ei=_1}
,isc.A.getInputFormat=function(){return this.$ei}
,isc.A.mapDisplayFormatToInputFormat=function(_1){if(_1=="toShortDate"){_1=Date.prototype.$el}else if(_1=="toNormalDate"){_1=Date.prototype.formatter}
if(isc.isA.Function(_1)){isc.Log.logInfo("Unable to determine input format associated with display format "+"function - returning default input format","Date");return this.getInputFormat()}
var _2=this.$64g[_1];if(_2!=null)return _2;if(_1=="toSerializeableDate")return this.parseSchemaDate;isc.Log.logInfo("Unable to determine input format associated with display format "+_1+" - returning default input format","Date");return this.getInputFormat()}
,isc.A.parseInput=function(_1,_2,_3,_4){if(isc.isA.Date(_1))return _1;if(!isc.isA.String(_1)||isc.isAn.emptyString(_1)){return null}
if(_2==null)_2=this.getInputFormat();if(isc.isA.Function(Date[_2]))_2=Date[_2];if(isc.isA.Function(_2))return _2(_1,_3);var _5=this.$ej(_1,_2);if(_5!=null){var _6=_5[0];if(_6&&_6.length<=2){_6=parseInt(_6,10);if(_6<_3)_6+=2000;else _6+=1900
_5[0]=_6}
var _7=new Date(_5[0],_5[1],_5[2],_5[3],_5[4],_5[5]);if(!_4)return _7;if(_7==null)return null;var _8=(_7.getFullYear()==_5[0]&&_7.getMonth()==_5[1]&&_7.getDate()==_5[2]&&(_5[3]==null||_7.getHours()==_5[3])&&(_5[4]==null||_7.getMinutes()==_5[4])&&(_5[5]==null||_7.getSeconds()==_5[5]));return _8?_7:null}else{return null}}
,isc.A.parseSchemaDate=function(_1){if(isc.isA.Date(_1))return _1;if(!isc.isA.String(_1))_1=(_1.toString?_1.toString():_1+"");var _2=_1.match(/(\d{4})[\/-](\d{2})[\/-](\d{2})([T ](\d{2}):(\d{2}):(\d{2}))?(\.(\d+))?([+-]\d{2}:\d{2}|Z)?/);if(_2==null)return null;var _3;if(!_2[4]){_3=new Date(_2[1],_2[2]-1,_2[3])}else if(!_2[9]){_3=new Date(Date.UTC(_2[1],_2[2]-1,_2[3],_2[5],_2[6],_2[7]))}else{var _4=_2[9];if(_4.length!=3){_4=Math.round(parseInt(_4)*Math.pow(10,3-_4.length))}
_3=new Date(Date.UTC(_2[1],_2[2]-1,_2[3],_2[5],_2[6],_2[7],_4))}
if(_2[10]&&_2[10].toLowerCase()!="z"){var _5=_2[10].split(":"),H=_5[0],_7=H&&H.startsWith("-"),H=parseInt(H),M=parseInt(_5[1]),_9=_3.getTime();if(isc.isA.Number(H))_9+=(3600000*H);if(isc.isA.Number(M))_9+=(60000*M*(_7?-1:1));_3.setTime(_9)}
return _3}
,isc.A.parseDate=function(_1,_2,_3,_4){return this.parseInput(_1,_2,_3,_4)}
,isc.A.parseDateTime=function(_1,_2,_3,_4){return this.parseInput(_1,_2,_3,_4)}
,isc.A.parseServerDate=function(_1,_2,_3){return new Date(_1,_2,_3)}
,isc.A.$ej=function(_1,_2){var _3,_4,_5,_6,_7,_8;var _9=_2?_2.indexOf("M"):0,_10=_2?_2.indexOf("D"):1,_11=_2?_2.indexOf("Y"):2;if(isc.Browser.isSafari&&isc.Browser.safariVersion<=312){var _12=this.$ek(_1,_9,_10,_11);_5=_12[0];_3=_12[1];_4=_12[2];_6=_12[3];_7=_12[4];_8=_12[5]}else{var _13=new RegExp(/^\s*(\d{4}|\d{1,2})[^\d](\d{4}|\d{1,2})[^\d](\d{4}|\d{1,2})([^\d](\d{1,2})[^\d](\d\d)[^\d]?(\d\d)?)?\s*$/),_14=_1.match(_13);if(_14==null)return null;_3=_14[_9+1]-1;_4=_14[_10+1];_5=_14[_11+1];_6=_14[5]||0;_7=_14[6]||0;_8=_14[7]||0}
if(isc.isA.Number(_5-_3-_4-_6-_7-_8))
return([_5,_3,_4,_6,_7,_8]);else return null}
,isc.A.setNormalDisplayFormat=function(_1){if(isc.isA.Function(Date.prototype[_1])||isc.isA.Function(_1)){Date.prototype.formatter=_1}}
,isc.A.setShortDisplayFormat=function(_1){if(isc.isA.Function(Date.prototype[_1])||isc.isA.Function(_1)){Date.prototype.$el=_1}}
,isc.A.setFormatter=function(_1){Date.setNormalDisplayFormat(_1)}
,isc.A.setLocaleStringFormatter=function(_1){if(isc.isA.Function(Date.prototype[_1])||isc.isA.Function(_1))
Date.prototype.localeStringFormatter=_1}
,isc.A.getShortMonthNames=function(_1){_1=_1||3;var _2=Date.shortMonthNames;if(_2==null)_2=Date.$41t;if(_2==null){var _3=Date.$41t=[];for(var i=0;i<12;i++){var _5=new Date(2000,i,2);_3[i]=_5.deriveShortMonthName()}
_2=Date.$41t}
var _6=[];for(var i=0;i<12;i++){_6[i]=_2[i].substring(0,_1)}
return _6}
,isc.A.getShortDayNames=function(_1){_1=_1||3;var _2=Date.shortDayNames;if(_2==null)_2=Date.$41s;if(_2==null){Date.$41s=[];var _3=new Date();_3.setDate(1);if(_3.getDay()>0)_3.setDate(_3.getDate()+(7-_3.getDay()));var _4=_3.getDate();for(var i=0;i<7;i++){_3.setDate(_4+i);Date.$41s[i]=_3.deriveShortDayName()}
_2=Date.$41s}
var _6=[];for(var i=0;i<7;i++){_6[i]=_2[i].substring(0,_1)}
return _6}
,isc.A.getWeekendDays=function(){var _1=Date.weekendDays;if(_1==null)_1=Date.$54i;if(_1==null){_1=Date.$54i=[0,6]}
return _1}
);isc.B._maxIndex=isc.C+19;isc.A=Date.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$em=[,,,,"/",,,,,"/",,,,null];isc.A.$en="MDY";isc.A.$eo="DMY";isc.A.$ep="YMD";isc.A.$en="MDY";isc.B.push(isc.A.duplicate=function(){var _1=new Date();_1.setTime(this.getTime());return _1}
,isc.A.clearTimeFields=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this}
,isc.A.deriveShortDayName=function(_1){var _2=this.toString();if(_1==null||_1<=0||_1>3)_1=3;return _2.substring(0,_1)}
,isc.A.getShortDayName=function(){return Date.getShortDayNames()[this.getDay()]}
,isc.A.deriveShortMonthName=function(_1){var _2=this.toUTCString();var _3=8;if(_1==null||_1<0||_1>3)_1=3;if(_2.substring(6,7)==' '){_3=7}
return _2.substring(_3,(_3+_1))}
,isc.A.getShortMonthName=function(){return Date.getShortMonthNames()[this.getMonth()]}
,isc.A.getShortYear=function(){var _1=this.getFullYear();return(_1%100).stringify(2)}
,isc.A.getWeek=function(){var _1=new Date(this.getFullYear(),0,1);return Math.ceil((((this-_1)/86400000)+_1.getDay())/7)}
,isc.A.toDateStamp=function(){return this.getUTCFullYear()+(this.getUTCMonth()+1).stringify()+this.getUTCDate().stringify()+"T"+this.getUTCHours().stringify()+this.getUTCMinutes().stringify()+this.getUTCSeconds().stringify()+"Z"}
,isc.A.toNormalDate=function(_1){if(!_1)_1=this.formatter;if(isc.isA.Function(_1)){return _1.apply(this)}else if(this[_1]){return this[_1]()}}
,isc.A.toShortDate=function(_1){if(!_1)_1=this.$el;if(isc.isA.Function(_1))return _1.apply(this);else if(isc.isA.Function(this[_1]))return this[_1]()}
,isc.A.$es=function(_1){var _2=this.$em,_3=this.getMonth()+1,_4=this.getDate(),_5=this.getFullYear(),_6,_7,_8;if(_1==this.$en){_6=0;_7=5;_8=10}else if(_1==this.$eo){_7=0;_6=5;_8=10}else if(_1==this.$ep){_8=0;_6=5;_7=10}else{_7=_1.indexOf("D")*5;_8=_1.indexOf("Y")*5;_6=_1.indexOf("M")*5}
_2[_7]=_4<10?Number.$et:null
isc.$bk(_2,_4,_7+1,3);_2[_6]=_3<10?Number.$et:null
isc.$bk(_2,_3,_6+1,3);isc.$bk(_2,this.getFullYear(),_8,4);return _2.join(isc.emptyString)}
,isc.A.toUSShortDate=function(){return this.$es(this.$en)}
,isc.A.toUSShortDateTime=function(){return(this.toUSShortDate()+" "+this.getHours().stringify()+":"+this.getMinutes().stringify())}
,isc.A.toEuropeanShortDate=function(){return this.$es(this.$eo)}
,isc.A.toEuropeanShortDateTime=function(){return(this.toEuropeanShortDate()+" "+this.getHours().stringify()+":"+this.getMinutes().stringify())}
,isc.A.toJapanShortDate=function(){return this.$es(this.$ep)}
,isc.A.toJapanShortDateTime=function(){return(this.toJapanShortDate()+" "+this.getHours().stringify()+":"+this.getMinutes().stringify())}
,isc.A.$eu=function(){if(isc.Comm.$ev){return isc.SB.concat('"'+this.toDBDate(),'"')}else{return isc.SB.concat("new Date(",this.getTime(),")")}}
,isc.A.$ew=function(_1,_2,_3,_4){return isc.Comm.$ex(_1,this.toSchemaDate(),_2||(this.logicalDate?"date":"datetime"),_3,_4)}
,isc.A.toSchemaDate=function(_1){if(_1||this.logicalDate){return isc.SB.concat(this.getFullYear().stringify(4),"-",(this.getMonth()+1).stringify(2),"-",this.getDate().stringify(2))};return isc.SB.concat(this.getUTCFullYear().stringify(4),"-",(this.getUTCMonth()+1).stringify(2),"-",this.getUTCDate().stringify(2),"T",this.getUTCHours().stringify(2),":",this.getUTCMinutes().stringify(2),":",this.getUTCSeconds().stringify(2))}
,isc.A.toSerializeableDate=function(_1){var _2=isc.SB.create();_2.append(this.getFullYear().stringify(4),"-",(this.getMonth()+1).stringify(2),"-",this.getDate().stringify(2));if(!_1)_2.append((isc.Comm.xmlSchemaMode?"T":" "),this.getHours().stringify(2),":",this.getMinutes().stringify(2),":",this.getSeconds().stringify(2));return _2.toString()}
,isc.A.toDBDate=function(){return isc.StringBuffer.concat("$$DATE$$:",this.toSerializeableDate())}
,isc.A.toDBDateTime=function(){return this.toDBDate()}
,isc.A.setFormatter=function(_1){this.setNormalDisplayFormat(_1)}
,isc.A.setLocaleStringFormatter=function(_1){if(isc.isA.Function(this[_1])||isc.isA.Function(_1))
this.localeStringFormatter=_1}
,isc.A.isBeforeToday=function(_1){var _2=new Date(this.getFullYear(),this.getMonth(),this.getDate(),0).getTime();if(_1.getTime()<_2)return true;else return false}
,isc.A.isToday=function(_1){if(this.getFullYear()==_1.getFullYear()&&this.getMonth()==_1.getMonth()&&this.getDate()==_1.getDate())
return true;else return false}
,isc.A.isTomorrow=function(_1){var _2=new Date(this.getFullYear(),this.getMonth(),this.getDate()+1,0);var _3=new Date(this.getFullYear(),this.getMonth(),this.getDate()+1,23);var _4=_1.getTime();if(_4>=_2.getTime()&&_4<=_3.getTime()){return true}else{return false}}
,isc.A.isThisWeek=function(_1){var _2=new Date(this.getFullYear(),this.getMonth(),this.getDate()-this.getDay(),0);var _3=new Date(this.getFullYear(),this.getMonth(),this.getDate()+(7-this.getDay()),23);var _4=_1.getTime();if(_4>=_2.getTime()&&_4<=_3.getTime()){return true}else{return false}}
,isc.A.isNextWeek=function(_1){var _2=new Date(this.getFullYear(),this.getMonth(),(this.getDate()-this.getDay())+7,0);var _3=new Date(this.getFullYear(),this.getMonth(),(this.getDate()-this.getDay())+14,23);var _4=_1.getTime();if(_4>=_2.getTime()&&_4<=_3.getTime()){return true}else{return false}}
,isc.A.isNextMonth=function(_1){var _2=new Date(this.getFullYear(),this.getMonth());_2.setMonth(_2.getMonth()+1);if(_2.getFullYear()==_1.getFullYear()&&_2.getMonth()==_1.getMonth()){return true}else{return false}}
);isc.B._maxIndex=isc.C+32;Date.prototype.toBrowserString=Date.prototype.toString;Date.prototype.toBrowserLocaleString=Date.prototype.toLocaleString;if(!Date.prototype.formatter)Date.prototype.formatter="toLocaleString"
if(!Date.prototype.$el)Date.setShortDisplayFormat("toUSShortDate");Date.prototype.iscToLocaleString=function(){var _1=this.localeStringFormatter;if(isc.isA.Function(_1))return _1.apply(this);else if(this[_1])return this[_1]()}
if(!Date.prototype.localeStringFormatter)
Date.prototype.localeStringFormatter="toLocaleString";Date.setInputFormat("MDY");isc.A=Date;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.$ek=function(_1,_2,_3,_4){var _5=_4*3,_6=_1.substring(_5,_5+4);var _7=(parseInt(_6)!=_6);if(_7)_6=_6.substring(0,2);var _8=0,_9=0;if(_2>_3)_8+=3;else _9+=3;if(_2>_4)_8+=(_7?3:5);if(_3>_4)_9+=(_7?3:5);var _10=_1.substring(_8,_8+2)-1;var _11=_1.substring(_9,_9+2);var _12=_7?9:11,_13=(_1.substring(_12,_12+2)||0),_14=(_1.substring(_12+3,_12+5)||0),_15=(_1.substring(_12+6,_12+8)||0);return[_6,_10,_11,_13,_14,_15]}
);isc.B._maxIndex=isc.C+1;isc.A=Date.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.toPrettyString=function(){return this.toUSShortDateTime()}
);isc.B._maxIndex=isc.C+1;isc.A=Date;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.parseStandardDate=function(_1){if(!isc.isA.String(_1))return null;var _2=_1.substring(0,4),_3=_1.substring(5,7)-1,_4=_1.substring(8,10),_5=_1.substring(11,13),_6=_1.substring(14,16),_7=_1.substring(17,19);if(_1.length<19){if(!isc.isA.Number(_2-_3-_4))return null}else{if(!isc.isA.Number(_2-_3-_4-_5-_6-_7))return null}
return new Date(_2,_3,_4,_5,_6,_7)}
,isc.A.parseSerializeableDate=function(_1){return this.parseStandardDate(_1)}
,isc.A.parseDBDate=function(_1){if(isc.isA.String(_1)&&_1.startsWith("$$DATE$$:")){_1=_1.substring(9)
return this.parseStandardDate(_1)}
return null}
,isc.A.parseDateStamp=function(_1){if(_1==null||isc.isA.Date(_1))return _1;var _2=new Date(Date.UTC(_1.substring(0,4),parseInt(_1.substring(4,6),10)-1,_1.substring(6,8),_1.substring(9,11),_1.substring(11,13),_1.substring(13,15)));if(isc.isA.Date(_2))return _2;else return null}
,isc.A.parseShortDate=function(_1,_2){return this.parseInput(_1,"MDY",_2)}
,isc.A.parseShortDateTime=function(_1,_2){return this.parseShortDate(_1,_2)}
,isc.A.parsePrettyString=function(_1,_2){return this.parseShortDate(_1,_2)}
,isc.A.parseEuropeanShortDate=function(_1,_2){return this.parseInput(_1,"DMY",_2)}
,isc.A.parseEuropeanShortDateTime=function(_1,_2){return this.parseInput(_1,"DMY",_2)}
);isc.B._maxIndex=isc.C+9;String.prototype.Class="String";isc.$ey=function(){var _1=[Array,Number,Date].getProperty("prototype");for(var i=0;i<_1.length;i++){var _3=_1[i];if(_3.toLocaleString==null){_3.toLocaleString=_3.toString}}
var _4=String.prototype;if(!_4.toLocaleUpperCase){_4.toLocaleUpperCase=_4.toUpperCase;_4.toLocaleLowerCase=_4.toLowerCase}
if(isc.Browser.isMoz){var _5="x",_6=_5.toLocaleString();if(_6!=_5){_4.toBrowserLocaleString=_4.toLocaleString;_4.toLocaleString=_4.toString}
_5=true;_6=_5.toLocaleString();if(_6!=_5+""){Boolean.prototype.toBrowserLocaleString=Boolean.prototype.toLocaleString;Boolean.prototype.toLocaleString=Boolean.prototype.toString}}}
isc.$ey();isc.A=String;isc.A.$ez=new RegExp("'","g");isc.A.$e0=new RegExp("\"","g");isc.A=String.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.replaceAll=function(_1,_2){return isc.replaceAll(this,_1,_2)}
,isc.A.contains=function(_1){if(!isc.isA.String(_1))_1=_1.toString();return isc.contains(this,_1)}
,isc.A.startsWith=function(_1){if(!isc.isA.String(_1))_1=_1.toString();return isc.startsWith(this,_1)}
,isc.A.endsWith=function(_1){if(!isc.isA.String(_1))_1=_1.toString();return isc.endsWith(this,_1)}
,isc.A.trim=function(_1){var _2=_1||" \t\n\r",l=this.length,_4=0,_5=l-1,i=0;while(_4<l&&_2.contains(this.charAt(i++)))_4++;i=l-1;while(_5>=0&&_2.contains(this.charAt(i--)))_5--;return this.substring(_4,_5+1)}
,isc.A.convertTags=function(_1,_2){return(_1?_1:"")+this.replace(/</g,"&lt;").replace(/>/g,"&gt;")+(_2?_2:"")}
,isc.A.asHTML=function(_1){var s=this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/(\r\n|\r|\n) /g,"<BR>&nbsp;").replace(/(\r\n|\r|\n)/g,"<BR>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");return(_1?s.replace(/ /g,"&nbsp;"):s.replace(/  /g," &nbsp;"))}
,isc.A.unescapeHTML=function(){return this.replace(/&nbsp;/g," ").replace(/<BR>/gi,"\n").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")}
,isc.A.toInitialCaps=function(){var _1=this.toLowerCase().split(" ");for(var i=0;i<_1.length;i++){_1[i]=_1[i].substring(0,1).toLocaleUpperCase()+_1[i].substring(1)}
return _1.join(" ")}
,isc.A.evalDynamicString=function(_1,_2){if(this.indexOf("${")<0)return this.toString();var _3=this,_4,_5,_6,_7;var _8=isc.StringBuffer.create();while((_5=_3.indexOf("${"))!=-1){_6=_3.indexOf("}",_5+1);if(_6==-1)break;if(_3.charAt(_5-1)=='\\'){_8.append(_3.slice(0,_5-1),_3.slice(_5,_6+1));_3=_3.substring(_6+1,_3.length);continue}
var _7=_3.slice(_5+2,_6);var _9;if(_2!=null&&_2[_7]){_9=_2[_7]}else{try{_9=isc.Class.evalWithVars(_7,_2,_1)}catch(e){var _10=_1?_1:isc.Log;_10.logWarn("dynamicContents eval error - returning empty string for block -->${"+_7+"}<-- error was: "+isc.Log.echo(e));_9=isc.emptyString}}
_8.append(_3.slice(0,_5),_9);_3=_3.substring(_6+1,_3.length)}
_8.append(_3);_3=_8.toString();return _3}
,isc.A.asSource=function(_1){return String.asSource(this,_1)}
);isc.B._maxIndex=isc.C+11;isc.A=String;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.asSource=function(_1,_2){if(!isc.isA.String(_1))_1=""+_1;var _3=_2?String.$ez:String.$e0,_4=_2?"'":'"';return _4+_1.replace(/\\/g,"\\\\").replace(_3,'\\'+_4).replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+_4}
);isc.B._maxIndex=isc.C+1;isc.addMethods(isc,{replaceAll:function(_1,_2,_3){return _1.split(_2).join(_3)},contains:function(_1,_2){if(_1==null)return false;return _1.indexOf(_2)>-1},startsWith:function(_1,_2){if(_1==null)return false;return(_1.lastIndexOf(_2,0)==0)},endsWith:function(_1,_2){if(_1==null)return false;var _3=_1.length-_2.length;if(_3<0)return false;return(_1.indexOf(_2,_3)==_3)},makeXMLSafe:function(_1){if(_1==null)return isc.emptyString;else if(!isc.isA.String(_1))_1=_1.toString();return _1.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(String.$e0,"&quot;").replace(String.$ez,"&apos;").replace(/\r/,"&#x000D;")},makeCDATA:function(_1){return"<![CDATA["+_1.replace(/\]\]>/,"]]<![CDATA[>")+"]]>"}});isc.ClassFactory.defineClass("StringBuffer");isc.SB=isc.StringBuffer;isc.A=isc.StringBuffer;isc.A.$e1=[];isc.A.$e2=50;isc.A=isc.StringBuffer.getPrototype();isc.A.maxStreamLength=(isc.Browser.isIE6?1000:100000);isc.A.addPropertiesOnCreate=false;isc.A=isc.StringBuffer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.init=function(){this.$e3=[]}
,isc.A.append=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27){var _28=this.$e3,_29,_30;if(_1!=null&&_1.constructor.$k==2){var _31=_1.length;if(_31<=30){var _31=_28.length;for(var i=0;i<_1.length;i++){_28[_31++]=_1[i]}}else{_28[_28.length]=_1.join(isc.emptyString)}}else{if(_27===_30&&_26===_30&&_25===_30){if(_1!=null)_28[_28.length]=_1;if(_2!=null)_28[_28.length]=_2
if(_3!=null)_28[_28.length]=_3
if(_4!=null)_28[_28.length]=_4
if(_5!=null)_28[_28.length]=_5
if(_6!=null)_28[_28.length]=_6
if(_7!=null)_28[_28.length]=_7
if(_8!=null)_28[_28.length]=_8
if(_9!=null)_28[_28.length]=_9
if(_10!=null)_28[_28.length]=_10
if(_11!=null)_28[_28.length]=_11
if(_12!=null)_28[_28.length]=_12
if(_13!=null)_28[_28.length]=_13
if(_14!=null)_28[_28.length]=_14
if(_15!=null)_28[_28.length]=_15
if(_16!=null)_28[_28.length]=_16
if(_17!=null)_28[_28.length]=_17
if(_18!=null)_28[_28.length]=_18
if(_19!=null)_28[_28.length]=_19
if(_20!=null)_28[_28.length]=_20
if(_21!=null)_28[_28.length]=_21
if(_22!=null)_28[_28.length]=_22
if(_23!=null)_28[_28.length]=_23
if(_24!=null)_28[_28.length]=_24}else{_29=arguments;for(var i=0,l=_29.length;i<l;i++){_28[_28.length]=_29[i]}}}
if(_28.length>this.maxStreamLength){_28[0]=_28.join(isc.emptyString);_28.length=1}
return this}
,isc.A.appendNumber=function(_1,_2){var _3=this.$e3;if(_2==null){_2=5;var _4=_1;if(_4<0){_4=0-_4;_2+=1}
if(_4>=100000){_4=_4/ 100000;while(_4>=1){_2+=1;_4=_4/ 10}}}
isc.$bk(_3,_1,_3.length,_2)}
,isc.A.clear=function(){this.$e3.length=0}
,isc.A.release=function(){var _1=isc.SB,_2=_1.$e1,_3=this.toString();if(_2.length<_1.$e2){this.clear();_2[_2.length]=this}
return _3}
,isc.A.getArray=function(){return this.$e3}
);isc.B._maxIndex=isc.C+6;isc.StringBuffer.getPrototype().toString=function(){return this.$e3.join(isc.emptyString)}
isc.StringBuffer.$e4=Array.prototype.join;isc.A=isc.StringBuffer;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$bw=[];isc.B.push(isc.A.create=function(){var _1=this.$e1,_2=_1.length;if(_2>0){var _3=_1[_2-1];_1.length=_2-1;return _3}else{return isc.Class.create.apply(this)}}
,isc.A.concat=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22,_23,_24,_25,_26,_27,_28,_29,_30,_31,_32,_33,_34,_35,_36,_37,_38,_39,_40,_41,_42,_43,_44,_45,_46,_47,_48,_49,_50,_51,_52){var _53,_54;if(isc.Browser.isIE&&_50===_53&&_51===_53&&_52===_53){var _55=this.$bw;_55.length=0;if(_1!=null)_55[_55.length]=_1;if(_2!=null)_55[_55.length]=_2;if(_3!=null)_55[_55.length]=_3;if(_4!=null)_55[_55.length]=_4;if(_5!=null)_55[_55.length]=_5;if(_6!=null)_55[_55.length]=_6;if(_7!=null)_55[_55.length]=_7;if(_8!=null)_55[_55.length]=_8;if(_9!=null)_55[_55.length]=_9;if(_10!=null)_55[_55.length]=_10;if(_11!=null)_55[_55.length]=_11;if(_12!=null)_55[_55.length]=_12;if(_13!=null)_55[_55.length]=_13;if(_14!=null)_55[_55.length]=_14;if(_15!=null)_55[_55.length]=_15;if(_16!=null)_55[_55.length]=_16;if(_17!=null)_55[_55.length]=_17;if(_18!=null)_55[_55.length]=_18;if(_19!=null)_55[_55.length]=_19;if(_20!=null)_55[_55.length]=_20;if(_21!=null)_55[_55.length]=_21;if(_22!=null)_55[_55.length]=_22;if(_23!=null)_55[_55.length]=_23;if(_24!=null)_55[_55.length]=_24;if(_25!=null)_55[_55.length]=_25;if(_26!=null)_55[_55.length]=_26;if(_27!=null)_55[_55.length]=_27;if(_28!=null)_55[_55.length]=_28;if(_29!=null)_55[_55.length]=_29;if(_30!=null)_55[_55.length]=_30;if(_31!=null)_55[_55.length]=_31;if(_32!=null)_55[_55.length]=_32;if(_33!=null)_55[_55.length]=_33;if(_34!=null)_55[_55.length]=_34;if(_35!=null)_55[_55.length]=_35;if(_36!=null)_55[_55.length]=_36;if(_37!=null)_55[_55.length]=_37;if(_38!=null)_55[_55.length]=_38;if(_39!=null)_55[_55.length]=_39;if(_40!=null)_55[_55.length]=_40;if(_41!=null)_55[_55.length]=_41;if(_42!=null)_55[_55.length]=_42;if(_43!=null)_55[_55.length]=_43;if(_44!=null)_55[_55.length]=_44;if(_45!=null)_55[_55.length]=_45;if(_46!=null)_55[_55.length]=_46;if(_47!=null)_55[_55.length]=_47;if(_48!=null)_55[_55.length]=_48;if(_49!=null)_55[_55.length]=_49;if(_50!=null)_55[_55.length]=_50;if(_51!=null)_55[_55.length]=_51;if(_52!=null)_55[_55.length]=_52;_54=_55.join(isc.emptyString)}else{arguments.join=this.$e4;_54=arguments.join(isc.emptyString)}
return _54}
);isc.B._maxIndex=isc.C+2;isc.defineClass("StringMethod");isc.A=isc.StringMethod.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.toString=function(){var _1=this.getValue();if(_1==null||isc.isA.String(_1))return _1;return _1.toString()}
,isc.A.getValue=function(){return this.value}
,isc.A.getDisplayValue=function(){var _1=this.getValue();if(_1==null||isc.isA.String(_1))return _1;if(_1.title!=null)return"["+_1.title+"]"
return _1}
,isc.A.cdata=function(_1){var _2=_1.indexOf("]]>");if(_2==-1)return"<![CDATA["+_1+"]]>";return this.cdata(_1.slice(0,_2))+"]]&gt;"+this.cdata(_1.slice(_2+3))}
,isc.A.$ew=function(_1,_2,_3,_4,_5,_6){var _7=this.value;if(isc.isA.String(_7))return isc.Comm.$ex(_1,this.cdata(_7),_2||"stringMethod",_3,_4);else
return isc.StringMethod.$41u(_7,_1,_4,_5,_6)}
);isc.B._maxIndex=isc.C+5;isc.A=isc.StringMethod;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$41v="Action";isc.B.push(isc.A.$41u=function(_1,_2,_3,_4,_5){var _6=isc.DataSource.get(this.$41v);if(!_6)return isc.Comm.$36t(_2,_1,_5,_4,_3);return[isc.Comm.$36u(_2),_6.xmlSerialize(_1,null,_3+"        ",this.$41v),"\n",_3,isc.Comm.$36v(_2)].join(isc.emptyString)}
);isc.B._maxIndex=isc.C+1;isc.ClassFactory.defineClass("Cookie");isc.A=isc.Cookie;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.init=function(){isc.Cookie.list={};if(document.cookie=="")return;var _1=(""+document.cookie).split("; ");for(var i=0,_3=_1.length,_4;_4=_1[i],i<_3;i++){var _5=_4.indexOf('='),_6=(_5==-1?_4:_4.substring(0,_5));isc.Cookie.list[_6]=(_5==-1?'':unescape(_4.substring(_5+1)))}}
,isc.A.get=function(_1){isc.Cookie.init();return isc.Cookie.list[_1]}
,isc.A.set=function(_1,_2,_3,_4,_5){isc.Cookie.init();document.cookie=_1+"="+escape(_2)+(_3?";path="+_3:"")+(_4?";domain="+_4:"")+(_5?";expires="+(isc.isA.String(_5)?_5:_5.toGMTString()):"")}
,isc.A.clear=function(_1,_2,_3){isc.Cookie.init();this.set(_1,"",_2,_3,"Thu, 01-Jan-70 00:00:01 GMT")}
,isc.A.getList=function(){isc.Cookie.init();return isc.getKeys(isc.Cookie.list)}
);isc.B._maxIndex=isc.C+5;isc.$e5={getCallTrace:function(_1,_2,_3){if(_1==null)_1=arguments.caller;if(_1==null)return"[getCallTrace(): Error: couldn't get arguments object]";var _4,_5=_1.callee;if(_5==null){_4="[args.callee == null]"}else if(!isc.Func){_4="[Func utility class not loaded]"}else{_4=isc.Func.getName(_5,true)}
_4+="(";var _6=(_5!=null?isc.Func.getArgs(_5):[]);var _7=Math.max(_1.length,_6.length);for(var i=0;i<_7;i++){var _9=_6[i],_10=_1[i];if(i>0)_4+=", ";if(_9!=null){_4+=_9+"=>"}
_4+=this.echoLeaf(_10)}
_4+=")";_2=_2||_1.$cw;if(_2)_4+=" on "+this.echoLeaf(_2);if(!_3&&!_5.$c7)return _4;var _11=this.$e6(_5);if(!_5.$c7){var _12=_11.split(/[\r\n]+/);if(_12.length>1||_12[0].length>200)return _4}
_4+='\n        "'+_11+'"';return _4},$e6:function(_1){var _2=isc.Func.getBody(_1);return _2.trim()},getStackTrace:function(_1,_2,_3){if(this.hasFireBug()){isc.Log.$50m=isc.Log.$50m||0;var _4="FBugTrace"+isc.Log.$50m++;return this.fireBugTrace(_4)}
if(isc.Browser.isMoz||isc.Browser.isSafari)
return" [Stack trace not supported in this browser]";if(_1==null)_1=arguments.caller;var _5=[];for(var i=0;i<_2;i++){if(_1.caller!=null)_1=_1.caller}
var _7=isc.Browser.isIE&&isc.Browser.version>6;var _8=_1.callee;var _9=[];var _10=true;if(_3==null)_3=Number.MAX_VALUE;var _11=0;while(_8!=null&&_1!=null&&_11<_3){if(_7){if(_9.contains(_8)){_5.add("    ** recursed on "+isc.Func.getName(_8,true));break}
_9.add(_8)}
_5.add("    "+this.getCallTrace(_1,null,(_10||_1.caller==null)));if(_11==0){var _12=this.$e7(_1.$e8);if(_12)_5.add(_12)}
_8=_1.callee;if(_7){_8=_8.caller;if(_8)_1=_8.arguments}else _1=_1.caller;_10=false;_11++}
if(_5.length==0)return"";return"\r\n"+_5.join("\r")+"\r"},hasFireBug:function(){return isc.Browser.isMoz&&window.console!=null&&window.console.trace!=null},fireBugVersion:function(){return this.hasFireBug()?window.console.firebug:null},fireBugTrace:function(_1){window.console.trace(_1);return" [Stack trace logged via Firebug: "+_1+"]"},$e7:function(_1){var _2=isc.SB.create();for(var _3 in _1){var _4=_1[_3],_5;if(_4===_5)continue;if(isc.startsWith(_3,isc.$ag))continue;_2.append("\n        "+_3+" = "+this.echoLeaf(_4))}
return _2.toString()},$am:function(_1,_2,_3,_4){if(_1.$fa)return;_1.$fa=true;var _5=_1.toString();this.logWarn(_5)},echoLeaf:function(_1,_2){var _3="",_4;if(_1===_4)return"undef";try{if(isc.isA.Class(_1)){_3+=_1.toString()}else if(isc.isAn.Array(_1)){_3+="Array["+_1.length+"]"}else if(isc.isA.Date(_1)){_3+="Date("+_1.toShortDate()+")"}else if(isc.isA.Function(_1)){_3+=isc.Func.getName(_1,true)+"()"}else{switch(typeof _1){case"string":if(_1.length<=40||_2){_3+='"'+_1+'"';break}
_3+='"'+_1.substring(0,40)+'..."['+_1.length+']';_3=_3.replaceAll("\n","\\n").replaceAll("\r","\\r");break;case"object":if(_1==null){_3+="null";break}
if(_1.tagName!=null){_3+="["+_1.tagName+"Element]"+this.getIDText(_1);break}
var _5=""+_1;if(_5!=""&&_5!="[object Object]"&&_5!="[object]")
{_3+=_5;break}
_3+="Obj"+this.getIDText(_1);break;default:_3+=""+_1}}
return _3}catch(e){var _6="[Error in echoLeaf: "+e+"]";_3+=_6;this.logDebug(_6,"Log");return _3}},getIDText:function(_1){var _2=_1.name||(isc.isAn.XMLNode(_1)?_1.getAttribute("name"):null);if(_2!=null&&!isc.isAn.emptyString(_2))return"{name:"+_2+"}";var _3=_1.ID!=null?_1.ID:_1.id!=null?_1.id:(isc.isAn.XMLNode(_1)?_1.getAttribute("id"):null);if(_3!=null&&!isc.isAn.emptyString(_3))return"{ID:"+_3+"}";if(_1.nodeName!=null&&!isc.isAn.emptyString(_1.nodeName)){return"{nodeName:"+_1.nodeName+"}"}
var _4=_1.title||(isc.isAn.XMLNode(_1)?_1.getAttribute("title"):null);if(_4!=null&&!isc.isAn.emptyString(_4))return"{title:"+_4+"}";var _5=_1.type||(isc.isAn.XMLNode(_1)?_1.getAttribute("type"):null);if(_5!=null&&!isc.isAn.emptyString(_5))return"{type:"+_5+"}";if(_1.length!=null)return"{length:"+_1.length+"}";return""},echo:function(_1,_2,_3,_4){if(_1==null)return this.echoLeaf(_1);if(_2==null)_2=true;if(_1.tagName)return this.echoDOM(_1);if(typeof _1!="object"||isc.isA.Date(_1))return this.echoLeaf(_1,true);if(isc.isAn.Array(_1)){var _5=(_3?"[\n":"[");for(var i=0;i<_1.length;i++){_5+=(_3?this.echo(_1[i],_2):this.echoLeaf(_1[i]));if(i+1<_1.length)_5+=(_3?",\n":", ")}
_5+="\n]";return _5}
var _5="{";if(_1.getUniqueProperties!=null){_5=_1.getClassName()+"{";_1=_1.getUniqueProperties();if(_4==null)_4=false}
if(_4==null)_4=true;var _7;try{_7=isc.getKeys(_1)}catch(e){return this.echoLeaf(_1)}
if(isc.Browser.isSafari){var _8=false,_9="[object CSSStyleDeclaration]";try{_8=(_1+""==_9)}catch(e){}
if(_8){_5=_9+"{\n[standard props only]\n";_7=isc.getKeys(isc.Canvas.$fi());_7.add("cssText")}}
for(var i=0;i<_7.length;i++){var _10=_7[i],_11;try{_11=_1[_10]}catch(e){_11="[error accessing property: "+e+"]"}
if(!_4&&isc.isA.Function(_11))continue;if(_10.startsWith("$"))continue;_5+=_10+": "+this.echoLeaf(_11);if(i+1<_7.length)_5+=(_2?",\r":", ")}
_5+="}";return _5},echoAll:function(_1,_2){return this.echo(_1,_2,true)},echoFull:function(_1){return isc.Comm.serialize(_1,true)},echoShort:function(_1){return this.echo(_1,false,false)},echoArray:function(_1){if(!isc.isAn.Array(_1))return this.echo(_1);if(_1.length==0)return"[empty array]";var _2=["["];for(var i=0;i<_1.length;i++){_2.addList([i,":",_1[i],"\n"])}
_2.add("]");return _2.join("")},$fj:{outerText:false,innerText:false,parentTextEdit:false,isTextEdit:false,parentTextEdit:false,contentEditable:false,canHaveHTML:true,isMultiLine:false,filters:false,canHaveChildren:false,behaviorUrns:false,sourceIndex:false,accelerator:false,textDecorationUnderline:false,textDecorationNone:false},echoDOM:function(_1){return this.echoDelta(_1,window.Node,_1.tagName+this.getIDText(_1))},echoEvent:function(_1){return this.echoDelta(_1,(isc.Browser.isMoz?window.KeyEvent:window.Event))},echoDelta:function(_1,_2,_3){if(_1==null)return null;if(isc.Browser.isIE&&isc.isAn.XMLNode(_1)){var _4="<"+_1.tagName+" [XMLNode] ";var _5=_1.attributes;for(var i=0;i<_5.length;i++){var _7=_5[i];if(i>0)_4+=" ";_4+=_7.name+"="+this.echoLeaf(_7.value)}
_4+=(i>0?" [":"")+_1.childNodes.length+" child nodes]>";return _4}
var _4=(_3||isc.emptyString)+"{",_8=isc.getKeys(_1);for(var i=0;i<_8.length;i++){var _9=_8[i];if(this.$fj[_9]!=null)continue;if(_2!=null&&_2[_9]!=null)continue;if(_9.length>3&&_9.toUpperCase()==_9)continue;try{var _10=_1[_9];if(_10==null||_10=="")continue;if(isc.isA.Function(_10))continue;_4+=_9+": "+this.echoLeaf(_1[_9])}catch(e){_4+=_9+": "+this.echoLeaf(e)}
if(i+1<_8.length)_4+=", "}
_4+="}";return _4},echoElementSize:function(_1){var _2;return this.echo({scrollLeft:_1.scrollLeft,scrollTop:_1.scrollTop,scrollWidth:_1.scrollWidth,scrollHeight:_1.scrollHeight,clientWidth:_2,clientHeight:_2,offsetWidth:_1.offsetWidth,offsetHeight:_1.offsetHeight,styleLeft:_1.style.left,styleTop:_1.style.top,styleWidth:_1.style.width,styleHeight:_1.style.height,styleClip:_1.style.clip})}};isc.Class.addProperties(isc.$e5)
isc.Class.addClassProperties(isc.$e5)
isc.$fk={logMessage:function(_1,_2,_3,_4){var _5=isc.Log;if(!_5)return;if(_1==null)_1=_5.defaultPriority;if(_1<=_5.stackTracePriority&&this.getStackTrace!=null){_2+="\nStack trace:\n"+this.getStackTrace(arguments,2)}
if(!_3)_3=this.Class;_5.log(_1,_2,_3,this.ID,this,_4)},logDebug:function(_1,_2){return this.logMessage(isc.Log.DEBUG,_1,_2)},logInfo:function(_1,_2){return this.logMessage(isc.Log.INFO,_1,_2)},logWarn:function(_1,_2){return this.logMessage(isc.Log.WARN,_1,_2)},logError:function(_1,_2){return this.logMessage(isc.Log.ERROR,_1,_2)},logFatal:function(_1,_2){return this.logMessage(isc.Log.FATAL,_1,_2)},logIsEnabledFor:function(_1,_2){return(isc.Log.isEnabledFor&&isc.Log.isEnabledFor((_2?_2:this.Class),_1,this))},logIsDebugEnabled:function(_1){return this.logIsEnabledFor(isc.Log.DEBUG,_1)},logIsInfoEnabled:function(_1){return this.logIsEnabledFor(isc.Log.INFO,_1)},logIsWarnEnabled:function(_1){return this.logIsEnabledFor(isc.Log.WARN,_1)},logIsErrorEnabled:function(_1){return this.logIsEnabledFor(isc.Log.ERROR,_1)},setLogPriority:function(_1,_2){isc.Log.setPriority(_1,_2,this)},setDefaultLogPriority:function(_1){isc.Log.setDefaultPriority(_1,this)},getDefaultLogPriority:function(){return isc.Log.getDefaultPriority(this)},clearLogPriority:function(_1){isc.Log.clearPriority(_1,this)}};isc.Class.addMethods(isc.$fk)
isc.Class.addClassMethods(isc.$fk)
isc.ClassFactory.defineClass("Log");isc.A=isc.Log;isc.A.FATAL=1;isc.A.ERROR=2;isc.A.WARN=3;isc.A.INFO=4;isc.A.DEBUG=5;isc.A.PRIORITY_NAMES=["NONE","FATAL","ERROR","WARN","INFO","DEBUG"];isc.A=isc.Log;isc.A.defaultPriority=isc.Log.WARN;isc.A.stackTracePriority=isc.Log.ERROR;isc.A.$fl={};isc.A.$fm={};isc.A.$fn=1000;isc.A.$fo=0;isc.A.$fp=[];isc.A.$fq=":";isc.A.$fr=".";isc.A._allCategories="_allCategories";isc.A.$fs="$fs";isc.A=isc.Log;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A._1zero="0";isc.A._2zero="00";isc.A.$ft="$T_";isc.A.$fu=["Timed ",,": ",,"ms"];isc.B.push(isc.A.applyLogPriorities=function(_1){if(!this.$fl){this.$fl={}}
if(_1){isc.addProperties(this.$fl,_1)}}
,isc.A.getLogPriorities=function(_1,_2){var _3;if(_1!=null){var _4=this.$fv(_1);_3=this.$fm[_4];if(_2){return isc.addProperties({},_3)}}
var _5=isc.addProperties({},this.$fl);if(_3)_5=isc.addProperties(_5,_3);return _5}
,isc.A.$fv=function(_1){var _2;if(_1==null)_2=isc.emptyString;else _2=(_1.getID?_1.getID():_1.getClassName());return _2}
,isc.A.getPriority=function(_1,_2){if(_2!=null){var _3=this.$fv(_2),_4=this.$fm[_3];if(_4){if(_4._allCategories!=null)return _4._allCategories;if(_4[_1]!=null)return _4[_1];if(_4.$fs!=null)return _4.$fs}}
var _5=this.$fl;return _5[_1]||_5.$fs}
,isc.A.setPriority=function(_1,_2,_3){if(_3!=null){var _4=this.$fv(_3);if(this.$fm[_4]==null)
this.$fm[_4]={};if(!_1)_1=this._allCategories;this.$fm[_4][_1]=_2}else{this.$fl[_1]=_2}}
,isc.A.setDefaultPriority=function(_1,_2){if(!_2||_2==isc.Log)isc.Log.defaultPriority=_1;else isc.Log.setPriority("$fs",_1,_2)}
,isc.A.getDefaultPriority=function(_1){var _2;if(_1&&_1!=isc.Log)_2=this.getPriority("$fs",_1);return _2||isc.Log.defaultPriority}
,isc.A.clearPriority=function(_1,_2){if(_2){var _3=this.$fv(_2);if(!_1)
delete this.$fm[_3];else if(this.$fm[_3])
delete this.$fm[_3][_1]}else{delete this.$fl[_1]}}
,isc.A.isEnabledFor=function(_1,_2,_3){if(!_1)_1=isc.$ad;while(_1!=isc.$ad){var _4=this.getPriority(_1,_3);if(_4!=null){return _2<=_4}
var _5=_1.lastIndexOf(this.$fr);if(_5>0){_1=_1.substring(0,_5)}else{break}}
return _2<=isc.Log.defaultPriority}
,isc.A.log=function(_1,_2,_3,_4,_5,_6){if(this.isEnabledFor(_3,_1,_5))
this.addLogMessage(_1,_2,_3,_4,_6);else if(this.reportSuppressedLogs){this.logWarn("suppressed log, category: "+_3+": "+_2)}}
,isc.A.getLogTimestamp=function(_1){var _2=this.$fw;if(_2==null){_2=this.$fw=[];_2[2]=this.$fq;_2[5]=this.$fq;_2[8]=this.$fr}
if(_1==null)_1=new Date();var _3=_1.getHours(),_4=_1.getMinutes(),_5=_1.getSeconds(),_6=_1.getMilliseconds();_2[1]=_3;if(_3<10)_2[0]=this._1zero;else _2[0]=null;_2[4]=_4;if(_4<10)_2[3]=this._1zero;else _2[3]=null;_2[7]=_5;if(_5<10)_2[6]=this._1zero;else _2[6]=null;_2[10]=_6;if(_6<10)_2[9]=this._2zero;else if(_6<100)_2[9]=this._1zero;else _2[9]=null;return _2.join(isc.$ad)}
,isc.A.getPriorityName=function(_1){if(_1==null)return isc.$ad;return this.PRIORITY_NAMES[_1]}
,isc.A.$fc=function(_1,_2,_3,_4,_5){var _6=this.$fx;if(_6==null){_6=this.$fx=[]}
if(!_3)_3=this.category;_6[0]=this.getLogTimestamp(_5);_6[1]=this.$fq;if(this.ns.EH&&this.ns.EH.$lc!=null){_6[2]=this.ns.EH.$lc;_6[3]=this.$fq}
if(_1!=null){_6[4]=this.getPriorityName(_1);_6[5]=this.$fq}
_6[6]=_3;_6[7]=this.$fq;if(_4){_6[8]=_4
_6[9]=this.$fq}
_6[10]=_2;var _7=_6.join(isc.$ad);_6.length=0;return _7}
,isc.A.addLogMessage=function(_1,_2,_3,_4,_5){this.addToMasterLog(this.$fc(_1,_2,_3,_4,_5))
if(_1!=null&&(_1==this.FATAL||_1==this.ERROR)){alert(_2)}}
,isc.A.addToMasterLog=function(message){this.$fp[this.$fo]=message;this.$fo++;if(this.$fo>this.$fn){this.$fo=0}}
,isc.A.getMessages=function(){var _1=this.$fp,_2=this.$fo,_3=this.$fn;return _1.slice(_3-_2,_3).concat(_1.slice(0,_2))}
,isc.A.show=function(_1,_2,_3){if(!this.logViewer)this.logViewer=isc.LogViewer.create();this.logViewer.showLog(_1,_2,_3)}
,isc.A.clear=function(){this.$fp=[];this.$fo=0;if(this.logViewer)this.logViewer.clear()}
,isc.A.updateStats=function(_1){if(this.logViewer)this.logViewer.updateStats(_1)}
,isc.A.$fy=function(){var _1=isc.$j;if(!_1)return;for(var i=0;i<_1.length;i++){var _3=_1[i];if(isc.isA.String(_3))this.logDebug(_3);else this.logMessage(_3.priority||isc.Log.INFO,_3.message,_3.category,_3.timestamp)}
isc.$j=null}
,isc.A.traceMethod=function(_1,_2,_3){var _4=this.validObservation(_1,_2);if(!_4)return;if(!this.$fz)this.$fz={};if(!this.$fz[_1])this.$fz[_1]=[];if(!this.$f0)this.$f0=isc.Class.create();var _5=this.$f0;if(_5.isObserving(_4,_2)&&this.$fz[_1].contains(_2))
{_5.ignore(_4,_2);this.logWarn("MethodTimer: Stopped logging stack traces for "+_2+" method on "+_1);this.$fz[_1].remove(_2)}else{var _6=_4.ID?_4.ID:(_4.Class?_4.Class:_4),_7="isc.Log.logWarn('"+_6+"."+_2+"() - trace:' +";if(_3){_7+="'\\n' + isc.Log.getCallTrace(arguments))"}else{_7+="isc.Log.getStackTrace())"}
this.logWarn("expression is: "+_7);_5.observe(_4,_2,_7);this.logWarn("MethodTimer: Logging traces whenever "+_2+" method on "+_1+" is called");this.$fz[_1].add(_2)}}
,isc.A.traceCall=function(_1,_2){this.traceMethod(_1,_2,true)}
,isc.A.timeMethod=function(_1,_2,_3,_4,_5){var _6=this.validObservation(_1,_2);if(!_6)return;if(!this.$f1)this.$f1={};if(!this.$f1[_1])this.$f1[_1]=[];if(this.$f1[_1].contains(_2))return;var _7=isc.Log.$ft+_2,_8=isc.$ah+_2,_9=(_6[_8]?_8:_2);_6[_7]=_6[_9];_6[_9]=isc.Log.makeTimerFunction(_2,_6,_3,_4,_5);this.logWarn("MethodTimer: Timing "+_2+" method on "+_1);this.$f1[_1].add(_2)}
,isc.A.stopTimingMethod=function(_1,_2){var _3=this.validObservation(_1,_2);if(!_3)return;if(this.$f1[_1].contains(_2)){var _4=isc.Log.$ft+_2,_5=isc.$ah+_2,_6=(_3[_5]?_5:_2)
if(!_3[_4]){this.logWarn("Not timing method '"+_2+"' on object '"+_1+"'.");this.$f1[_1].remove(_2);return}
_3[_6]=_3[_4];delete _3[_4];this.logWarn("MethodTimer: "+_2+" method on "+_1+" is no longer being timed");this.$f1[_1].remove(_2);return}}
,isc.A.makeTimerFunction=function(_1,_2,_3,_4,_5){var _6=_2[_1],_7=isc.Func.getName(_6,true);var _8=function(_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22){if(_5)isc.Log.$f2();var _9=isc.timeStamp();var _10=_6.call(this,_12,_13,_14,_15,_16,_17,_18,_19,_20,_21,_22);var _11=(isc.timeStamp()-_9);if(!_4)isc.Log.$f3(this,_7,_11);return _10}
_8.$dx=(_2.ID||_2.Class||"")+"_"+_1+"Timing";_8.$f4=true;_8.$c1=isc.Log.$ft+_1;return _8}
,isc.A.$f3=function(_1,_2,_3){if(this.deferTimerLogs)return this.$f5(_1,_2,_3);var _4=isc.Log.$fu;_4[1]=(_1.logWarn?_2:_2+" on "+this.echoLeaf(_1));_4[3]=_3.toFixed(3);var _5=_4.join(isc.emptyString);if(_1.logMessage)_1.logWarn(_5);else isc.Log.logWarn(_5)}
,isc.A.validObservation=function(_1,_2){if(isc.isAn.emptyString(_1)||isc.isAn.emptyString(_2))return false;var _3=_1;if(isc.isA.String(_1)){_3=isc.Class.evaluate(_1);if(!_3){this.logWarn("MethodTimer: "+_1+" is not an object.");return false}}
if(_2.indexOf("(")!=-1){_2=_2.slice(0,_2.indexOf("("))}
if(isc.isA.ClassObject(_3)){var _4=_3.getPrototype();if(isc.isA.Function(_4[_2]))return _4;if(!_3[_2]){this.logWarn("MethodTimer: "+_2+" could not be found as a static or instance property on "+_1);return false}}else if(!_3[_2]){this.logWarn("MethodTimer: "+_2+" is undefined or null on "+_1);return false}
if(!isc.Func.convertToMethod(_3,_2)){this.logWarn("MethodTimer: "+_2+" is not a method on "+_1);return false}
return _3}
,isc.A.hiliteCanvas=function(_1){var _2=_1;if(isc.isA.String(_1))_2=window[_1];if(!isc.isA.Canvas(_2)){this.logWarn("Unable to find specified canvas '"+_1+"'.");return}
this.showHiliteCanvas(_2.getPageRect())}
,isc.A.hiliteElement=function(_1){var _2=_1||this.elementToHilite;if(isc.isA.String(_1))_2=isc.Element.get(_1);if(_2==null){this.logWarn("Unable to find specified element '"+_1+"'.");return}
this.showHiliteCanvas(isc.Element.getElementRect(_2));this.elementToHilite=null}
,isc.A.showHiliteCanvas=function(_1){var _2=this._hiliteCanvas;if(!_2){_2=this._hiliteCanvas=isc.Canvas.create({ID:"logHiliteCanvas",autoDraw:false,overflow:"hidden",hide:function(){this.Super("hide",arguments);this.resizeTo(1,1);this.setTop(-20)},border1:"2px dotted red",border2:"2px dotted white"})}
_2.setPageRect(_1);isc.Page.setEvent("click",_2.getID()+".hide()");_2.setBorder(_2.border1);_2.bringToFront();_2.show();this.$f6()}
,isc.A.hideHiliteCanvas=function(){if(this._hiliteCanvas)this._hiliteCanvas.hide()}
,isc.A.$f6=function(){var _1=[this._hiliteCanvas.border1,this._hiliteCanvas.border2];for(var i=0;i<7;i++){isc.Timer.setTimeout({target:this._hiliteCanvas,methodName:"setBorder",args:[_1[i%2]]},(500*i))}}
);isc.B._maxIndex=isc.C+32;isc.ClassFactory.defineClass("LogViewer");isc.A=isc.LogViewer;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.getGlobalLogCookie=function(){var _1=isc.Cookie.get("GLog");if(!_1)return null;try{var _2=new Function("return "+_1);return _2()}catch(e){this.logWarn("bad log cookie: "+_1+this.getStackTrace())}}
,isc.A.getLogCookie=function(){var _1=isc.Cookie.get("Log");if(!_1)return null;try{var _2=new Function("return "+_1);return _2()}catch(e){this.logWarn("bad log cookie: "+_1+this.getStackTrace())}}
);isc.B._maxIndex=isc.C+2;isc.A=isc.LogViewer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$f7=25;isc.A.$f8="count";isc.B.push(isc.A.logWindowLoaded=function(){return(this._logWindowLoaded&&this._logWindow!=null&&!this._logWindow.closed)}
,isc.A.showLog=function(_1,_2,_3,_4){if(_2)this._logWindow=_2;if(this.logWindowLoaded()){this._logWindow.setResultsValue(isc.Log.getMessages().join("\r"));this._logWindow.focus();return}
if(!isc.Log.logViewer)isc.Log.logViewer=this;if(this._logWindow&&!this._logWindow.closed){return}
var _5={},_6=(_3?null:isc.LogViewer.getGlobalLogCookie());if(_6!=null){_5=_6}else{_5.left=100;_5.top=100;_5.width=640;_5.height=480}
var _7="RESIZABLE,WIDTH="+_5.width+",HEIGHT="+_5.height;if(_6){if(isc.Browser.isIE){_7+=",left="+_5.left+",top="+_5.top}else{_7+=",screenX="+_5.left+",screenY="+_5.top}
if(_6.evals)this.$f9=_6.evals.length-1}
_4=_4||"_simpleLog";this._logWindow=window.open(isc.Page.getIsomorphicClientDir()+"helpers/Log.html",_4+(isc.version.contains("version")?"Dev":""),_7);this.$ga(_3)}
,isc.A.$ga=function(_1){if(isc.Browser.isIE){try{this._logWindow.$gb=true}catch(e){this.delayCall("$ga",[_1],this.$f7);return}}
if(isc.Browser.isIE){this._logWindow.launchWindow=window}
if(_1)this._logWindow.dontSaveState=true;var _2=function(){if(isc.Log.logViewer){var _3=isc.Log.logViewer._logWindow;if(_3&&!_3.closed)_3.focus()}}
isc.Page.setEvent("idle",_2,isc.Page.FIRE_ONCE);if(this._logWindow.initializePage)this._logWindow.initializePage()}
,isc.A.addToLog=function(_1,_2){if(this.logWindowLoaded()&&!this.$gc){this._logWindow.addToLog(_1,_2)}}
,isc.A.updateStats=function(_1){if(isc.$gd)return;if(!this.logWindowLoaded())return;var _2=isc.Canvas,_3=this._logWindow.staticForm;if(_1==this.$f8){_3.setValue(_1,_2._canvasList.length-_2._iscInternalCount)}else{_3.setValue(_1,_2._stats[_1])}}
,isc.A.displayEventTarget=function(){var _1=isc.EH.lastTarget?isc.EH.lastTarget.getID():"";if(_1==this.$ge)return;this.$ge=_1;if(this.logWindowLoaded()){this._logWindow.staticForm.setValue("currentCanvas",_1)}
var _2=isc.EH.lastEvent.nativeTarget;var _3=(_2?(_2.id||_2.ID||_2.tagName):'none')
if(this.logWindowLoaded()){this._logWindow.staticForm.setValue("nativeTarget",_3)}}
,isc.A.displayFocusTarget=function(){var _1=isc.EH.getFocusCanvas(),_2=_1?_1.getID():"";if(_2==this.$gf)return;this.$gf=_2;if(this.logWindowLoaded()){this._logWindow.staticForm.setValue("currentFocusCanvas",_2)}}
,isc.A.displayMouseDownTarget=function(){var _1=isc.EH.mouseDownEvent.target,_2=_1?_1.getID():"";if(this.logWindowLoaded()){this._logWindow.staticForm.setValue("lastMouseDown",_2)}}
,isc.A.updateRPC=function(){if(this.logWindowLoaded()&&this._logWindow.RPCTracker)
this._logWindow.RPCTracker.dataChanged()}
,isc.A.evaluate=function(_1,_2){var _3=isc.timeStamp();var _4,_5;if(isc.Browser.isIE){_5=isc.Class.evalWithVars(_1,_2,this)}else{try{_5=isc.Class.evalWithVars(_1,_2,this)}catch(e){_4=e}}
var _6=isc.timeStamp(),_7=isc.Log.getLogTimestamp()+":";var _8=_1.split(/[\r\n]+/);if(_8.length>1)_1=_8[0]+"...";if(_1.length>200)_1=_1.substring(0,200)+"...";if(_4){if(isc.Browser.isMoz){isc.Log.$am(_4);return}
_7+="Evaluator: '"+_1+"' returned a script error: \r\n"+"'"+_4+"'"}else{_7="Evaluator: result of '"+_1+"' ("+(_6-_3)+"ms):\r\n"+this.echo(_5)}
this.addToLog(_7,true)}
,isc.A.clear=function(){if(this.logWindowLoaded())this._logWindow.clearResults()}
);isc.B._maxIndex=isc.C+11;isc.$gg=isc.LogViewer.getGlobalLogCookie();if(isc.$gg!=null){isc.Log.applyLogPriorities(isc.$gg.priorityDefaults)
if(isc.$gg.defaultPriority!=null)
isc.Log.defaultPriority=isc.$gg.defaultPriority}else{isc.Log.setPriority("Log",isc.Log.INFO)}
isc.showConsole=function(_1,_2,_3,_4){isc.showLog(_1,_2,_3,_4)}
isc.addGlobal("showLog",function(_1,_2,_3,_4){isc.Log.show(_1,_2,_3,_4)})
isc.Log.logInfo("initialized");isc.Log.$fy();if(!isc.Browser.isMoz&&!isc.Browser.isSafari&&!(window.isc_installOnError==false)){window.onerror=function(_1,_2,_3){if(arguments.caller&&arguments.caller.$e9)return;var _4="Error:\r\t'"+_1+"'\r\tin "+_2+"\r\tat line "+_3+isc.Log.getStackTrace(arguments.caller);isc.Log.logWarn(_4);if(isc.useIEDebugger){if(confirm("Run debugger?\r\r"+_4)){debugger}}}}
isc.$63a=function(){return"["+this.Class+" ID:"+this.ID+" (created by: "+this.componentId+")]"}
isc.$63b=function(_1,_2,_3,_4){var _5=isc.Log;if(!_5)return;if(_1==null)_1=_5.defaultPriority;if(_1<=_5.stackTracePriority&&this.getStackTrace!=null){_2+="\nStack trace:\n"+this.getStackTrace(arguments,2)}
if(!_3)_3=this.Class;_5.log(_1,_2,_3,this.ID+" (created by: "+this.componentId+")",this,_4)}
isc.A=Array;isc.A.ASCENDING=true;isc.A.DESCENDING=false;isc.A=Array;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.shouldSortAscending=function(_1){if(_1==Array.ASCENDING)return true;if(_1==Array.DESCENDING)return false;if(isc.isA.String(_1)){if(_1.toLowerCase()=="ascending")return true;if(_1.toLowerCase()=="descending")return false}
return null}
);isc.B._maxIndex=isc.C+1;isc.A=Array.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.sortByProperty=function(_1,_2,_3,_4){return this.sortByProperties({property:_1,direction:_2,normalizer:_3,context:_4})}
,isc.A.sortByProperties=function(){var _1=Array.$gh,_2=Array.$gi;if(isc.isAn.Array(arguments[0])){this.sortProps=arguments[0];this.sortDirections=arguments[1]||[];this.normalizers=arguments[2]||[];this.contexts=arguments[3]||[]}else{if(!this.sortProps){this.sortProps=[];this.normalizers=[];this.sortDirections=[];this.contexts=[]}else{this.sortProps.clear();this.sortDirections.clear();this.normalizers.clear();this.contexts.clear()}
for(var i=0;i<arguments.length;i++){this.sortProps[i]=arguments[i].property;this.sortDirections[i]=arguments[i].direction;this.normalizers[i]=arguments[i].normalizer;this.contexts[i]=arguments[i].context}}
var _4=this.sortProps,_5=this.normalizers,_6=this.contexts;for(var i=0;i<_4.length;i++){Array.$506[i]=this.sortDirections[i];var _7=_4[i],_8=_5[i],_9=_6[i];var _10;if(_8==null){_10=this.$gj(_4[i])}else if(isc.isA.String(_8)){_10=_8}
if(_10!=null)_8=Array.$gk(_10);if(_8==null)_8=Array.$gl;this.normalizers[i]=_8;if(this.length==0)continue;_1[i]=[];_2[i]=[];if(isc.isA.Function(_8)){for(var _11=0,l=this.length,_13;_11<l;_11++){_13=this[_11];if(_13==null){continue}
_13.$gm=_11;var _14=_8(_13,this.sortProps[i],_9);_1[i][_11]=_14;if(_10!=null&&!Array.$gn(_13[this.sortProps[i]],_10)){_2[i][_11]=_13[this.sortProps[i]]}
var _15;if(isc.isA.SpecialNumber(_14)&&isNaN(_14)){_1[i][_11]=0-Number.MAX_VALUE}}}else{var _16=this.normalizers[i];for(var _11=0,l=this.length,_13;_11<l;_11++){_13=this[_11];if(_13==null)continue;var _17=_13[this.sortProps[i]];if(_17==null)_17='';var _14=_16[_17];if(_14==null)_14=_17;_13.$gm=_11;_1[i][_11]=_14}}}
this.sort(Array.$hd);if(Array.$gq){isc.Log.logWarn("Attempt to sort array by property hit null entry where a record should be. Array:"+isc.Log.echo(this));Array.$gq=null}
this.clearProperty("$gm");_1.clear();_2.clear();Array.$506.clear();this.dataChanged();return this}
,isc.A.unsort=function(){if(this.sortProps)this.sortProps.clear();return true}
,isc.A.$gj=function(_1,_2){var _3=(_2!=null?(isc.isAn.Array(_2)?_2:[_2]):this);for(var i=0;i<_3.length;i++){if(!isc.isAn.Object(_3[i]))continue;_2=_3[i][_1];if(_2==null)continue;var _5=Array.$gr(_2);if(_5!=null)return _5}
return null}
,isc.A.$gs=function(_1,_2){var _3=this.$gj(_1,_2);var _4=Array.$gk(_3);return _4||Array.$gl}
,isc.A.normalize=function(_1,_2){var _3=(this.normalizer?this.normalizer:this.$gs(_2,_1));return _3(_1,_2)}
);isc.B._maxIndex=isc.C+6;isc.A=Array;isc.A.$gt="$gu";isc.A.$gv="$gw";isc.A=Array;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$a6="string";isc.A.$gx="text";isc.A.$gy="number";isc.A.$gz="integer";isc.A.$g0="float";isc.A.$g1="int";isc.A.$g2="boolean";isc.A._$Date_="Date";isc.A.$g3="Time";isc.A.$g4="date";isc.A.$g5="time";isc.A.$bl="object";isc.A.$g6={"float":"number","int:":"number","integer":"number","text":"string","Date":"date","Time":"date","time":"date"};isc.A.$gh=[];isc.A.$gi=[];isc.A.$506=[];isc.B.push(isc.A.$gl=function(_1,_2){return _1[_2]}
,isc.A.$g7=function(_1,_2){return(isc.isA.String(_1[_2])?_1[_2].toLowerCase():isc.emptyString)}
,isc.A.$g8=function(_1,_2){var _3=_1[_2];return isc.isA.Number(_3)?_3:(0-Number.MAX_VALUE)}
,isc.A.$g9=function(_1,_2){var _3=_1[_2];if(_3==true)return 1;if(_3==false)return 0;if(_3==null)return-1;return-2}
,isc.A.$ha=function(_1,_2){var _3=(_1[_2]&&isc.isA.Date(_1[_2])?_1[_2].getTime():new Date(_1[_2]).getTime())
if(isNaN(_3))return-8640000000000000;return _3}
,isc.A.$hb=function(_1,_2){var _3=_1[_2];if(!isc.isA.Date(_3)&&_3!=null)_3=isc.Time.parseInput(_3);if(isc.isA.Date(_3))return _3.getTime();return 0}
,isc.A.textToNumericNormalizer=function(_1,_2){var _3=parseInt(_1[_2],10);if(isc.isA.Number(_3))return _3;else return 0}
,isc.A.$gk=function(_1){if(!_1||!isc.isA.String(_1))return null;switch(_1){case this.$a6:case this.$gx:return Array.$g7;case this.$g2:return Array.$g9;case this._$Date_:case this.$g4:return Array.$ha;case this.$g3:case this.$g5:return Array.$hb;case this.$gy:case this.$gz:case this.$g1:case this.$g0:return Array.$g8}
return Array.$gl}
,isc.A.$gr=function(_1){var _2=typeof _1;if(_2==this.$bl){if(isc.isA.Date(_1))_2=this.$g4}
return _2}
,isc.A.$gn=function(_1,_2){var _3=this.$gr(_1);if(_3==_2)return true;return(this.$g6[_2]==_3)}
,isc.A.$hd=function(_1,_2){if(_1==null||_2==null){this.$gq=true}
var _3=Array.$gh,_4=Array.$gi,_5=Array.$506,_6=(_1!=null?_1.$gm:null),_7=(_2!=null?_2.$gm:null);for(var i=0;i<_3.length;i++){var _9=(_6!=null?_3[i][_6]:null),_10=(_7!=null?_3[i][_7]:null);if(_9!=null&&_10!=null){var _11=_4[i][_6],_12=_4[i][_7];if(_11!=null&&_12!=null){_9=_11;_10=_12}}
var _13=(_5[i]?Array.compareAscending(_9,_10):Array.compareDescending(_9,_10));if(_13!=0)return _13}
return 0}
,isc.A.compareAscending=function(_1,_2){if(_1!=null&&_1.localeCompare!=null){var _3=_1.localeCompare(_2);if(this.adjustLocaleCompare())_3-=2;return _3}
if(_2!=null&&_2.localeCompare!=null){var _3=_2.localeCompare(_1);if(this.adjustLocaleCompare())_3-=2;return _3}
return(_2>_1?-1:_2<_1?1:0)}
,isc.A.compareDescending=function(_1,_2){if(_1!=null&&_1.localeCompare!=null){var _3=_1.localeCompare(_2);if(this.adjustLocaleCompare())_3-=2;return-1*_3}
if(_2!=null&&_2.localeCompare!=null){var _3=_2.localeCompare(_1);if(this.adjustLocaleCompare())_3-=2;return-1*_3}
return(_2<_1?-1:_2>_1?1:0)}
,isc.A.adjustLocaleCompare=function(){if(!isc.Browser.isSafari)return false;if(Array.$41w==null){var b="b";Array.$41w=(b.localeCompare("a")==3)}
return Array.$41w}
);isc.B._maxIndex=isc.C+14;isc.A=Array.prototype;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.max=function(_1,_2){if(_1==null)_1=0;if(_2==null)_2=this.length;var _3=null;for(var i=_1;i<_2;i++){var _5=this[i];if(isc.isA.Number(_5)){if(_3==null)_3=_5;else _3=Math.max(_3,_5)}}
return _3}
,isc.A.min=function(_1,_2){if(_1==null)_1=0;if(_2==null)_2=this.length;var _3=null;for(var i=_1;i<_2;i++){var _5=this[i];if(isc.isA.Number(_5)){if(_3==null)_3=_5;else _3=Math.min(_3,_5)}}
return _3}
,isc.A.sum=function(_1,_2){if(_1==null)_1=0;if(_2==null)_2=this.length;var _3=0;for(var i=_1;i<_2;i++)
if(isc.isA.Number(this[i]))_3+=this[i];return _3}
,isc.A.and=function(_1,_2){if(_1==null)_1=0;if(_2==null)_2=this.length;for(var i=_1;i<_2;i++)
if(!this[i])return false;return true}
,isc.A.or=function(_1,_2){if(_1==null)_1=0;if(_2==null)_2=this.length;var _3=0;for(var i=_1;i<_2;i++)
if(this[i])return true;return false}
);isc.B._maxIndex=isc.C+5;isc.getValueForKey=function(_1,_2,_3){if(_2&&_2[_1]!=null)return _2[_1];return(arguments.length<3?_1:_3)}
isc.getKeyForValue=function(_1,_2,_3){if(_2){for(var _4 in _2){if(_2[_4]==_1)return _4}}
return(arguments.length<3?_1:_3)}
isc.makeReverseMap=function(_1){var _2={},_3;for(var _4 in _1){_3=_1[_4];_2[_3]=_4}
return _2}
isc.sortByKey=function(_1){var _2={},_3=isc.getKeys(_1).sort();for(var i=0;i<_3.length;i++){_2[_3[i]]=_1[_3[i]]}
return _2}
isc.sortByValue=function(_1){return isc.makeReverseMap(isc.sortByKey(isc.makeReverseMap(_1)))}
isc.ClassFactory.defineClass("Time");isc.A=isc.Time;isc.A.UTCHoursOffset=0;isc.A.$he=[/^\s*(\d?\d)\s*[: ]\s*(\d?\d)\s*[: ]\s*(\d?\d)?\s*([AaPp][Mm]?)?\s*$/,/^\s*(\d?\d)\s*[: ]\s*(\d?\d)(\s*)([AaPp][Mm]?)?\s*$/,/^\s*(\d\d)(\d\d)(\d\d)?\s*([AaPp][Mm]?)?\s*$/,/^\s*(\d)(\d\d)(\d\d)?\s*([AaPp][Mm]?)?\s*$/,/^\s*(\d\d?)(\s)?(\s*)([AaPp][Mm]?)?\s*$/];isc.A.formatterMap={toTime:{showSeconds:true,padded:false,show24:false},to24HourTime:{showSeconds:true,padded:false,show24:true},toPaddedTime:{showSeconds:true,padded:true,show24:false},toPadded24HourTime:{showSeconds:true,padded:true,show24:true},toShortTime:{showSeconds:false,padded:false,show24:false},toShort24HourTime:{showSeconds:false,padded:false,show24:true},toShortPaddedTime:{showSeconds:false,padded:true,show24:false},toShortPadded24HourTime:{showSeconds:false,padded:true,show24:true}};isc.A.displayFormat="toTime";isc.A.shortDisplayFormat="toShortTime";isc.A.AMIndicator=" am";isc.A.PMIndicator=" pm";isc.A=isc.Time;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$hf=[null,":",null,":"];isc.A.$hg=[null,":"];isc.B.push(isc.A.toTime=function(_1,_2){return this.format(_1,_2,false)}
,isc.A.toShortTime=function(_1,_2){return this.format(_1,_2,true)}
,isc.A.format=function(_1,_2,_3){if(!isc.isA.Date(_1))return _1;var _4=_2;if(!_2&&!isc.isA.String(_2)&&!isc.isA.Function(_2)){_2=_3?this.shortDisplayFormat:this.displayFormat}
if(isc.isA.Function(_2))return _2(_1);if(isc.isA.String(_2))_2=this.formatterMap[_2];if(!isc.isAn.Object(_2)){this.logWarn("Invalid time formatter:"+_4+" - using 'toTime'");_2=this.formatterMap.toTime}
var _5=_2.showSeconds,_6=_2.padded,_7=_2.show24;var _8=_1.getUTCHours();_8-=isc.Time.UTCHoursOffset;var _9=_1.getUTCMinutes(),_10=_5?_1.getUTCSeconds():null,_11=_7?null:(_8>=12);if(_8<0)_8+=24;if(!_7){if(_8>12)_8=_8-12;if(_8==0)_8=12}
if(_6)_8=_8.stringify(2);var _12=_5?this.$hf:this.$hg;_12[0]=_8;_12[2]=_9.stringify();if(_5)_12[4]=_10.stringify();if(!_7)_12[5]=(_11?this.PMIndicator:this.AMIndicator);else _12[5]=null;return _12.join(isc.emptyString)}
,isc.A.parseInput=function(_1,_2){var _3=0,_4=0,_5=0,_6=0;if(isc.isA.Date(_1)){_3=_1.getUTCHours();_3-=isc.Time.UTCHoursOffset;_4=_1.getUTCMinutes();_5=_1.getUTCSeconds();_6=_1.getMilliseconds()}else if(_1){for(var i=0;i<isc.Time.$he.length;i++){var _8=isc.Time.$he[i].exec(_1);if(_8)break}
if(_8){var _3=Math.min(parseInt(_8[1]|0,10),23),_4=Math.min(parseInt(_8[2]|0,10),59),_5=Math.min(parseInt(_8[3]|0,10),59),_9=_8[4];;if(_9){if(!this.$hh)this.$hh={p:true,P:true,pm:true,PM:true,Pm:true};if(this.$hh[_9]){if(_3<12)_3+=12}else if(_3==12)_3=0}}else if(_2)return null}else if(_2)return null;var _10=new Date();_3+=isc.Time.UTCHoursOffset;while(_3>=24)_3-=24;while(_3<0)_3+=24;_10.setUTCHours(_3);_10.setUTCMinutes(_4);_10.setUTCSeconds(_5);_10.setMilliseconds(_5);return _10}
,isc.A.createDate=function(_1,_2,_3,_4){var _5=new Date();if(_1==null)_1=0;else _1+=isc.Time.UTCHoursOffset;while(_1>=24)_1-=24;while(_1<0)_1+=24;_5.setUTCHours(_1);if(_2==null)_2=0;_5.setUTCMinutes(_2);if(_3==null)_3=0;_5.setUTCSeconds(_3);if(_4==null)_4=0;_5.setMilliseconds(_4);return _5}
,isc.A.setShortDisplayFormat=function(_1){this.shortDisplayFormat=_1}
,isc.A.setNormalDisplayFormat=function(_1){this.displayFormat=_1}
,isc.A.compareTimes=function(_1,_2){if(isc.isA.String(_1))_1=isc.Time.parseInput(_1);if(isc.isA.String(_2))_2=isc.Time.parseInput(_2);if(_1==null&&_2==null)return true;if(!isc.isA.Date(_1)||!isc.isA.Date(_2))return false;return((_1.getUTCHours()==_2.getUTCHours())&&(_1.getUTCMinutes()==_2.getUTCMinutes())&&(_1.getUTCSeconds()==_2.getUTCSeconds()))}
);isc.B._maxIndex=isc.C+8;isc.defineClass("PubSub");isc.A=isc.PubSub;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$41x={};isc.A.$41y=0;isc.B.push(isc.A.getSubscribers=function(_1){return(this.$41x[_1]=this.$41x[_1]||[])}
,isc.A.subscribe=function(_1,_2,_3){var _4=this.getSubscribers(_1),_5=this.$41y++;_4.add({subscriptionId:_5,target:_2,callback:_3});return _5}
,isc.A.unsubscribe=function(_1,_2){var _3=this.getSubscribers(_1);_3.remove(_3.find("subscriptionId",_2))}
,isc.A.publish=function(_1,_2){var _3=this.getSubscribers(_1).duplicate();for(var i=0;i<_3.length;i++){isc.Class.fireCallback(_3[i].callback,"data",[_2],_3[i].target)}}
);isc.B._maxIndex=isc.C+4;isc.ClassFactory.defineClass("Page");isc.A=isc.Page;isc.A.$hi=[];isc.A.$hj=false;isc.A.defaultUnsupportedBrowserURL="[SKIN]/unsupported_browser.html";isc.A.$hk={};isc.A.$hl=["http://","https://","file://","mailto:","app-resource:","data:"];isc.A.textDirection=null;isc.A.LTR="ltr";isc.A.RTL="rtl";isc.A=isc.Page;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$hm="[SKIN]";isc.A.$hn="[SKIN]/";isc.A.$ho="[";isc.A.$hp="./";isc.A.$hq="..";isc.A.leaveScrollbarGap=isc.Browser.isMoz&&isc.Browser.geckoVersion<20051107;isc.A.getWidth=(isc.Browser.isNS?function(_1,_2){if(!_1)_1=window;if(isc.Browser.isMoz&&_1==window&&!_2){if(this.width!=null){return this.width-(this.leaveScrollbarGap?(isc.Element?isc.Element.getNativeScrollbarSize():16):0)}
this.logInfo("NOTE: isc.Page.getWidth() unable to determine page width.  Returning 500","sizing");return 500}else{var _3=!isc.Browser.isStrict&&!this.leaveScrollbarGap&&isc.Browser.geckoVersion>=20051111&&_1.document.body!=null,_4;if(_3){_4=_1.document.body.clientWidth}
if(_4==null||_4==0){_4=_1.innerWidth}
if(_1==window)this.width=_4;return _4}}:function(_1){if(!_1)_1=window;var _2=_1.document.body;if(isc.Browser.isStrict&&!isc.Browser.isOpera)
_2=_1.document.documentElement;if(_2){return _2.clientWidth}else{if(!isc.Page.isLoaded()){isc.Page.setEvent("load","isc.EH.$hr()",isc.Page.FIRE_ONCE)}
this.logWarn("NOTE: isc.Page.getWidth() called before <BODY> tag was written out -- "+"value cannot be determined.  Returning 500");return 500}});isc.A.getHeight=(isc.Browser.isNS?function(_1,_2){if(!_1)_1=window;if(isc.Browser.isMoz&&_1==window&&!_2){if(this.height!=null)return this.height;return 500}else{var _3=!isc.Browser.isStrict&&isc.Browser.geckoVersion>=20051111&&_1.document.body!=null,_4;if(_3){_4=_1.document.body.clientHeight}
if(_4==null||_4==0){_4=_1.innerHeight}
if(_1==window)this.height=_4;return _4}}:function(_1){if(!_1)_1=window;var _2=_1.document.body;if(isc.Browser.isStrict&&!isc.Browser.isOpera)
_2=_1.document.documentElement;if(_2){return _2.clientHeight}else{this.logWarn("NOTE: isc.Page.getHeight() called before <BODY> tag was written out -- value cannot be determined.  Returning 500");return 500}});isc.A.getScrollHeight=(isc.Browser.isNS?function(_1){var _1=_1||document;var _2=_1.body.scrollHeight;if(isc.isA.Number(_2))return _2}:function(_1){var _1=_1||document;if(_1==null||_1.body==null)return 800;if(isc.Browser.version>=6){return Math.max(_1.body.scrollHeight,_1.documentElement.clientHeight)}
return _1.body.scrollHeight});isc.A.getScrollLeft=(isc.Browser.isNS?function(){return window.pageXOffset}:function(){if(document==null||document.body==null)return 0;return(isc.Browser.isStrict?document.documentElement.scrollLeft:document.body.scrollLeft)});isc.A.getScrollTop=(isc.Browser.isNS?function(){return window.pageYOffset}:function(){if(document==null||document.body==null)return 0;return(isc.Browser.isStrict?document.documentElement.scrollTop:document.body.scrollTop)});isc.A.unsupportedBrowserAction="continue";isc.B.push(isc.A.finishedLoading=function(){if(this.width==null||this.height==null)isc.EH.$hr()
isc.Page.$hj=true;isc.Log.logInfo("isc.Page is loaded");isc.EH.startIdleTimer();if(isc.Browser.isSafari)isc.Canvas.clearCSSCaches();if(!window.suppressAutoLogWindow){var _1=isc.LogViewer.getLogCookie();if(_1!=null&&_1.keepOpen){isc.Timer.setTimeout("isc.Log.show(true)",1000)}}
if(isc.Page.pollPageSize)isc.EH.$hr()}
,isc.A.isLoaded=function(){return this.$hj}
,isc.A.getBlankFrameURL=function(){if(isc.Browser.isIE&&("https:"==window.location.protocol||document.domain!=location.hostname)){return this.getURL("[HELPERS]empty.html")}
return"about:blank"}
,isc.A.setTitle=function(_1){document.title=_1}
,isc.A.setDirectories=function(_1){if(_1==null){_1={imgDir:window.imgDir,isomorphicDir:(window.isomorphicDir?window.isomorphicDir:window.IsomorphicDir),isomorphicClientDir:window.isomorphicClientDir,isomorphicDocsDir:window.isomorphicDocsDir,skinDir:window.skinDir,helperDir:window.helperDir}}
this.$hs();this.setIsomorphicDir(_1.isomorphicDir);this.setIsomorphicClientDir(_1.isomorphicClientDir);this.setIsomorphicDocsDir(_1.isomorphicDocsDir);this.setAppImgDir(_1.imgDir);this.setSkinDir(_1.skinDir);this.setHelperDir(_1.helperDir)}
,isc.A.$hs=function(){var _1=window.location.href;if(_1.contains("?"))_1=_1.substring(0,_1.indexOf("?"));if(_1.contains("#"))_1=_1.substring(0,_1.indexOf("#"));if(_1.charAt(_1.length-1)!="/"){_1=_1.substring(0,_1.lastIndexOf("/")+1)}
this.$hk.APP=_1;if(this.logIsInfoEnabled()){this.logInfo("app dir is "+this.$hk.APP)}
this.setAppImgDir()}
,isc.A.getAppDir=function(){return this.$hk.APP}
,isc.A.setAppImgDir=function(_1){isc.Page.$hk.APPIMG=isc.Page.getURL(_1!=null?_1:"[APP]images/")}
,isc.A.getAppImgDir=function(_1){if(_1!=null&&(isc.startsWith(_1,isc.slash)||this.getProtocol(_1)!=isc.emptyString))
{return _1}
if(_1)return this.$hk.APPIMG+_1;else return this.$hk.APPIMG}
,isc.A.setAppFilesDir=function(_1){this.$hk.APPFILES=this.combineURLs(this.getAppDir(),_1)}
,isc.A.getAppFilesDir=function(_1){return this.$hk.APPFILES}
,isc.A.setIsomorphicDir=function(_1){this.$hk.ISOMORPHIC=this.combineURLs(this.getAppDir(),_1!=null?_1:"../isomorphic/");this.setIsomorphicClientDir();this.setIsomorphicDocsDir()}
,isc.A.getIsomorphicDir=function(){return this.$hk.ISOMORPHIC}
,isc.A.setSkinDir=function(_1){this.$hk.SKIN=this.combineURLs(this.getAppDir(),_1!=null?_1:"[ISOMORPHIC]/skins/standard/");this.$hk.SKINIMG=this.$hk.SKIN+"images/";if(isc.Canvas)isc.Canvas.$ht=isc.Canvas.$hu=null}
,isc.A.getSkinDir=function(){return this.$hk.SKIN}
,isc.A.getSkinImgDir=function(_1){if(_1==null)return this.$hk.SKINIMG;return this.combineURLs(this.$hk.SKIN,_1)}
,isc.A.setIsomorphicClientDir=function(_1){this.$hk.ISOMORPHIC_CLIENT=this.combineURLs(this.getAppDir(),_1!=null?_1:"[ISOMORPHIC]/system/");this.setSkinDir();this.setHelperDir()}
,isc.A.getIsomorphicClientDir=function(){return this.$hk.ISOMORPHIC_CLIENT}
,isc.A.setIsomorphicDocsDir=function(_1){this.$hk.ISOMORPHIC_DOCS=this.combineURLs(this.getAppDir(),_1!=null?_1:"[ISOMORPHIC]/system/reference/");this.setIsomorphicDocsSkinDir()}
,isc.A.getIsomorphicDocsDir=function(){return this.$hk.ISOMORPHIC_DOCS}
,isc.A.setIsomorphicDocsSkinDir=function(_1){this.$hk.ISO_DOCS_SKIN=this.combineURLs(this.getIsomorphicDocsDir(),_1!=null?_1:"skin/")}
,isc.A.getIsomorphicDocsSkinDir=function(){return this.$hk.ISO_DOCS_SKIN}
,isc.A.setHelperDir=function(_1){this.$hk.HELPERS=this.combineURLs(this.getAppDir(),_1!=null?_1:"[ISOMORPHIC_CLIENT]/helpers/")}
,isc.A.getHelperDir=function(){return isc.Page.$hk.HELPERS}
,isc.A.getImgURL=function(_1,_2){var _3;if(isc.startsWith(_1,this.$hm)){_3=isc.Page.getSkinImgDir(_2);var _4=isc.startsWith(_1,this.$hn)?7:6;_1=_1.substring(_4)}else{_3=isc.Page.getAppImgDir(_2)}
return isc.Page.combineURLs(_3,_1)}
,isc.A.getURL=function(_1){if(isc.startsWith(_1,this.$ho)){var _2=_1.indexOf("]");if(_2>0){var _3=_1.substring(1,_2).toUpperCase(),_4=isc.Page.$hk[_3];if(_4!=null){_1=isc.Page.combineURLs(_4,_1.substring(_2+(_1.charAt(_2+1)!="/"?1:2)))}else{this.logDebug("getURL("+_1+"): couldn't find cached directory "+_3)}}else{this.logDebug("getURL("+_1+"): didn't find matching ']' in URL")}}
return _1}
,isc.A.combineURLs=function(_1,_2){if(!isc.isA.String(_2))return _1;if(isc.startsWith(_2,this.$ho)){return this.getURL(_2)}
var _3=isc.$ad;if(_1==null||_1==_3||isc.Page.getProtocol(_2)!=_3){return _2}
var _4=isc.slash;var _5=isc.Page.getProtocol(_1);if(isc.startsWith(_2,_4)){if(isc.isAn.emptyString(_5)){_1=isc.emptyString}else if(_1.indexOf(_4,_5.length)!=-1){_1=_1.substring(0,_1.indexOf(_4,_5.length))}}else if(_2.indexOf(this.$hp)>-1){_1=_1.substring(_5.length,_1.length-1);var _6=_1.split(_4),_7=_2.split(_4);var _8=_6[0];_6.shift();while(_7[0]==isc.dot||_7[0]==this.$hq){if(_7[0]==isc.dot){_7.shift();continue}
_7.shift();if(_6.length==0)break;_6.pop()}
_1=_5+_8+_4;if(_6.length>0)_1+=_6.join(_4)+_4;_2=_7.join(_4)}
return _1+_2}
,isc.A.getProtocol=function(_1){for(var i=0;i<isc.Page.$hl.length;i++){if(isc.startsWith(_1,isc.Page.$hl[i]))return isc.Page.$hl[i]}
return isc.$ad}
,isc.A.isXHTML=function(){if(this.$hv!=null)return this.$hv;if(isc.Browser.isIE)return false;var _1=this.getWindow();return(this.$hv=(this.getDocument().constructor==this.getWindow().XMLDocument))}
,isc.A.isRTL=function(){return this.getTextDirection()==isc.Canvas.RTL}
,isc.A.getTextDirection=function(){if(this.textDirection==null){var _1=document.documentElement,_2=document.body,_3=(_2?_2.dir:null)||_1.dir;if(_3)return(this.textDirection=_3.toLowerCase());else if(_2)return(this.textDirection=this.LTR);return this.LTR}
return this.textDirection}
,isc.A.loadStyleSheet=function(_1,_2,_3){var _4=isc.Page.getURL(_1);var _5="<link rel='stylesheet' type='text/css' href=\""+_4+"\"\/>";if(_2==null)_2=window;if(isc.Page.isLoaded()&&_2==window){if(isc.FileLoader){var _6=isc.FileLoader.$hw;if(_6!=null){for(var i=0;i<_6.length;i++){if(_4.indexOf(_6[i])!=-1){this.logDebug("skin "+_6[i]+" already loaded by FileLoader - not loading css file");return}}}
isc.FileLoader.loadCSSFile(_4,_3)}else{this.logWarn("isc.Page.loadStylesheet('"+_1+"') called after page load.  Stylesheet not loaded.")}}else{if(this.isXHTML()){var _8=this.getDocument(),_9=_8.documentElement.firstChild,_10=_8.createElementNS(_8.documentElement.namespaceURI,"link");_10.rel="stylesheet";_10.type="text/css";_10.href=_4;_9.appendChild(_10);this.logWarn("added stylesheet DOM style")}else{_2.document.write(_5)}}}
,isc.A.resizeTo=function(_1,_2){window.resizeTo(_1,_2)}
,isc.A.moveTo=function(_1,_2){window.moveTo(_1,_2)}
,isc.A.scrollTo=function(_1,_2){window.scroll(_1,_2)}
,isc.A.getScrollWidth=function(_1){var _1=_1||document;if(_1==null||_1.body==null)return 500;if(isc.Browser.isIE&&isc.Browser.version>=6){return Math.max(_1.body.scrollWidth,_1.documentElement.clientWidth)}
return _1.body.scrollWidth}
,isc.A.getScreenWidth=function(){return screen.width}
,isc.A.getScreenHeight=function(){return screen.height}
,isc.A.getWindowRect=function(_1){if(!_1)_1=window;return{left:(isc.Browser.isIE||isc.Browser.isOpera?_1.screenLeft:_1.screenX),top:(isc.Browser.isIE||isc.Browser.isOpera?_1.screenTop:_1.screenY),width:isc.Page.getWidth(_1),height:isc.Page.getHeight(_1)}}
,isc.A.setUnloadMessage=function(_1){if(_1==null)window.onbeforeunload=null;else window.onbeforeunload=function(){return _1}}
,isc.A.goBack=function(){if(history.length==0&&window.opener){window.close()}else{history.back()}}
,isc.A.print=function(_1){if(!_1)_1=window;if(_1.print){_1.print()}else{var _2=_1.document;if(!_2||!_2.body){this.logError("isc.Page.print() called on a window that doesn't have a document.body defined.  Exiting.");return}
if(isc.Browser.isWin){_2.body.insertAdjacentHTML('beforeEnd','<OBJECT ID="printControl" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>');var _3=_2.all.printControl;if(!_3){this.logError("isc.Page.print() couldn't create or find print control.  Exiting.");return}
_3.ExecWB(6,1);_3.outerHTML=""}else{alert("Choose 'Print...' from the File menu to print this page.")}}}
,isc.A.observe=function(_1,_2,_3){var _4=isc.Class.create();return _4.observe(_1,_2,_3)}
,isc.A.waitFor=function(_1,_2,_3,_4,_5){var _6=isc.Class.create({$545:_1,$546:_2,$547:_3,_fired:function(_8){if(this.$59i){isc.Timer.clear(this.$59i)}
this.ignore(this.$545,this.$546);this.fireCallback(this.$547,"observed",[_8]);this.destroy()},$59j:function(){this.ignore(this.$545,this.$546);this.fireCallback(this.$59k);this.destroy()}});isc.ClassFactory.addGlobalID(_6);var _7=_6.observe(_1,_2,_6.getID()+"._fired(observed)");if(!_7)_6.destroy();if(_4&&_5){_6.$59k=_5;_6.$59i=isc.Timer.setTimeout(function(){_6.$59j()},_4)}
return _7}
,isc.A.waitForMultiple=function(_1,_2,_3,_4){var _5=true;var _6=isc.Class.create({$59l:_1,$59m:[],$547:_2,$59n:function(_9){this.$59m.remove(_9);if(this.$59m.isEmpty()){if(this.$59i){isc.Timer.clear(this.$59i)}
this.fireCallback(this.$547);this.destroy()}},$59j:function(){var _7=this.$59m;for(var i=0;i<_7.length;i++){_7[i].ignore(_7[i].$545,_7[i].$546);_7[i].destroy()}
this.fireCallback(this.$59k);this.destroy()}});for(var i=0;i<_1.length;i++){var _9=isc.Class.create({$545:_1[i].object,$546:_1[i].method,$59o:_6,_fired:function(_11){this.ignore(this.$545,this.$546);this.$59o.$59n(this);this.destroy()}});isc.ClassFactory.addGlobalID(_9);var _10=_9.observe(_1[i].object,_1[i].method,_9.getID()+"._fired(observed)");if(_10){_6.$59m.add(_9)}else{_9.destroy();_5=false}}
if(_3&&_4){_6.$59k=_4;_6.$59i=isc.Timer.setTimeout(function(){_6.$59j()},_3)}
return _5}
,isc.A.checkBrowserAndRedirect=function(_1){if(!isc.Browser.isSupported){if(isc.Log){isc.Log.logWarn("Unsupported browser detected - userAgent:"+navigator.userAgent)}
if(this.unsupportedBrowserAction=="continue")return;var _2=this.unsupportedBrowserAction=="confirm"&&confirm(this.getUnsupportedBrowserPromptString())
if(_2)return;if(_1==null)_1=isc.Page.defaultUnsupportedBrowserURL;var _3=true;window.location.replace(isc.Page.getURL(_1))}}
,isc.A.getUnsupportedBrowserPromptString=function(){var _1="This page uses the Isomorphic SmartClient web presentation layer "+"(Version"+isc.version+" - "+isc.buildDate+"). The web browser you are using is not supported by this version of SmartClient"+" and you may encounter errors on this page. Would you like to continue anyway?\n\n"+"(Reported userAgent string for this browser:"+navigator.userAgent+")";return _1}
);isc.B._maxIndex=isc.C+47;if(isc.Page.isXHTML())isc.nbsp=isc.xnbsp;isc.Page.setDirectories();if(isc.Browser.isMoz){isc.Page.getWidth(null,true);isc.Page.getHeight(null,true)}
isc.addGlobal("Params",function(_1){if(!_1)_1=window;var _2=isc.isA.String(_1)?_1:_1.location.href;var _3=_2.indexOf("?"),_4=_2.indexOf("#");if(_4<0||_4<_3)_4=_2.length;if(_3!=-1){var _5=_2.substring(_3+1,_4).split("&");for(var i=0,_7,_8;i<_5.length;i++){_7=_5[i];if(!_7)continue;_8=_7.indexOf("=");this[_7.substring(0,_8)]=unescape(_7.substring(_8+1))}}})
isc.params=new isc.Params();isc.getParams=function(_1){return new isc.Params(_1)}
isc.ClassFactory.defineClass("Comm");isc.A=isc.Comm;isc.A.sendMethod="POST";isc.A.$hz=0;isc.A=isc.Comm;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.xmlHttpConstructors=["MSXML2.XMLHTTP","Microsoft.XMLHTTP","MSXML.XMLHTTP","MSXML3.XMLHTTP"];isc.A.$50c=[];isc.B.push(isc.A.$h0=function(_1,_2){isc.EH.$h1("XRP");isc.Class.fireCallback(_2,"xmlHttpRequest",[_1],null,true);isc.EH.$h2()}
,isc.A.$h3=function(){return function(){var _1=arguments.callee.request;if(!_1)return;if(_1.readyState!=4)return;arguments.callee.request=null;isc.Timer.setTimeout({target:isc.Comm,methodName:"$h0",args:[_1,arguments.callee.callback]},0)}}
,isc.A.createXMLHttpRequest=function(){if(isc.Browser.isIE){var _1;if(this.preferNativeXMLHttpRequest){_1=this.getNativeRequest();if(!_1)_1=this.getActiveXRequest()}else{_1=this.getActiveXRequest();if(!_1)_1=this.getNativeRequest()}
if(!_1)isc.rpc.logWarn("Couldn't create XMLHttpRequest");return _1}else{return new XMLHttpRequest()}}
,isc.A.getNativeRequest=function(){var _1;if(isc.Browser.version>=7){isc.rpc.logDebug("Using native XMLHttpRequest");_1=new XMLHttpRequest()}
return _1}
,isc.A.getActiveXRequest=function(){var _1;if(!this.$h4){for(var i=0;i<this.xmlHttpConstructors.length;i++){try{var _3=this.xmlHttpConstructors[i];_1=new ActiveXObject(_3);if(_1){this.$h4=_3;break}}catch(e){}}}else{_1=new ActiveXObject(this.$h4)}
if(_1)isc.rpc.logDebug("Using ActiveX XMLHttpRequest via constructor: "+this.$h4);return _1}
,isc.A.sendScriptInclude=function(_1){var _2=_1.URL,_3=_1.fields,_4=_1.data,_5=_1.callbackParam,_6=_1.transaction;var _7="_scriptIncludeReply_"+_6.transactionNum;this[_7]=function(){var _8=arguments.length==1?arguments[0]:[];if(arguments.length>1){for(var i=0;i<arguments.length;i++)_8[i]=arguments[i]}
isc.Comm.performScriptIncludeReply(_6.transactionNum,_8)}
var _10="isc.Comm."+_7;var _11={};_11[_5?_5:"callback"]=_10;_2=isc.rpc.addParamsToURL(_2,_3);_2=isc.rpc.addParamsToURL(_2,_11);if(_6)_6.mergedActionURL=_2;isc.rpc.logInfo("scriptInclude call to: "+_2);this.$50c[_6.transactionNum]=_6.callback;var _12=this.getDocument(),_13=this.getDocumentBody(),_14=_12.createElement("script");_14.src=_2;_13.appendChild(_14)}
,isc.A.performScriptIncludeReply=function(_1,_2){delete this["_scriptIncludeReply_"+_1];var _3=this.$50c[_1];delete this.$50c[_1];this.logDebug("scriptInclude reply for transactionNum: "+_1+", data: "+this.echoLeaf(_2),"xmlBinding");this.fireCallback(_3,"transactionNum,results,wd",[_1,_2])}
,isc.A.sendXmlHttpRequest=function(_1){var _2=_1.URL,_3=_1.fields,_4=_1.httpMethod,_5=_1.contentType,_6=_1.httpHeaders,_7=_1.data,_8=_1.transaction,_9=_1.blocking!=null?_1.blocking:false;if(_1.useSimpleHttp){_8.$387=true}else{this.addTransactionToFields(_1)}
this.$50c[_8.transactionNum]=_8.callback;var _10="isc.Comm.performXmlTransactionReply("+_8.transactionNum+", xmlHttpRequest)";if(!_4)_4="POST";var _11=this.createXMLHttpRequest();var _12;if(isc.Browser.isIE){_12=this.$h3();_12.request=_11;_12.callback=_10}else{_12=function(){if(_11.readyState!=4)return;isc.Comm.$h0(_11,_10)}}
_11.onreadystatechange=_12;if(isc.rpc.logIsDebugEnabled()){this.lastXmlHttpRequest=_11}
if(_4=="POST"||_4=="PUT"){if(_7){_5=_5||"text/xml";_2=isc.rpc.addParamsToURL(_2,_3)}else{_5=_5||"application/x-www-form-urlencoded; charset=UTF-8";_7=isc.SB.create();var _13=true;for(var _14 in _3){if(!_13)_7.append("&");var _15=_3[_14];_7.append(isc.rpc.encodeParameter(_14,_15));_13=false}
_7=_7.toString()}
if(isc.rpc.logIsDebugEnabled()){isc.rpc.logDebug("XMLHttpRequest POST to "+_2+" contentType: "+_5+" with body -->"+decodeURIComponent(_7)+"<--")}
_11.open(_4,_2,!_9);_11.setRequestHeader("Content-Type",_5);this.$h5(_11,_6);if(_8){_8.xhrHeaders=_6;_8.xhrData=_7}
if(_7!=null&&!isc.isA.String(_7)){this.logWarn("Non-string data object passed to sendXML as request.data:"+this.echo(_7)+" attempting to convert to a string.");_7=_7.toString?_7.toString():""+_7}
_11.send(_7)}else{var _16=isc.rpc.addParamsToURL(_2,_3);_11.open(_4,_16,!_9);if(_1.bypassCache)
_11.setRequestHeader("If-Modified-Since",new Date(0));this.$h5(_11,_6);if(isc.rpc.logIsDebugEnabled()){isc.rpc.logDebug("XMLHttpRequest GET from "+_2+" with fields: "+isc.Log.echoAll(_3)+" full URL string: "+_16)}
_11.send(null)}
return _11}
,isc.A.addTransactionToFields=function(_1){var _2=_1.fields
_2=isc.addProperties(_2,{_transaction:isc.RPCManager.serializeTransaction(_1.transaction),protocolVersion:"1.0"})}
,isc.A.performXmlTransactionReply=function(_1,_2){var _3=this.$50c[_1]
delete this.$50c[_1];this.fireCallback(_3,"transactionNum,results,wd",[_1,_2])}
,isc.A.$h5=function(_1,_2){if(_2==null)return;for(var _3 in _2){var _4=_2[_3];if(_4!=null)_1.setRequestHeader(_3,_4)}}
);isc.B._maxIndex=isc.C+11;isc.ClassFactory.defineClass("HiddenFrame");isc.A=isc.HiddenFrame;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A._stats={draws:0,destroys:0};isc.A.$h6=[];isc.B.push(isc.A.$h7=function(){if(isc.Browser.isMoz)this.delayCall("$h8")}
,isc.A.$h8=function(){var _1=isc.HiddenFrame.create();_1.draw();_1.destroy()}
);isc.B._maxIndex=isc.C+2;isc.A=isc.HiddenFrame.getPrototype();isc.A.text="&nbsp;";isc.A._generated=true;isc.A.$h9=[];isc.A.pollInterval=100;isc.A=isc.HiddenFrame.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.init=function(){isc.ClassFactory.addGlobalID(this);isc.HiddenFrame.$h6.add(this)}
,isc.A.getID=function(){return this.ID}
,isc.A.draw=function(_1){if(this.isDrawn()){if(_1!=null)this.fireCallback(_1);return this}
if(!this.$ia()){if(!this.$ib){isc.Page.setEvent("load",this.getID()+".draw()",isc.Page.FIRE_ONCE);this.$ib=true}
if(_1!=null){this.$h9[this.$h9.length]=_1}}else{this.$ic();for(var i=0;i<this.$h9.length;i++){this.fireCallback(this.$h9[i])}
if(_1!=null)this.fireCallback(_1)}
return this}
,isc.A.$ic=function(){var _1=this.getDocument().body;var _2="<IFRAME ID="+this.getName()+" NAME="+this.getName()+" SRC=\""+(this.location?this.location:isc.Page.getBlankFrameURL())+"\" STYLE='position:absolute;visibility:hidden;top:-1000px'"+"></IFRAME>";isc.Element.createAbsoluteElement(_2);if(!(isc.Browser.isIE&&isc.Browser.minorVersion<5.5)){this.$id=isc.Element.get(this.getName());if(!isc.Browser.isSafari)this.$ie=this.$id.contentWindow}
if(this.$ie==null){for(var i=0;i<window.frames.length;i++){var _4=window.frames[i];if(_4.name==this.getName()){this.$ie=_4;break}}}
this.$if=true;return this.$ie}
,isc.A.isDrawn=function(){return this.$if}
,isc.A.$ia=function(){return isc.Page.isLoaded()||!isc.Browser.isMoz}
,isc.A.destroy=function(){if(isc.isA.Canvas(this.$ig)){this.$ig.destroy();delete this.$ig;isc.HiddenFrame._stats.destroys++}
if(window[this.ID])window[this.ID]=null;isc.HiddenFrame.$h6.remove(this);var _1=this.getHandle();if(!_1)return;if(isc.Browser.isSafari)_1.location=isc.Page.getBlankFrameURL();var _2=isc.eval("try{this.getHandle().name;true}catch(e){false}");if(!_2){this.logDebug("Can't dispose of "+this.ID+" - property access denied.");return}
if(isc.Browser.isIE){if(document.domain==location.hostname){_1.document.open();_1.document.write("");_1.document.close()}else{_1.document.location.href=isc.Page.getBlankFrameURL()}}
if(this.$id!=null){isc.Element.clear(this.$id);this.$id=null}
if(this.$ie!=null)this.$ie=null;this.logDebug("Destroyed "+this.ID)}
,isc.A.getHandle=function(){return this.$ie}
,isc.A.getName=function(){return this.getID()}
,isc.A.getFrameDocument=function(){var _1=(isc.Browser.isSafari&&isc.Browser.safariVersion<523.129?this.$id:this.$ie);try{return _1.document}catch(e){return null}}
,isc.A.getForm=function(_1){if(_1==null)_1=0;if(isc.Browser.isMoz){return this.getFrameDocument().getElementById(_1)}else{return this.getFrameDocument().forms[_1]}}
,isc.A.setInnerHTML=function(_1){if(_1)this.text=_1;var _2=this.getFrameDocument();if(isc.Browser.isMoz){var _3=_2.createRange();_3.setStartBefore(_2.body);var _4=_3.createContextualFragment(this.text);_2.body.appendChild(_4)}else{_2.open();_2.write(this.text);_2.close()}}
,isc.A.sendForm=function(_1,_2,_3){if(_1!=null)this.formHTML=_1;if(_2!=null)this.formName=_2;if(_3!=null)this.fieldList=_3;if(!this.$ia()){this.logDebug("delaying comm until page load");isc.Page.setEvent("load",this.getID()+".sendForm()",isc.Page.FIRE_ONCE);return}
this.draw();this.sendData()}
,isc.A.sendData=function(){if(this.getFrameDocument()==null)
{this.delayCall("sendData",[],10);this.logDebug(this.getID()+": sendData() - document not ready - deferring.");return}
if(isc.isA.Canvas(this.$ig))this.$ig.destroy();this.$ig=isc.Canvas.create({autoDraw:true,ID:this.getID()+"$ig",visibility:"hidden",top:-9999,width:1,height:1,contents:this.formHTML,_generated:true,$ih:true});isc.HiddenFrame._stats.draws++;var _1=isc.Element.get(this.formName);for(var _2 in this.fieldList){if(this.fieldList[_2]!=null)_1.elements[_2].value=this.fieldList[_2]}
if(_1){_1.submit();this.logInfo("Form submitted to server");if(this.callback){this.convertToMethod("callback");this.delayCall("checkLoaded",[],this.pollInterval)}}else{this.logWarn("couldn't get handle to comm form")}}
,isc.A.checkLoaded=function(){var _1=this.getHandle();if(_1&&_1[this.resultVarName]){if(this.callback)this.callback(_1)}else{this.delayCall("checkLoaded",[],this.pollInterval)}}
);isc.B._maxIndex=isc.C+15;isc.HiddenFrame.registerStringMethods({callback:"frame"});isc.ClassFactory.defineClass("Timer");isc.A=isc.Timer;isc.A.$ii=null;isc.A.listEvent={action:null,iterationInterval:null,iterationsRemaining:0,$ij:null,$ik:null};isc.A.MSEC=1;isc.A.SEC=1000;isc.A.MIN=60000;isc.A.HOUR=3600000;isc.A.DEFAULT_TIMEOUT_LENGTH=100;isc.A.$il=null;isc.A=isc.Timer;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$im=["isc.Timer.$in('",null,"')"];isc.A.$io=0;isc.A.$ip={};isc.A.$iq="TMR";isc.A.$612=5000;isc.B.push(isc.A.setTimeout=function(_1,_2,_3){if(_1==null)return;if(_1.action!=null){_2=_1.delay;_3=_1.units;_1=_1.action}
if(_3==null)_3=isc.Timer.MSEC;if(_2==null)_2=isc.Timer.DEFAULT_TIMEOUT_LENGTH;_2=_2*_3;var _4="$ir"+this.$io++;this.$im[1]=_4;this[_4]=_1;var _5=this.$im.join(isc.emptyString);var _6=setTimeout(_5,_2);this.$ip[_6]=_4;return _6}
,isc.A.$in=function(_1){if(isc.$611!=null){if(this.logIsInfoEnabled()){this.logInfo("timer ID:"+_1+" fired during eval. Delaying until this "+"thread completes")}
if(!this.$613)this.$613=isc.timeStamp();if((isc.timeStamp()-this.$613)>this.$612){this.logWarn("timer ID:"+_1+" fired during eval thread lasting more than "+this.$612+"ms. Thread may have caused an "+"error and failed to complete. Allowing delayed action to fire.");delete isc.$611}else{this.$im[1]=_1;var _2=this.$im.join(isc.emptyString);var _3=setTimeout(_2,0);if(!this.$614)this.$614={};this.$614[_1]=_3;return}}
delete this.$613;var _4=this[_1];delete this[_1];var _5=this.$ip;for(var i in _5){if(_5[i]=_1){delete _5[i];break}}
var _7=this.$614;if(_7){for(var i in _7){if(_7[i]=_1){delete _7[i];break}}}
if(_4==null)return;isc.EH.$h1(this.$iq);this.fireCallback(_4,null,null,null,true);isc.EH.$h2()}
,isc.A.clear=function(_1){if(isc.isAn.Array(_1))
for(var i=0;i<_1.length;i++)this.clear(_1[i]);else{var _3=this.$ip[_1];delete this[_3]
delete this.$ip[_1];if(this.$614&&this.$614[_3]){_1=this.$614[_3];delete this.$614[_3]}
clearTimeout(_1)}
return null}
,isc.A.clearTimeout=function(_1){return this.clear(_1)}
);isc.B._maxIndex=isc.C+4;isc.A=isc.Page;isc.A.$is={};isc.A.$it=0;isc.A.FIRE_ONCE="once";isc.A.$iu={};isc.A=isc.Page;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$cp="ID";isc.B.push(isc.A.setEvent=function(_1,_2,_3,_4){if(isc.isA.String(_2)){if(_1==isc.EH.LOAD||_1==isc.EH.IDLE||_1==isc.EH.RESIZE)
{_2=new Function("target,eventInfo",_2)}else{_2=isc.Func.expressionToFunction("target,eventInfo",_2)}}
if(this.logIsDebugEnabled()){this.logDebug("setEvent("+_1+"): action => "+(isc.isA.Function(_2)?isc.Func.getShortBody(_2):_2))}
var _5=isc.Page.$it++,_6={action:_2,functionName:_4,fireStyle:_3,ID:_5};var _7=this.$is;if(_7[_1]==null)_7[_1]=[];_7[_1].add(_6);if(_1==isc.EH.IDLE){isc.EventHandler.startIdleTimer()}
return _5}
,isc.A.clearEvent=function(_1,_2){if(_2==null){this.$is[_1]=[]}else{if(this.$iv==_1){var _3=this.$is[_1],_4=_3?_3.findIndex(this.$cp,_2):-1;if(_4!=-1)_3[_4]=null}else{if(this.$is[_1])
this.$is[_1].removeWhere(this.$cp,_2)}}}
,isc.A.$iw=function(_1){var _2=this.$ix=this.$ix||{};if(!_2[_1]){_2[_1]="page"+_1.charAt(0).toUpperCase()+_1.substring(1)}
return _2[_1]}
,isc.A.handleEvent=function(_1,_2,_3){if(_2==isc.EH.UNLOAD)isc.Canvas.$iy();var _4=isc.Page.$is[_2];if(_4==null||_4.length==0)return true;var _5=this.$iw(_2);var _6=true;this.$iv=_2;for(var i=0,_8=_4.length;_6&&(i<_8);i++){var _9=_4[i];if(!_9)continue;if(_9.fireStyle==isc.Page.FIRE_ONCE)_4[i]=null;if(this.logIsDebugEnabled()){this.logDebug("handleEvent("+_2+"): firing action => "+isc.Func.getShortBody(_9.action))}
if(isc.isA.Function(_9.action)){_6=(_9.action(_1,_3)!=false)}else{var _10=_9.action;if(_10.destroyed){_4[i]=null;continue}
var _11=_9.functionName||_5;if(isc.isA.Function(_10[_11])){_6=(_10[_11](_1,_3)!=false)}}}
this.$iv=null;this.$is[_2].removeEmpty();return _6}
,isc.A.actionsArePendingForEvent=function(_1){return(this.$is[_1]&&this.$is[_1].length!=0)}
,isc.A.registerKey=function(_1,_2,_3){if(_1==null||_2==null)return;var _4=_1,_5,_6,_7,_8;if(isc.isAn.Object(_1)){_4=_1.keyName;_5=_1.ctrlKey;_6=_1.shiftKey;_7=_1.altKey;_8=_1.metaKey}
if(_4.length==1)_4=_4.toUpperCase();var _9=false;for(var i in isc.EH.$iz){if(isc.EH.$iz[i]==_4){_9=true;break}}
if(!_9){this.logWarn("Page.registerKey() passed unrecognized key name '"+_1+"'. Not registering","events");return}
var _11=this.$iu;if(!_11[_4])_11[_4]=[];_11[_4].add({target:_3,action:_2,ctrlKey:_5,shiftKey:_6,altKey:_7,metaKey:_8})}
,isc.A.unregisterKey=function(_1,_2){if(!this.$iu[_1]){isc.Log.logInfo("Page.unregisterKey(): No events registered for key "+isc.Log.echo(_1)+".","events");return false}
this.$iu[_1].removeWhere("target",_2)}
,isc.A.handleKeyPress=function(){var _1=isc.EH,_2=_1.getKey(),_3=this.$iu;if(!_3[_2])return true;var _4=_3[_2],_5=_4.duplicate(),_6=_5.length,_7=true;for(var i=0;i<_6;i++){var _9=_5[i];if(!_4.contains(_9))continue;if(_9.ctrlKey!=null&&_9.ctrlKey!=_1.ctrlKeyDown())continue;if(_9.altKey!=null&&_9.altKey!=_1.altKeyDown())continue;if(_9.shiftKey!=null&&_9.shiftKey!=_1.shiftKeyDown())continue;if(_9.metaKey!=null&&_9.metaKey!=_1.metaKeyDown())continue;if(_9.action!=null&&!isc.isA.Function(_9.action)){isc.Func.replaceWithMethod(_9,"action","key,target")}
_7=((_9.action(_2,_9.target)!=false)&&_7)}
return _7}
);isc.B._maxIndex=isc.C+8;isc.ClassFactory.defineClass("EventHandler");isc.EH=isc.Event=isc.EventHandler;isc.A=isc.EventHandler;isc.A.lastEvent={};isc.A.$i0=[];isc.A.$i1=[];isc.A.passThroughEvents=true;isc.A.maskNativeTargets=true;isc.A.STILL_DOWN_DELAY=100;isc.A.DOUBLE_CLICK_DELAY=500;isc.A.IDLE_DELAY=10;isc.A.STOP_BUBBLING="***STOP***";isc.A.ALL_EDGES=["T","L","B","R","TL","TR","BL","BR"];isc.A.eventTypes={MOUSE_DOWN:"mouseDown",RIGHT_MOUSE_DOWN:"rightMouseDown",MOUSE_MOVE:"mouseMove",MOUSE_UP:"mouseUp",SHOW_CONTEXT_MENU:"showContextMenu",CLICK:"click",DOUBLE_CLICK:"doubleClick",MOUSE_OUT:"mouseOut",MOUSE_STILL_DOWN:"mouseStillDown",MOUSE_OVER:"mouseOver",SET_DRAG_TRACKER:"setDragTracker",GET_DRAG_DATA:"getDragData",RELEASE_DRAG_DATA:"releaseDragData",DRAG_START:"dragStart",DRAG_STOP:"dragStop",DRAG_MOVE:"dragMove",DRAG_OUT:"dragOut",DRAG_REPOSITION_START:"dragRepositionStart",DRAG_REPOSITION_MOVE:"dragRepositionMove",DRAG_REPOSITION_STOP:"dragRepositionStop",DRAG_RESIZE_START:"dragResizeStart",DRAG_RESIZE_MOVE:"dragResizeMove",DRAG_RESIZE_STOP:"dragResizeStop",DROP_OVER:"dropOver",DROP_MOVE:"dropMove",DROP_OUT:"dropOut",DROP:"drop",KEY_DOWN:"keyDown",KEY_UP:"keyUp",KEY_PRESS:"keyPress",MOUSE_WHEEL:"mouseWheel",SELECT_START:"selectStart",SELECTION_CHANGE:"selectionChange",FOCUS_IN:"focusIn",FOCUS_OUT:"focusOut",IDLE:"idle",LOAD:"load",UNLOAD:"unload",RESIZE:"resize"};isc.A.$i2={mousemove:"mouseMove",mousedown:"mouseDown",mouseup:"mouseUp",mousewheel:"mouseWheel",selectionchange:"selectionChange",DOMMouseScroll:"mouseWheel",mouseMove:"mouseMove",mouseDown:"mouseDown",mouseUp:"mouseUp",mouseWheel:"mouseWheel",selectionstart:"selectionStart",selectionStart:"selectionStart",selectionchange:"selectionChange",selectionChange:"selectionChange"};isc.A.$i3="event,eventInfo";isc.A.DRAG_RESIZE="dragResize";isc.A.DRAG_REPOSITION="dragReposition";isc.A.DRAG="drag";isc.A.NONE="none";isc.A.TRACKER="tracker";isc.A.TARGET="target";isc.A.OUTLINE="outline";isc.A.INTERSECT_WITH_MOUSE="mouse";isc.A.INTERSECT_WITH_RECT="rect";isc.A.dragTargetShadowDepth=10;isc.A.$i4={A:true,AREA:true};isc.A.$i5={INPUT:true,TEXTAREA:true,SELECT:true,OPTION:true};isc.A.$i6="LABEL";isc.A.$i7={keydown:"keyDown",keyup:"keyUp",keypress:"keyPress"};isc.A.$i8={Backspace:8,Tab:9,Shift:16,Ctrl:17,Alt:18,Pause_Break:19,Caps_Lock:20,Page_Up:33,Page_Down:34,End:35,Home:36,Arrow_Left:37,Arrow_Up:38,Arrow_Right:39,Arrow_Down:40,Insert:45,Delete:46,Meta:91,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,Num_Lock:144,Scroll_Lock:145};isc.A.$iz={'0':'$i9','8':'Backspace','9':'Tab','13':'Enter','16':'Shift','17':'Ctrl','18':'Alt','19':'Pause_Break','20':'Caps_Lock','27':'Escape','32':'Space','33':'Page_Up','34':'Page_Down','35':'End','36':'Home','37':'Arrow_Left','38':'Arrow_Up','39':'Arrow_Right','40':'Arrow_Down','44':'Print_Screen','45':'Insert','46':'Delete','48':'0',"49":"1","50":"2","51":"3","52":"4","53":"5","54":"6","55":"7","56":"8","57":"9",'65':'A','66':'B','67':'C','68':'D','69':'E','70':'F','71':'G','72':'H','73':'I','74':'J','75':'K','76':'L','77':'M','78':'N','79':'O','80':'P','81':'Q','82':'R','83':'S','84':'T','85':'U','86':'V','87':'W','88':'X','89':'Y','90':'Z','91':'Meta','92':'Meta','93':'Menu','96':'0','97':'1','98':'2','99':'3','100':'4','101':'5','102':'6','103':'7','104':'8','105':'9','106':'*','107':'+','109':'-','110':'.','111':'/','112':'f1','113':'f2','114':'f3','115':'f4','116':'f5','117':'f6','118':'f7','119':'f8','120':'f9','121':'f10','122':'f11','123':'f12','144':'Num_Lock','145':'Scroll_Lock','160':'Shift','161':'Shift','162':'Ctrl','163':'Ctrl','164':'Alt','165':'Alt','186':';','187':'=','188':',','189':'-','190':'.','191':'/','192':'`','219':'[','220':'\\','221':']','222':"'"};isc.A.$ja={'8':'Backspace','9':'Tab','13':'Enter','27':'Escape','32':'Space','33':'1','34':"'",'35':'3','36':'4','37':'5','38':'7','39':"'",'40':'9','41':'0','42':'8','43':'=','44':',','45':'-','46':'.','47':'/','48':'0','49':'1','50':'2','51':'3','52':'4','53':'5','54':'6','55':'7','56':'8','57':'9','58':';','59':';','60':',','61':'=','62':'.','63':'/','64':'2','65':'A','66':'B','67':'C','68':'D','69':'E','70':'F','71':'G','72':'H','73':'I','74':'J','75':'K','76':'L','77':'M','78':'N','79':'O','80':'P','81':'Q','82':'R','83':'S','84':'T','85':'U','86':'V','87':'W','88':'X','89':'Y','90':'Z','91':'[','92':'\\','93':']','94':'6','95':'-','96':'`','97':'A','98':'B','99':'C','100':'D','101':'E','102':'F','103':'G','104':'H','105':'I','106':'J','107':'K','108':'L','109':'M','110':'N','111':'O','112':'P','113':'Q','114':'R','115':'S','116':'T','117':'U','118':'V','119':'W','120':'X','121':'Y','122':'Z','123':'[','124':'\\','125':']','126':'`'};isc.A.$jb={'3':"Enter",'25':"Tab",'63232':"Arrow_Up",'63233':"Arrow_Down",'63234':"Arrow_Left",'63235':"Arrow_Right",'64236':"f1",'64237':"f2",'64238':"f3",'64239':"f4",'64240':"f5",'64241':"f6",'64242':"f7",'64243':"f8",'64244':"f9",'64245':"f10",'64246':"f11",'63247':"f12",'63273':"Home",'63275':"End",'63276':"Page_Up",'63277':"Page_Down"};isc.A.$jc={};isc.A.dynamicBackMask=false;isc.A.alwaysBackMask=false;isc.A.dragTrackerDefaults={ID:"isc_dragTracker",width:10,height:10,offsetX:-10,offsetY:-10,autoDraw:false,visibility:"hidden",overflow:"visible",cursor:"arrow"};isc.EventHandler.addClassProperties(isc.EventHandler.eventTypes)
isc.A=isc.EventHandler;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$je="f10";isc.A.$20w="Escape";isc.A.$jf="Tab";isc.A.$jg="IMG";isc.A.$jh="progid:DXImageTransform.Microsoft.AlphaImageLoader";isc.A.$ji={};isc.A.$jj="BODY";isc.A.$jk="HTML";isc.A.$jl="eventProxy";isc.A.$jm="[object Text]";isc.A.$jn={autoDraw:false,$jo:true,$jp:false,overflow:"hidden",visibility:"hidden",$jq:false,getTarget:function(){return this.$jr},show:function(){var _1=this.masterElement;this.moveAbove(_1);return this.Super("show",arguments)}};isc.A.$js=isc.Browser.isIE?isc.undef:true;isc.A.$jt="handleNativeEvents";isc.A.$49r="APPLET";isc.A.$ju={mouseMove:true,mouseOver:true,mouseOut:true};isc.A.$41z="selectionChange";isc.A.$jv="$jw";isc.A.$jx=0;isc.A.$jy={load:"LOD",mousedown:"MDN",mouseup:"MUP",mousemove:"MMV",mouseout:"MOU",contextmenu:"CXT",keypress:"KPR",keydown:"KDN",keyup:"KUP",resize:"RSZ"};isc.A.$jz="nativeEvents";isc.A.$j0="event";isc.A.$j1=(isc.Browser.isMoz?"if(event.getPreventDefault&&event.getPreventDefault())return;":isc.Browser.isSafari?"if(event.returnValue==false)return;":"")+"var returnVal=arguments.callee.$ch.isc.EH.dispatch(arguments.callee.$j2,event);"+(!isc.Browser.isIE&&isc.Browser.isDOM?"if(returnVal==false)event.preventDefault();else if(returnVal==isc.EH.STOP_BUBBLING)event.stopPropogation();":"")+"return returnVal;";isc.A.$j3={};isc.A.$j4={onmousedown:"mousedown",onmouseup:"mouseup",onclick:"click",ondblclick:"dblclick",oncontextmenu:"contextmenu",onmousewheel:"mousewheel",onmouseover:"mouseover",onmouseout:"mouseout",onmousemove:"mousemove",onresize:"resize",onload:"load",onunload:"unload",onselecttext:"selecttext",onselectionchanged:"selectionchanged",onkeydown:"keydown",onkeyup:"keyup",onkeypress:"keypress"};isc.A.$649={};isc.A.getMouseEventProperties=(isc.Browser.isIE?function(_1){var _2=this.lastEvent;if(!_1)_1=this.getWindow().event;_2.DOMevent=_1;_2.eventType=this.$i2[_1.type];_2.y=parseInt(_1.clientY)+this.ns.Page.getScrollTop();_2.x=parseInt(_1.clientX);if(!isc.Page.isRTL()){_2.x+=this.ns.Page.getScrollLeft()}else{var _3=this.ns.Page.getScrollLeft();if(_3>0){var _4=(this.ns.Page.getScrollWidth()-this.ns.Page.getWidth());_2.x-=(_4-_3)}
_2.x-=15}
_2.nativeTarget=_1.srcElement;_2.target=this.getEventTargetCanvas(_1,_2.nativeTarget);var _5=_1.wheelDelta;if(_5!=null)_2.wheelDelta=-Math.round(_5/ 120);else _2.wheelDelta=null;_2.screenX=_1.screenX;_2.screenY=_1.screenY;_2.buttonNum=_1.button;_2.shiftKey=(_1.shiftKey==true);_2.ctrlKey=(_1.ctrlKey==true);_2.altKey=(_1.altKey==true);_2.metaKey=(_1.metaKey==true);return _2}:function(_1){var _2=this.lastEvent;_2.DOMevent=_1;_2.eventType=this.$i2[_1.type];if(isc.Browser.isSafari){var _3=isc.Browser.safariVersion>=523.12
_2.x=parseInt(_1.x);_2.y=parseInt(_1.y);if(_3){_2.x+=isc.Page.getScrollLeft();_2.y+=isc.Page.getScrollTop()}
if(_2.eventType!=this.MOUSE_WHEEL){var _3=true;_2.x=parseInt(_1.clientX)+(_3?isc.Page.getScrollLeft():0);_2.y=parseInt(_1.clientY)+(_3?isc.Page.getScrollTop():0)}}else{if(_2.eventType!=this.MOUSE_WHEEL){var _3=true;_2.x=parseInt(_1.clientX)+(_3?isc.Page.getScrollLeft():0);_2.y=parseInt(_1.clientY)+(_3?isc.Page.getScrollTop():0)}}
_2.nativeTarget=_1.target;_2.$j5=null;_2.target=this.getEventTargetCanvas(_1,_2.nativeTarget);_2.screenX=_1.screenX;_2.screenY=_1.screenY;if(_2.eventType==this.MOUSE_WHEEL){var _4=_1.wheelDelta,_5=_1.detail;if(_5==0||_5==null&&_4!=null){_2.wheelDelta=-Math.round(_4/ 120);if(!isc.isA.Number(_2.wheelDelta))_2.wheelDelta=null}else{if(isc.Canvas.useNativeWheelDelta&&_1.detail==_1.SCROLL_PAGE_UP){_2.wheelDelta=-Math.floor(_2.target.height/ isc.Canvas.scrollWheelDelta)}else if(isc.Canvas.useNativeWheelDelta&&_1.detail==_1.SCROLL_PAGE_DOWN){_2.wheelDelta=Math.floor(_2.target.height/ isc.Canvas.scrollWheelDelta)}else{var _6=_1.detail/ 3;if(!isc.isA.Number(_6))_6=0;if(_6>15||_6<-15)_6=(_6>0?1:-1);_2.wheelDelta=_6}}}else{_2.wheelDelta=null}
if(_2.eventType==isc.EH.MOUSE_MOVE){if(!this.$j6)_2.buttonNum=0}else{_2.buttonNum=((_1.which==1||isc.Browser.isSafari&&_1.which==65536)?1:2)}
_2.shiftKey=(_1.shiftKey==true);_2.ctrlKey=(_1.ctrlKey==true);_2.altKey=(_1.altKey==true);_2.metaKey=(_1.metaKey==true);return _2});isc.A.HARD="hard";isc.A.SOFT="soft";isc.A.$j7=0;isc.A.clickMaskRegistry=[];isc.A.$cp='ID';isc.B.push(isc.A.handleSyntheticEvent=function(_1){var _2=_1.target;_1.$49s=true;if(_2){_1.clientX+=_2.getPageLeft();_1.clientY+=_2.getPageTop();if(isc.Browser.isIE){_1.clientX+=_2.getLeftMargin()+_2.getLeftBorderSize()+_2.getLeftPadding()+2;_1.clientY+=_2.getTopMargin()+_2.getRightBorderSize()+_2.getTopPadding()+2}
switch(_1.type){case"mouseup":this.handleMouseUp(_1);break;case"mousedown":this.handleMouseDown(_1);break;case"mousemove":this.handleMouseMove(_1);break}}}
,isc.A.handleEvent=function(_1,_2,_3){var _4=isc.EH;if(isc.Page.handleEvent(_1,_2,_3)==false)return false;if(_4.targetIsEnabled(_1)&&_4.bubbleEvent(_1,_2,_3)==false){return false}
return true}
,isc.A.handleLoad=function(_1){if(isc.SA_Page)isc.SA_Page.$o();if(!isc.Browser.isMoz){if(isc.EH.$j8()&&document&&document.body){document.body.addEventListener("unload",isc.EH.handleUnload,false)}
return(isc.Page.handleEvent(null,isc.EH.LOAD)!=false)}else{try{return(isc.Page.handleEvent(null,isc.EH.LOAD)!=false)}catch(e){isc.Log.$am(e);throw e;}}}
,isc.A.handleUnload=function(_1){var _2=isc.EH;var _3=(isc.Page.handleEvent(null,_2.UNLOAD)!=false);if(_3==true){this.releaseEvents()}
return _3}
,isc.A.$j9=function(_1){if(!isc.Page.isLoaded())return false;var _2=isc.EH;var _3=_2.lastEvent;if(!_1)_1=_2.getWindow().event;_2.getKeyEventProperties(_1);var _4=false,_5=true;if(_2.$ka==_3.keyName){_5=_2.handleKeyPress();_4=true}else _5=_2.handleKeyDown(_1);_2.$ka=_3.keyName;if(_5!=false&&((isc.Browser.isIE&&!_4&&_2.$i8[_3.keyName]!=null)||(isc.Browser.isMoz&&_3.keyName==this.$je&&this.shiftKeyDown())))
{_5=_2.handleKeyPress(_1)}
return _5}
,isc.A.handleKeyDown=function(_1,_2){var _3=isc.EH,_4=_3.lastEvent,_5;var _6=_3.eventHandledNatively(_4.eventType,_4.nativeKeyTarget);if(_6)_5=_3.$js;if(_2!=null)isc.addProperties(_4,_2);if(!_6){var _7=[_4,_4.target,_4.keyName];var _8=_4.keyTarget;if(_8==null)_8=this.getEventTargetCanvas(_1,_4.nativeKeyTarget);if(_3.targetIsEnabled(_8))
_5=(_3.bubbleEvent(_8,_3.KEY_DOWN,_7)!=false)}
if(_5!=false&&this.clickMaskUp()&&_4.keyName==this.$jf){var _9,_10=this.clickMaskRegistry;for(var i=_10.length-1;i>=0;i--){if(this.isHardMask(_10[i])){_9=_10[i];break}}
if(_9)_5=false}
return _5}
,isc.A.$kb=function(_1){if(!isc.Page.isLoaded())return false;var _2=isc.EH,_3=_2.lastEvent;if(!_1)_1=_2.getWindow().event;_2.getKeyEventProperties(_1);if(_2.$ka==_2.lastEvent.keyName){if(_2.handleKeyPress(_1)==false)return false}
var _4=_2.handleKeyUp(_1)
return _4}
,isc.A.handleKeyUp=function(_1,_2){var _3=isc.EH,_4=_3.lastEvent,_5=[_4,_4.target,_4.keyName];if(_3.eventHandledNatively(_4.eventType,_4.nativeKeyTarget)){return _3.$js}
var _6=true;if(_2!=null){isc.addProperties(_4,_2)}
var _7=_4.keyTarget;if(_7==null)_7=this.getEventTargetCanvas(_1,_4.nativeKeyTarget);if(_3.targetIsEnabled(_7))
_6=(_3.bubbleEvent(_7,_3.KEY_UP,_5)!=false);if(!isc.Browser.isMac&&_4.keyName==_3.$je&&_3.shiftKeyDown()&&isc.Menu&&isc.Menu.$kc&&isc.Menu.$kc.length>0)
{_6=false}
_3.clearKeyEventProperties();return _6}
,isc.A.$kd=function(_1){if(!isc.Page.isLoaded())return false;var _2=isc.EH;var _3=_2.lastEvent,_4=_2.KEY_PRESS;if(!_1)_1=_2.getWindow().event;_2.getKeyEventProperties(_1);_3.eventType=_4;if(isc.Browser.isMoz&&_3.keyName==this.$je&&this.shiftKeyDown())return;var _5=_2.handleKeyPress(_1);return _5}
,isc.A.handleKeyPress=function(_1,_2){var _3=isc.EH,_4=_3.lastEvent,_5=_3.KEY_PRESS;if(_2!=null){isc.addProperties(_4,_2)}
var _6={keyName:_4.keyName,characterValue:_4.characterValue};_4.eventType=_5;_3.$ka=null;if(isc.Page.handleEvent(_4.keyTarget,_5)==false)return false;var _7=(_3.eventHandledNatively(_5,_4.nativeKeyTarget));if(_7!==false){_3.logDebug("keyPress handled natively");return _3.$js}else{_3.logDebug("keyPress not handled natively")}
var _8=_4.keyTarget;if(_8==null)_8=this.getEventTargetCanvas(_1,_4.nativeKeyTarget);if(_3.targetIsEnabled(_8)){var _9=_3.bubbleEvent(_8,_4.eventType,_6)
if(_9==false)return false}
if(_9!=_3.STOP_BUBBLING&&isc.Page.handleKeyPress()==false)return false;if(this.clickMaskUp()&&_4.keyName==this.$jf){var _10,_11=this.clickMaskRegistry;for(var i=_11.length-1;i>=0;i--){if(this.isHardMask(_11[i])){_10=_11[i];break}}
if(_10!=null){var _13=_3.$ke;if(_13!=null){this.logInfo("Telling focus canvas:"+_13+" to shift focus","syntheticTabIndex")
_13.$kf(!this.shiftKeyDown(),_10)}else{if(this.shiftKeyDown()){this.logInfo("Putting focus into last widget in response to Tab keydown","syntheticTabIndex")
this.$kg(_10)}else{this.logInfo("Putting focus into first widget in response to Tab keydown","syntheticTabIndex")
this.$kh(_10)}}
return false}}
if(isc.Browser.isIE&&_4.keyName==isc.EH.$je&&isc.EH.shiftKeyDown()){var _14=this.handleContextMenu(_1);if(_14){this.$ki=true}
return _14}
if(isc.Browser.isMoz&&isc.RPCManager&&isc.RPCManager.$410.length>0&&_4.keyName==isc.EH.$20w)
{return false}
return true}
,isc.A.$kh=function(_1){var _2=this.$kj;if(_2){if((!_1||!this.targetIsMasked(_2,_1))&&!_2.isDisabled()&&_2.$kk())
{_2.focusAtEnd(true)}else{_2.$kf(true,_1)}}}
,isc.A.$kg=function(_1){var _2=this.$kl;if(_2){if((!_1||!this.targetIsMasked(_2,_1))&&!_2.isDisabled()&&_2.$kk())
{_2.focusAtEnd()}else{_2.$kf(false,_1)}}}
,isc.A.handleMouseDown=function(_1,_2){var _3=isc.EH;_3.$km=true;var _4=_3.doHandleMouseDown(_1,_2);_3.$km=false;return _4}
,isc.A.doHandleMouseDown=function(_1,_2){if(!isc.Page.isLoaded())return false;var _3=this;_3.$j6=true;var _4=_2||_3.getMouseEventProperties(_1);var _5=_3.$ke,_6=_5!=null&&(_5!=_4.target)&&!_5._useNativeTabIndex&&!_5.$kn&&!(isc.isA.DynamicForm!=null&&isc.isA.DynamicForm(_5)&&_5.getFocusItem()&&_5.getFocusItem().hasFocus);if(_6){if(isc.Browser.isIE){var _7=_3.$ke.getID();if(_3.$ko==null)
_3.$ko=["if (",_7," && ",_7,".hasFocus)",_7,".blur()"]
else
_3.$ko[1]=_3.$ko[3]=_3.$ko[5]=_7;isc.Timer.setTimeout(_3.$ko.join(isc.emptyString),0)}else{_3.$ke.blur()}}
_3.mouseDownEvent=isc.addProperties({},_4);var _8=_4.target;var _9=(_3.clickMaskClick(_8)==false);if(_9){_3.$kp=true;return false}else{_3.$kp=false}
var _10=_3.rightButtonDown()?_3.RIGHT_MOUSE_DOWN:_3.MOUSE_DOWN;if(isc.Page.handleEvent(_8,_10)==false){return false}
if(_3.eventHandledNatively(_10,_4.nativeTarget))
return _3.$js;if(!_3.targetIsEnabled(_8))return false;if(_8&&!_8.hasFocus){if(((isc.Browser.isMoz&&_8.canSelectText)||isc.Browser.isSafari)&&_8.$kn)
{_3.focusInCanvas(_8)}else if(!_8._useNativeTabIndex){_8.focus()}else if(isc.Browser.isMoz){_8.focus()}else if(isc.Browser.isIE){var _11=_4.nativeTarget;if(_11&&_11.tagName==this.$jg){var _12=_11.style,_13=_12?_12.filter:null;if(_13.contains(this.$jh)){_8.focus()}}}}
if(_8)_3.prepareForDragging(_8);var _14=_3.bubbleEvent(_8,_10,null,_9);if(_14==false){delete _3.dragTarget;delete _3.dragTargetLink}
if(_3.rightButtonDown()){if(!this.useSyntheticRightButtonEvents())return true;if(_8&&(_3.getBubbledProperty(_8,"contextMenu")||_3.getBubbledProperty(_8,"showContextMenu")!=isc.Canvas.getInstanceProperty("showContextMenu")))
{_4.returnValue=false;return false}
return true}
if(_14!=false){if(_3.hasEventHandler(_8,_3.MOUSE_STILL_DOWN)){_3.$kq()}}
var _15=_3.dragTarget!=null;var _16=(!_15&&(!(isc.Browser.isMoz||isc.Browser.isSafari)||!!_8.$kr(_4)));return _16}
,isc.A.stillWithinMouseDownTarget=function(){var _1=this.mouseDownTarget();if(!_1)return false;var _2=this.lastEvent;var _3=(_1==_2.target);if(!_3)return false;if(_2.$j5!=null)return _2.$j5;if(!(isc.Browser.isMoz&&_1.$ks))
{return _3}
var x=_2.x,y=_2.y,_6=_1.visibleAtPoint(x,y,true);if(!_6&&_1.$kt!=null){for(var i=0;i<_1.$kt.length;i++){_6=_1.$kt[i].visibleAtPoint(_2.x,_2.y,true);if(_6)break}}
_2.$j5=_6;return _6}
,isc.A.handleMouseMove=function(_1){if(!isc.Page.isLoaded())return false;var _2=isc.EH;if(_2.$km||_2.$ku)return;var _3=_2.getMouseEventProperties(_1);if((isc.Browser.isMoz||isc.Browser.isIE)){if(_2.delayedMouseMoveTimer==null){_2.delayedMouseMoveTimer=isc.Timer.setTimeout({target:_2,methodName:"$kv",args:[isc.timeStamp()]},0)}
_2.$kw=0;return true}
var _4=isc.timeStamp();var _5=_2.$kx(_1,_3);_2.$kw=isc.timeStamp()-_4;return _5}
,isc.A.$kv=function(_1){this.delayedMouseMoveTimer=null;this.$kx(null,this.lastEvent)}
,isc.A.$kx=function(_1,_2){this.$ky=true;var _3=this.$kz(_1,_2);this.$ky=null;return _3}
,isc.A.$kz=function(_1,_2){var _3=this;var _4;if(isc.Browser.isIE){var _5=_3.$j6,_6=_2.buttonNum;if(_5){if(_6==0){_3.$j6=false;_4=true}}else if(_6==1&&_2.eventType==_3.MOUSE_MOVE){_2.eventType=_3.MOUSE_DOWN;_3.handleMouseDown(null,_2);_2.eventType=_3.MOUSE_MOVE}}
var _7=_2.target,_8=_3.eventHandledNatively(_3.MOUSE_MOVE,_2.nativeTarget);if(_3.$k0){_3.handleMouseUp(_1,true)}else if(_3.$k1&&_4){_3.logInfo("sythesizing mouseUp due to mouseUp outside window, buttonNum: "+_2.buttonNum);_3.handleMouseUp(_1,true)}
delete _3.$k1;var _9=_3.mouseIsDown();if(isc.Browser.isMoz&&_9&&_2.target&&_2.target.$ks&&_2.target!=_3.mouseDownTarget())
{_2.nativeTarget=null;_7=_2.target=_3.mouseDownTarget()}
if(_9&&_3.dragTarget&&!_3.dragging&&(Math.abs(_2.x-_3.mouseDownEvent.x)>_3.dragTarget.dragStartDistance||Math.abs(_2.y-_3.mouseDownEvent.y)>_3.dragTarget.dragStartDistance))
{_3.handleDragStart(_2)}
if(_3.dragging)return _3.handleDragMove();if(_3.rightButtonDown()){if(!isc.Browser.isMac||!_3.ctrlKeyDown())return true}
if(_9){_7=_3.stillWithinMouseDownTarget()?_3.mouseDownTarget():null}else{_7=_2.target}
if(_7!=_3.lastMoveTarget){if(this.logIsDebugEnabled()){this.logDebug((_3.lastMoveTarget?"mousing out of "+_3.lastMoveTarget+"  ":"")+(_7?"mousing over "+_7:""))}
var _10=_3.lastMoveTarget,_11,_12=_3.lastHoverTarget;if(_10){_3.handleEvent(_10,_3.MOUSE_OUT)}
if(_7){_3.handleEvent(_7,_3.MOUSE_OVER);_11=_7.getHoverTarget(_2)}
if(_11!=_12){if(_12)_12.stopHover();if(_11)_11.startHover();_3.lastHoverTarget=_11}
_3.lastMoveTarget=_7}
if(isc.Page.handleEvent(_7,_3.MOUSE_MOVE)==false)return false;if(_8)return _3.$js;if(!_3.targetIsEnabled(_7))return false;_3.bubbleEvent(_7,_3.MOUSE_MOVE);if(_7)_7.$k2();return true}
,isc.A.handleNativeMouseOut=function(_1){if(isc.Browser==null)return;var _2=isc.EH;if(_2.$km||_2.$ku)return;var _3=(_1?_1:_2.getWindow().event),_4=(isc.Browser.isDOM?_3.target:_3.srcElement),_5=false;if(isc.Browser.isIE){_5=(_3.toElement==null)}else{_5=(_3.relatedTarget==null)}
if(_5)_2.$k1=true;if(_5&&_2.lastMoveTarget!=null){_2.$k3(_3);_2.handleEvent(_2.lastMoveTarget,_2.MOUSE_OUT);_2.lastMoveTarget=null;if(_2.lastHoverTarget){_2.lastHoverTarget.stopHover();delete _2.lastHoverTarget}}}
,isc.A.$k3=function(_1){var _2=isc.EH;var _3=_2.lastEvent;if(isc.Browser.isIE){_3.nativeTarget=_1.toElement}else{_3.nativeTarget=_1.relatedTarget}
if(_3.nativeTarget==null)_3.target=null
else _3.target=this.getEventTargetCanvas(_1,_3.nativeTarget)}
,isc.A.$kq=function(_1){if(!isc.Page.isLoaded())return false;var _2=this;_2.$k4=isc.Timer.clear(_2.$k4);if(!_2.mouseIsDown()||!_2.mouseDownTarget())return false;if(_2.bubbleEvent(_2.mouseDownTarget(),_2.MOUSE_STILL_DOWN)==false)return false;var _3=_2.mouseDownTarget(),_4=this.$km?_3.mouseStillDownInitialDelay:_3.mouseStillDownDelay;_2.$k4=this.delayCall("$kq",[],_4);return true}
,isc.A.handleMouseUp=function(_1,_2){var _3=isc.EH;if(isc.Browser.isIE&&!_3.$j6){var _4=_3.lastEvent;_4.eventType=_3.MOUSE_DOWN;_3.handleMouseDown(null,_3.lastEvent)}
if(!_2)_3.$ku=true;var _5=_3.$k5(_1,_2);_3.$ku=false;if(isc.Browser.isSafari)_5=true;return _5}
,isc.A.$k5=function(_1,_2){if(!isc.Page.isLoaded())return false;var _3=this,_4=(!_2?_3.getMouseEventProperties(_1):_3.lastEvent),_5=false;_3.$j6=false;delete _3.$k6;_3.$k4=isc.Timer.clear(_3.$k4);var _6=_3.$k7;if(_6){_6.focus();_3.$k7=null}
var _7=_3.$kp;_3.$kp=null;var _8;if(_7==null){_7=(_3.clickMaskClick(_4.target)==false);_8=_7}
if(_7==true){if(_3.logIsDebugEnabled())_3.logDebug("mouseUp cancelled by clickMask");return false}
var _9=false;if(_3.dragging){_9=_3.handleDragStop()}
if(_3.rightButtonDown(_4)){if(this.useSyntheticRightButtonEvents()){_3.handleContextMenu()}
_3.$k6=false}else{if(!_9){if(isc.Page.handleEvent(_4.target,_3.MOUSE_UP)!=false){var _10=true,x=this.lastEvent.x,y=this.lastEvent.y,_13=_3.mouseDownTarget();_5=_3.eventHandledNatively(_3.MOUSE_UP,_4.nativeTarget);if(!_5&&_3.targetIsEnabled(_13)){if(_13.visibleAtPoint(x,y))
_10=_3.bubbleEvent(_13,_3.MOUSE_UP,null,_8);else if(_13.containsPoint(x,y))
_10=_3.bubbleEvent(_13,_3.MOUSE_OUT,null,_8)}
if(_10!=false){_3.$k6=_3.handleClick(_4.target)}}}}
delete _3.redrawnWhileDown;_3.clearDragProperties();if(_3.$k0)_3.$k0=false;var _14=_4.target,_15=isc.isA.DynamicForm!=null&&isc.isA.DynamicForm(_14);if(_5&&(_15||_3.$k6==true))
return _3.$js;return(_15&&_3.$k6==true)}
,isc.A.clearDragProperties=function(){var _1=this;_1.dragging=false;delete _1.dragTarget;delete _1.dragTargetStartRect;delete _1.dragTargetLink;delete _1.dragMoveTarget;delete _1.dragMoveAction;delete _1.dragOperation;delete _1.dragAppearance;delete _1.dropTarget;delete _1.lastDropTarget}
,isc.A.handleContextMenu=function(_1){if(!isc.Page.isLoaded())return false;var _2=isc.EH;_2.$ku=true;var _3=_2.$k8(_1);_2.$ku=false;return _3}
,isc.A.$k8=function(_1){var _2=isc.Browser.isSafari||(this.lastEvent.eventType==isc.EH.MOUSE_UP);if(this.$ki){delete this.$ki;return true}
if(_1)this.getMouseEventProperties(_1);var _3=this,_4=_3.lastEvent,_5=_4.target;if(!_2&&!isc.Browser.isMoz){_4.x=_5?_5.getPageLeft():0;_4.y=_5?_5.getPageTop():0}
if(isc.Browser.isSafari&&_3.clickMaskClick(_5)==false){return false}
if(isc.Page.handleEvent(_5,_3.SHOW_CONTEXT_MENU)==false){return false}
var _6=true;if(_3.targetIsEnabled(_5)){_6=_3.bubbleEvent(_5,_3.SHOW_CONTEXT_MENU)}
if(_6!=false){if(_3.lastMoveTarget)_3.handleEvent(_3.lastMoveTarget,_3.MOUSE_OUT);delete _3.lastMoveTarget}
return _6}
,isc.A.handleNativeClick=function(){var _1=isc.EH,_2=(_1.$k6!=false);delete _1.$k6}
,isc.A.handleClick=function(_1,_2){if(!isc.Page.isLoaded())return false;var _3=this,_4=_3.lastEvent,_5;if(!_2)_2=(_3.isDoubleClick(_1)?_3.DOUBLE_CLICK:_3.CLICK);if(isc.Page.handleEvent(_1,_2)==false){_5=false}else if(_3.eventHandledNatively(_2,_4.nativeTarget)){_5=_3.$js}else if(!_3.targetIsEnabled(_1)){_5=false}else if(!_3.stillWithinMouseDownTarget()){_5=false}else{var _1=_3.mouseDownTarget();_5=_3.bubbleEvent(_1,_2)}
_3.$k9=isc.timeStamp();return _5}
,isc.A.isDoubleClick=function(_1){var _2=this,_1=_1||_2.lastEvent.nativeTarget;var _3=(isc.Browser.isMoz&&isc.Browser.isWin),_4,_5;if(_3){var _6=_2.lastEvent.DOMevent
_4=_6?_6.timeStamp:null;if(_4==0||!isc.isA.Number(_4)){this.logDebug("Unable to derive native 'timeStamp' attribute from DOM event");_4=isc.timeStamp()}
_5=((_4-_2.lastClickTime)<_2.DOUBLE_CLICK_DELAY)}else{_4=isc.timeStamp();_5=((_2.$k9-_2.lastClickTime)<_2.DOUBLE_CLICK_DELAY)?((_4-_2.lastClickTime)<_2.DOUBLE_CLICK_DELAY):((_4-_2.$k9)<100)}
_2.lastClickTime=_4;if(!_5){delete _2.lastClickTarget}
var _7=false;if(_1==_2.lastClickTarget){_7=!_1.noDoubleClicks;if(_7){var _8=_1;while(_8.parentElement){_8=_8.parentElement;if(_8.noDoubleClicks){_7=false;break}}}}
_2.lastClickTarget=(_7?null:_1);return _7}
,isc.A.targetIsEnabled=function(_1){if(!_1)return false;if(_1.destroyed)return false;if(isc.isA.Function(_1.isDisabled))return!_1.isDisabled();return true}
,isc.A.getFocusCanvas=function(){return this.$ke}
,isc.A.$la=function(_1,_2){if(!this.logIsDebugEnabled("nativeFocus"))return;this.logDebug((_2?"onfocus":"onblur")+" fired on: "+_1+this.$lb(),"nativeFocus")}
,isc.A.$lb=function(){if(!isc.Browser.isIE)return isc.$ad;var _1=this.getActiveElement();if(_1==null)return isc.$ad;return", activeElement: "+(_1.tagName)}
,isc.A.blurFocusCanvas=function(_1,_2){var _3=this.$lc;if(_2){this.$h1("BLR");this.$la(_1);isc.EH.$ld=null}
this.$le(_1,_2);if(_2)this.$lc=_3}
,isc.A.$le=function(_1,_2){if(this.$ke){var _3=this.$ke;if(_1!=null&&_3!=_1)return;this.$ke=null;_3.$lf(false)}}
,isc.A.focusInCanvas=function(_1,_2){var _3=this.$lc;if(_2){this.$h1("FCS");this.$la(_1,true);isc.EH.$lg=null}
if(isc.Browser.isMoz){if(_2&&(this.lastEvent.eventType!=this.KEY_DOWN&&this.lastEvent.eventType!=this.KEY_PRESS&&this.lastEvent.eventType!=this.KEY_UP))
{if(_1&&_1.showFocusOutline)_1.setShowFocusOutline(false,true)}else{if(_1&&_1.showFocusOutline)_1.setShowFocusOutline(true,true)}}
this._focusInCanvas(_1,_2);if(_2)this.$lc=_3}
,isc.A._focusInCanvas=function(_1,_2){if(!_1||_1.hasFocus||!_1.$kk()||_1.isDisabled())return;this.checkMaskedFocus(_1);if(_2&&isc.Browser.isMoz){if(_1.parentElement)_1.parentElement.$lh(null,true)}
if(this.$ke)this.$ke.$lf(false)
this.$ke=_1;_1.$lf(true);if(this.targetIsMasked(_1)){var _3=this.clickMaskRegistry.last();this.setMaskedFocusCanvas(_1,_3)}}
,isc.A.setMaskedFocusCanvas=function(_1,_2){if(!_2)return;_2.$li=_1}
,isc.A.getMaskedFocusCanvas=function(_1){if(_1==null)_1=this.clickMaskRegistry.last();else _1=this.getClickMask(_1);if(_1)return _1.$li}
,isc.A.checkMaskedFocus=function(_1){if(isc.Browser.isIE){var _2=this.getActiveElement();var _3=_1?_1.getHandle():null;if(!_3)return;var _4;while(_2&&_2.tagName){if(_2==_3){_4=true;break}
if(_2.eventProxy){_4=(_2.eventProxy==_1.getID());break}
_2=_2.parentElement}
if(!_4)return}
var _5=this.clickMaskRegistry;for(var i=_5.length-1;i>=0;i--){var _7=_5[i];if(!this.targetIsMasked(_1,_7))return;else{if(this.isHardMask(_7))return false;this.$lj(_7)}}}
,isc.A.prepareForDragging=function(_1){var _2=this;if(_2.dragging)_2.handleDragStop();delete _2.dragMoveAction;delete _2.dragTarget;_2.bubbleEvent(_1,"prepareForDragging");if(!_2.dragTarget){if(this.logIsDebugEnabled())this.logDebug("No dragTarget, not dragging");return}
if(_1.dragTarget){if(isc.isA.Canvas(_1.dragTarget)){_2.dragTarget=_1.dragTarget}else if(_1.dragTarget=="top"&&_1.topElement){_2.dragTarget=_1.topElement}else if(_1.dragTarget=="parent"&&_1.parentElement){_2.dragTarget=_1.parentElement}else if(_1.dragTarget=="creator"&&_1.creator){_2.dragTarget=_1.creator}else if(isc.isA.String(_1.dragTarget)&&isc.isA.Canvas(window[_1.dragTarget]))
{_2.dragTarget=window[_1.dragTarget]}else{this.logWarn('prepareForDragging():  target.dragTarget not understood : '+_1.dragTarget)}}
if(this.logIsInfoEnabled("dragDrop"))
this.logInfo("target is draggable with dragOperation: "+_2.dragOperation+", dragTarget is : "+_2.dragTarget+(_2.dragTarget!=_1?" (delegated from: "+_1+")":""),"dragDrop");_2.dragTargetStartRect=_2.dragTarget.getRect()}
,isc.A.handleDragStart=function(){var _1=this,_2=_1.lastEvent;if(!_1.mouseIsDown()||!_1.dragTarget)return false;delete _1.dropTarget;delete _1.dragMoveTarget;_1.dragOffsetX=-10;_1.dragOffsetY=-10;_1.handleEvent(_1.lastMoveTarget,_1.MOUSE_OUT);if(_1.lastMoveTarget!=_1.mouseDownTarget()){_1.handleEvent(_1.mouseDownTarget(),_1.MOUSE_OUT)}
if(isc.Hover)isc.Hover.hide();_1.dragStartOffsetX=_1.mouseDownEvent.x-_1.dragTarget.getPageLeft();_1.dragStartOffsetY=_1.mouseDownEvent.y-_1.dragTarget.getPageTop();var _3=_1.dragOperation+"Start";if(_1.handleEvent(_1.dragTarget,_3)==false){this.logInfo("drag cancelled by false return from: "+_3+" on "+_1.dragTarget,"dragDrop");delete _1.dragTarget;delete _1.dragTargetLink;_1.handleEvent(_1.dragTarget,_1.MOUSE_OVER);return false}
delete _1.lastMoveTarget;if(_1.dragTarget.dragAppearance!=_1.TRACKER)
{_1.dragOffsetX=_1.dragStartOffsetX;_1.dragOffsetY=_1.dragStartOffsetY}
_1.dragAppearance=_1.dragTarget.dragAppearance;if(_1.dragAppearance==_1.TRACKER){_1.dragMoveTarget=_1.$lk();if(!_1.dragMoveAction)_1.dragMoveAction=_1.$ll;_1.dragTracker.setOverflow(isc.Canvas.VISIBLE);_1.bubbleEvent(_1.dragTarget,_1.SET_DRAG_TRACKER);_1.dragOffsetX=_1.dragTracker.offsetX;_1.dragOffsetY=_1.dragTracker.offsetY}else if(_1.dragAppearance==_1.OUTLINE){_1.dragMoveTarget=_1.getDragOutline(_1.dragTarget);if(!_1.dragMoveAction)_1.dragMoveAction=_1.$ll}else if(_1.dragAppearance==_1.TARGET){_1.dragMoveTarget=_1.dragTarget;if(!_1.dragMoveAction)_1.dragMoveAction=_1.$ll;if(_1.dragTarget.showDragShadow)this.$lm();if(_1.dragTarget.dragOpacity!=null)this.$ln()}else{}
if(_1.dragMoveTarget){if(_1.dragMoveTarget!=_1.dragTarget){_1.dragMoveTarget.dragIntersectStyle=_1.dragTarget.dragIntersectStyle}
_1.dragMoveTarget.show();_1.dragMoveTarget.bringToFront()}
var _4=_1.dragMoveTarget?_1.dragMoveTarget:_1.dragTarget;if((isc.Browser.isIE||isc.Browser.isMoz)&&_1.dragAppearance!=_1.OUTLINE&&!(_4.$lo||_4.neverBackMask))
{if(_1.alwaysBackMask){this.$lp(_4)}else{var _5=[];if(isc.BrowserPlugin){var _6=isc.BrowserPlugin.instances;for(var i=0;i<_6.length;i++){var _8=_6[i];if(_8.isVisible()&&(_4.parentElement==null||_4.parentElement.contains(_8,true)))
{_5.add({instance:_8,rect:_8.getPageRect()})}}}
if(isc.Browser.isIE&&isc.Browser.minorVersion>=5.5&&isc.NativeSelectItem){var _9=isc.NativeSelectItem.instances;for(var i=0;i<_9.length;i++){var _10=_9[i];if(_10.isVisible()&&(_4.parentElement==null||_4.parentElement.contains(_10.containerWidget,true)))
{_5.add({instance:_10,rect:_10.getPageRect()})}}}
if(_5.length>0&&_1.dynamicBackMask===false)
{this.$lp(_4)}else{_1.$lq=_5}}}
_1.showEventMasks((_1.dragOperation==_1.DRAG_RESIZE));_1.dragging=true;this.logInfo("Started dragOperation: "+_1.dragOperation+" with dragTarget: "+_1.dragTarget+" dragAppearance: "+_1.dragAppearance,"dragDrop");return true}
,isc.A.$lm=function(){var _1=isc.EH;var _2=_1.dragTarget;_1.$lr=(!_2.showShadow);_1.$ls=_2.shadowDepth;_2.shadowDepth=_1.dragTargetShadowDepth;_2.updateShadow();if(!_2.showShadow)_2.setShowShadow(true)}
,isc.A.$lt=function(){var _1=isc.EH;var _2=_1.dragTarget;if(_1.$lr)_2.setShowShadow(false);_2.shadowDepth=_1.$ls;_2.updateShadow();delete _1.$lr;delete _1.$ls}
,isc.A.$ln=function(){var _1=isc.EH;var _2=_1.dragTarget;_1.$lu=_2.opacity;_2.setOpacity(_2.dragOpacity)}
,isc.A.$lv=function(){var _1=isc.EH,_2=_1.dragTarget;_2.setOpacity(_1.$lw)}
,isc.A.$lp=function(_1){if(_1._backMask){if(!_1._backMask.isVisible())_1._backMask.show()}else{_1.makeBackMask({$lx:true})}}
,isc.A.$ly=function(_1){if(_1._backMask&&_1._backMask.$lx&&_1._backMask.isVisible())
{_1._backMask.hide()}}
,isc.A.$lz=function(){var _1=this.dragMoveTarget;if(!_1)return;var _2=[_1];if(_1._backMask)_2.add(_1._backMask);if(_1.$l0)_2.add(_1.$l0);if(_1._shadow)_2.add(_1._shadow);return _2}
,isc.A.$l1=function(_1){var _2=this.$ji;if(!_2[_1]){_2[_1]=_1+"Move"}
return _2[_1]}
,isc.A.handleDragMove=function(){var _1=this,_2=_1.lastEvent;isc.$54j=true;_1.dropTarget=_1.getDropTarget(_2);isc.$54j=false;if(_1.$lq&&_1.dynamicBackMask){var _3=false;var _4=_1.dragMoveTarget?_1.dragMoveTarget:_1.dragTarget;var _5=_4.getRect();for(var i=0;i<_1.$lq.length;i++){var _7=_1.$lq[i];if(isc.Canvas.rectsIntersect(_7.rect,_5))
{_1.$l2=_7.instance;_3=true;break}}
if(_1.$l2){if(_1.$l2.repaintIfRequired)_1.$l2.repaintIfRequired()}
if(_3){this.$lp(_4)}else{this.$ly(_4);delete _1.$l2}}else if(isc.BrowserPlugin){isc.BrowserPlugin.handleDragMoveNotify()}
if(_1.dragMoveAction)_1.dragMoveAction();if(_1.handleEvent(_1.dragTarget,this.$l1(_1.dragOperation))==false){delete _1.dropTarget;return false}
if(_1.dropTarget!=_1.lastDropTarget){this.logDebug("New drop target: "+_1.dropTarget,"dragDrop");if(_1.lastDropTarget){_1.handleEvent(_1.lastDropTarget,_1.DROP_OUT)}
if(_1.dropTarget){_1.handleEvent(_1.dropTarget,_1.DROP_OVER)}
_1.lastDropTarget=_1.dropTarget}
if(_1.dropTarget){_1.handleEvent(_1.dropTarget,_1.DROP_MOVE)}
isc.$54j=true;this.$l3();isc.$54j=false;return false}
,isc.A.$l3=function(){var _1=this,_2=_1.dragTarget;var _3=[];var _4=_2.dragScrollType=="parentsOnly"?_2.getParentElements():isc.Canvas._canvasList;;if(_4==null||_4.length==0)return;for(var i=0;i<_4.length;i++){if((_4[i].hscrollOn||_4[i].vscrollOn)&&_4[i].isDrawn()&&_4[i].isVisible()&&_4[i].shouldDragScroll()){_3.add(_4[i])}}
var _6=_1.lastEvent,_7=_6.x,_8=_6.y,_9=[];for(var i=0;i<_3.length;i++){if(_3[i].visibleAtPoint(_7,_8,false,_1.$lz()))
_9.add(_3[i])}
if(_9.length>0){var _10;for(var i=0;i<_9.length;i++){if(_9[i].$l4(_2.dragScrollDirection)){if(_10==null||_10.contains(_9[i],true))
_10=_9[i]}}
if(_10!=null)_10.$l5(_2.dragScrollDirection)}}
,isc.A.handleDragStop=function(){var _1=this,_2=_1.lastEvent,_3=false;_1.dragging=false;this.logInfo("end of drag interaction","dragDrop");_1.dragOffsetX=_1.dragOffsetY=0;var _4=_1.dragTarget,_5=_1.dragMoveTarget,_6=_1.dragOperation;if(_5&&(_5==_1.dragTracker||_5==_1.dragOutline))
{_5.hide()}else{if(_4.showDragShadow)_1.$lt();if(_4.dragOpacity!=null)_1.$lv()}
if(this.dragTracker&&this.dragTracker.$l6){this.dragTracker.destroy();delete this.dragTracker}
var _7=_1.dragMoveTarget?_1.dragMoveTarget:_1.dragTarget;this.$ly(_7);if(_1.$lq)delete _1.$lq;var _8=_1.dropTarget;if(_8){_1.handleEvent(_1.dropTarget,_1.DROP_OUT);if(_8.willAcceptDrop())_1.handleEvent(_8,_1.DROP);_3=true}
var _9=(_4==_5);if(_1.handleEvent(_4,_6+"Stop")!=false){_3=true;if(_6==_1.DRAG_RESIZE){if(!_9){_4.setPageRect(_5.getPageLeft(),_5.getPageTop(),_5.getWidth(),_5.getHeight(),true)}
var _10=_4.getVisibleWidth()-_1.dragTargetStartRect[2],_11=_4.getVisibleHeight()-_1.dragTargetStartRect[3];_4.dragResized(_10,_11)}else if(_6==_1.DRAG_REPOSITION){if(!_9){_4.setPageRect(_5.getPageLeft(),_5.getPageTop());_4.bringToFront()}
_1.dragTarget.dragRepositioned()}}else{if(_6==_1.DRAG_RESIZE){if(_9){_4.setRect(_1.dragTargetStartRect)}}else if(_1.dragOperation==_1.DRAG_REPOSITION){if(_9){_4.moveTo(_1.dragTargetStartRect[0],_1.dragTargetStartRect[1])}}}
_1.clearDragProperties();_1.hideEventMasks();var _12=_1.lastEvent.target;if(_12)_1.handleEvent(_12,_1.MOUSE_OVER);_1.lastMoveTarget=_12;return _3}
,isc.A.getEventTargetCanvas=function(_1,_2){var _3=this,_4=this.getWindow();if(!_2)_2=(isc.Browser.isIE?_1.srcElement:_1.target);if(!_3.$l7(_2)){return _3.lastTarget}
if(_1&&_1.$49s)return _1.target;if(!_2||_2.tagName==this.$jj||_2.tagName==this.$jk){return(_3.lastTarget=null)}
if(_2&&_2.tagName&&_2.tagName==this.$49r){var _5=isc.Applet?isc.Applet.idForName(_2.name):null;return _5?window[_5]:_3.lastTarget}
if(isc.Browser.isIE&&_2.parentElement==null){_2=_3.lastTarget}else{var _6=this.$jl;if(isc.Browser.isIE){while(_2!=null){if(_2.eventProxy)break;_2=_2.parentElement}}else{while(_2!=null){if(_2.eventProxy!=null||(_2.hasAttribute!=null&&_2.hasAttribute(_6)))break;_2=_2.parentNode}}
if(!_2)return(_3.lastTarget=null);_2=_4[_2.getAttribute(_6)];while(_2&&_2.eventProxy){if(isc.isA.String(_2.eventProxy)){_2.eventProxy=_4[_2.eventProxy]}
_2=_2.eventProxy}
if(this.logIsInfoEnabled()&&_1.type!="mousemove"&&_1.type!="selectstart")
{if(_2!=null){this.logInfo("Target Canvas for event '"+_1.type+"': "+_2)}else{this.logDebug("No target Canvas for event '"+_1.type+"'")}}
if(_2==_3.dragTracker){_2=_3.lastTarget}
_3.lastTarget=_2}
if(isc.isA.Canvas(_2))return _2;return null}
,isc.A.$l7=function(_1){if(!(isc.Browser.isMoz&&_1==this.$jm))return true;if(!this.$l8){this.$l8=new Function("$l9","try{$l9.parentNode}catch(e){return false}return true")}
return this.$l8(_1)}
,isc.A.getDropTarget=function(_1){var _2=this;if(!_2.dragTarget||!_2.dragTarget.canDrop||_2.dragOperation==_2.DRAG_RESIZE)return null;var _3=(_2.dragMoveTarget||_2.dragTarget),_4=_2.$i0,_5=[],i=0,_7=_4.length,_8=(_3.dragAppearance!=isc.EH.TARGET);if(_3.dragIntersectStyle==_2.INTERSECT_WITH_MOUSE){if(_1.target!=this.mouseDownTarget()||(isc.Browser.isIE||isc.Browser.isSafari||(isc.Browser.isMoz&&isc.Browser.geckoVersion>20040616&&!this.mouseDownTarget().$ks)))
{var _9=_1.target;while(_9&&_9.dropTarget)_9=_9.dropTarget;if((_8||_9!=_3)&&(_4.contains(_9)))
{return _9}}
for(;i<_7;i++){var _10=_4[i];if(_10.canAcceptDrop&&!_10.isDisabled()&&(_10.visibleAtPoint(_1.x,_1.y,false,_2.$lz()))&&(_8||_10!=_3))
{_5.add(_10)}}}else{for(;i<_7;i++){var _10=_4[i];if(!_8&&_10==_3)continue;if(_10.intersects(_3)&&_10.canAcceptDrop&&!_10.isDisabled())
{_5.add(_10)}}}
if(_5.length<2)return _5[0];var _11=_5[0];for(var i=1;i<_5.length;i++){var _12=_5[i];if(_11.contains(_12,true)){_11=_12}else if(_3.dragIntersectStyle==_2.INTERSECT_WITH_RECT){var _13=null,_14=_11,_15=_12;while(_13==null){if(_14.parentElement==null){_13=true;_15=_12.topElement||_12}else if(_14.parentElement.contains(_12,true)){_13=_14.parentElement;while(_15.parentElement!=_13){_15=_15.parentElement}}else{_14=_14.parentElement}}
if(_15.getZIndex()>_14.getZIndex()){_11=_12}}}
return _11}
,isc.A.registerDroppableItem=function(_1){if(!_1.$ma){this.$i0.add(_1);_1.$ma=true}}
,isc.A.unregisterDroppableItem=function(_1){this.$i0.remove(_1);delete _1.$ma}
,isc.A.registerMaskableItem=function(_1,_2){if(!this.$i1.contains(_1)){this.$i1.add(_1);if(_2)this.makeEventMask(_1,{eventProxy:_1})}}
,isc.A.unregisterMaskableItem=function(_1){this.$i1.remove(_1);if(_1._eventMask)_1._eventMask.destroy();delete _1._eventMask}
,isc.A.makeEventMask=function(_1,_2,_3){if(isc.isA.Function(_1.makeEventMask))return _1.makeEventMask(_2,_3);var _4=this.$jn;if(!_4.contents)_4.contents=isc.Browser.isIE&&isc.Browser.version>6?isc.Canvas.blankImgHTML(1600,1200):isc.Canvas.spacerHTML(1600,1200);var _5=isc.Canvas.create({ID:_1.getID()+"_eventMask",cursor:_1.cursor,$jr:_1},_4,_2);_5.setRect(_3?_3:_1.getRect());_1._eventMask=_5;_1.addPeer(_5);return _5}
,isc.A.showEventMasks=function(_1,_2){var _3=this,_4=_3.$i1;if(_1){if(!_3._eventMask)_3._eventMask=isc.ScreenSpan.create({ID:"isc_EH_eventMask",mouseDown:function(){this.hide()},pointersToThis:[{object:_3,property:"_eventMask"}]});_3._eventMask.show();_3._eventMask.bringToFront();if(isc.BrowserPlugin){_4.intersect(isc.BrowserPlugin.instances).map("$mb")}}else{for(var i=0;i<_4.length;i++){var _6=_4[i];if(_2&&_2[_6.getID()]){_6.$mc()}else{_6.$mb()}}}}
,isc.A.hideEventMasks=function(){var _1=this,_2=_1.$i1;if(_1._eventMask&&_1._eventMask.isVisible()){_1._eventMask.hide();if(isc.BrowserPlugin){_2.intersect(isc.BrowserPlugin.instances).map("$mc")}}else{for(var i=0;i<_2.length;i++){_2[i].$mc()}}}
,isc.A.eventHandledNatively=function(_1,_2){var _3=_1;if(!this.reverseEventTypes[_1]){if(this.$i2[_1])
_3=this.$i2[_1];else if(this.$i7[_1])
_3=this.$i7[_1]}
var _4=this.$md(_3,_2);if(_4&&this.logIsDebugEnabled()&&_3!="mouseMove"){this.logDebug(_1+" event on "+this.lastTarget+" handled natively")}
return _4}
);isc.evalBoundary;isc.B.push(isc.A.$md=function(_1,_2){_1=(_1||"");var _3=this,_4=_3.lastEvent;if(!_3.$l7(_2)){return true}
if(_2&&_2.tagName==this.$49r)return true;var _5=_3.isMouseEvent(_1),_6=_5?_4.target:_4.keyTarget;if(_5&&_6==null)return true;if((this.logIsInfoEnabled()&&_1==_3.KEY_DOWN)||(this.logIsDebugEnabled()&&(_1==_3.KEY_UP||_1==_3.KEY_PRESS)))
{this.logInfo(_1+" event with Canvas target: "+this.lastEvent.keyTarget+", native target: "+this.echoLeaf(_2))}
if(_3.passThroughEvents&&_2){var _7=_2,_8=(_7.handleNativeEvents||(_7.getAttribute?_7.getAttribute(this.$jt):null)),_9=_7.tagName,_10;if(!_3.$me)_3.$me="false";if(_8==null){_10=(!_7.focusProxy&&((_7.form!=null&&_9!=_3.$i6)||_3.$i5[_9]!=null||(_7.isContentEditable&&!_7.eventProxy)));if(!_10&&(_1!=_3.MOUSE_WHEEL)&&(_1!=_3.MOUSE_MOVE)){while(_7&&_7.tagName!=_3.BODY_TAG&&_7.tagName!=this.$jk)
{if(_7.eventProxy!=null||(_7.hasAttribute!=null&&_7.hasAttribute(this.$jl)))break;if(_3.$i4[_7.tagName]!=null){var _11=(_7.handleNativeEvents||(_7.getAttribute?_7.getAttribute(this.$jt):null));if(_11!=null&&!isc.isA.emptyString(_11)){if(isc.isA.String(_11))
_11=(_11==isc.EH.$me?false:true)}
if(_11!=false){_10=true;break}}
_7=_7.parentNode}}}else{_10=_8;if(_10==_3.$me)_10=false}
if(_10){return true}else if(_8!=null){return false}}
if(_5&&this.$mf(_6,_1,_4))return true;return false}
,isc.A.isMouseEvent=function(_1){_1=_1||this.lastEvent.eventType;if(this.$mg==null){this.$mg={mouseOver:true,mouseover:true,mouseDown:true,mousedown:true,rightMouseDown:true,mouseMove:true,mousemove:true,mouseOut:true,mouseout:true,mouseUp:true,mouseup:true,DOMMouseScroll:true,mousewheel:true,mouseWheel:true,click:true,doubleClick:true,doubleclick:true,showContextMenu:true,showcontextmenu:true,selectStart:true,selectstart:true}}
if(this.$mg[_1])return true;return false}
,isc.A.isKeyEvent=function(_1){_1=_1||this.lastEvent.eventType;if(this.$mh==null){this.$mh={};var _2=this.$mh;_2[this.KEY_DOWN]=true;_2[this.KEY_PRESS]=true;_2[this.KEY_UP]=true;var _3=this.$i7;for(var _4 in _3)_2[_4]=true}
if(this.$mh[_1])return true;return false}
,isc.A.$mf=function(_1,_2,_3){var _4=this;if(!_1||_1.showCustomScrollbars||!(_1.vscrollOn||_1.hscrollOn))return false;var _5=isc.Element.getNativeScrollbarSize();if(_1.isRTL()){if((_1.vscrollOn&&(_3.x<_1.getPageLeft()+_5))||(_1.hscrollOn&&(_3.y>_1.getPageTop()+_1.getHeight()-_5)))
{if(_2==_4.MOUSE_DOWN)_4.$k0=true;return true}}else{if((_1.vscrollOn&&(_3.x>_1.getPageRight()-_5))||(_1.hscrollOn&&(_3.y>_1.getPageBottom()-_5)))
{if(_2==_4.MOUSE_DOWN)_4.$k0=true;return true}}
return false}
,isc.A.bubbleEvent=function(_1,_2,_3,_4){var _5=this,_6=_5.lastEvent;var _7=this.logIsDebugEnabled()&&!this.$ju[_2];var _8=this.isMouseEvent(_2);if(_8){if(_4==null)_4=this.targetIsMasked(_1);if(_4){if(_7){this.logDebug(_2+" on "+_1+" blocked by clickmask")}
return false}}
var _9=this.$mi(_2),_10;while(_1){if(_1.destroyed)break;var _11=(_1.eventParent||_1.parentElement);if(_11&&_11.eventProxy)_11=_11.eventProxy;if(_1[_9]!=null){_10=_9}else if(_1[_2]!=null&&_1[_2]!=isc.Class.NO_OP&&!isc.is.emptyString(_1[_2])){_10=_2;if(isc.isA.String(_1[_2])){_1.convertToMethod(_2)}
if(_7){this.logDebug("Bubbling event '"+_2+"', target '"+_1+"' has handler: "+this.echoLeaf(_1[_2]))}}
if(_1[_10]!=null){var _12;_12=_1[_10](_6,_3);if(_12==false){if(_7){this.logDebug("Bubbling for event '"+_2+"' cancelled via false return value by target: "+_1)}
return false}
if(_12==_5.STOP_BUBBLING){if(_7){this.logDebug("Bubbling for event '"+_2+"' cancelled via STOP_BUBBLING return value by target: "+_1)}
return _5.STOP_BUBBLING}}
_1=_11}
if(_7)this.logDebug("Event '"+_2+"' bubbled to top");return true}
,isc.A.$mi=function(_1){if(!this.$jc[_1]){this.$jc[_1]="handle"+_1.charAt(0).toUpperCase()+_1.substring(1)}
return this.$jc[_1]}
,isc.A.hasEventHandler=function(_1,_2){if(!isc.isAn.Object(_1)||!isc.isA.String(_2)){isc.Log.logWarn("EventHandler.hasEventHandler() passed bad parameters ["+[_1,_2]+"]. returning null;","event");return null}
var _3=this.$mi(_2);if(this.getBubbledProperty(_1,_2)!=null||this.getBubbledProperty(_1,_3)!=null)return true;return false}
,isc.A.getBubbledProperty=function(_1,_2){while(_1){if(_1[_2])return _1[_2];_1=(_1.eventParent||_1.parentElement);if(_1&&_1.eventProxy)_1=_1.eventProxy}
return null}
,isc.A.handleSelectStart=function(){var _1=isc.EH;var _2=_1.getWindow(),_3=_2.event?_2.event.srcElement:null,_4=_1.mouseDownEvent?_1.mouseDownEvent.nativeTarget:null;if(_3&&_4==_3&&_3.form&&!_1.dragging)
{return true}
if(isc.EH.$mj)return true;var _5=isc.EH.mouseIsDown()?_1.mouseDownTarget():null,_6=_1.getEventTargetCanvas(_2.event);var _7=!_1.dragging&&!_1.dragTarget&&(_5!=null?_5.$kr():true)&&(_6!=null?_6.$kr():true);if(_7)return true;return _1.killEvent()}
,isc.A.handleSelectionChange=function(_1){if(!_1)_1=window.event;var _2=isc.EH;var _3=_2.lastEvent;var _4=isc.Element.$mk(document);if(_4){var _5=_2.getEventTargetCanvas(_1,_4);_3.nativeKeyTarget=_4
_3.keyTarget=_5;_3.eventType=this.$41z;if(_5){_5.keyTarget=_5;_2.bubbleEvent(_3.keyTarget,"selectionChange")}}
return true}
,isc.A.handleNativeDragStart=function(){if(isc.EH.dragTarget)return false;var _1=isc.EH.mouseDownTarget();if(_1)return!!(_1.$kr());if(this.$ml)return this.$ml();if(this.$mm)return this.$mm()}
,isc.A.handleResize=function(_1){if(isc.EH.resizeTimer==null){isc.EH.resizeTimer=isc.Timer.setTimeout("isc.EH.$hr()",0)}
return true}
,isc.A.$mn=function(){isc.EH.$hr(true)}
,isc.A.$hr=function(_1){isc.EH.resizeTimer=null;if(!_1){this.$mo=isc.Page.getWidth(window,true);this.$mp=isc.Page.getHeight(window,true);if(this.resizingPollTimer!=null)isc.Timer.clearTimeout(this.resizingPollTimer);this.resizingPollTimer=isc.Timer.setTimeout(this.$mn,100)}else{var _2=isc.Page.getWidth(window,true),_3=isc.Page.getHeight(window,true),_4=(_2==this.$mo&&_3==this.$mp)
if(isc.Page.pollPageSize){isc.Page.setEvent(isc.EH.IDLE,this.$mn,isc.Page.FIRE_ONCE);this.$mo=_2;this.$mp=_3}
if(_4)return}
isc.Page.handleEvent(null,isc.EH.RESIZE)}
,isc.A.handleMouseWheel=function(_1){var _2=isc.EH;if(!_1)_1=_2.getWindow().event;var _3=(_1.srcElement||_1.target);if(_2.eventHandledNatively(_1.type,_3))return _2.$js;_2.getMouseEventProperties(_1);var _4=_2.getEventTargetCanvas(_1);if(_2.bubbleEvent(_4,_2.eventTypes.MOUSE_WHEEL)==false){if(_1.preventDefault)_1.preventDefault();return false}
return true}
,isc.A.handleDOMMouseScroll=function(_1){return isc.EH.handleMouseWheel(_1)}
,isc.A.handleScroll=function(_1){}
,isc.A.prepareForLinkDrag=function(_1,_2){this.dragTarget=(isc.isA.String(_1)?this.getWindow()[_1]:_1);this.dragTargetLink=_2;return false}
,isc.A.setDragTracker=function(_1,_2,_3,_4,_5,_6){var _7=this.$lk(_6);_2=_2||10;_3=_3||10;_7.resizeTo(_2,_3);_7.setContents(_1);_7.redrawIfDirty("setDragTracker");if(_4)_7.offsetX=_4;if(_5)_7.offsetY=_5;_7.$l6=true}
,isc.A.$lk=function(_1){if(!this.dragTracker){var _2=this.dragTrackerDefaults;_2.contents=isc.Canvas.imgHTML("[SKIN]black.gif",10,10);this.dragTracker=isc.Canvas.create(_2,_1)}else if(_1!=null)this.dragTracker.setProperties(_1);return this.dragTracker}
,isc.A.getDragOutline=function(_1,_2,_3){if(!this.dragOutline){this.dragOutline=isc.Canvas.create({autoDraw:false,overflow:isc.Canvas.HIDDEN})
if(isc.Browser.isIE)this.dragOutline.setContents(isc.Canvas.spacerHTML(1600,1200))}
var _4=this.dragOutline;if(isc.Element.getStyleDeclaration(_1.dragOutlineStyle)){_4.setStyleName(_1.dragOutlineStyle)}else{_4.setBorder((_2||1)+"px solid "+(_3||"black"))}
_4.setPageRect(_1.getPageLeft(),_1.getPageTop(),_1.getVisibleWidth(),_1.getVisibleHeight());_4.minWidth=_1.minWidth;_4.minHeight=_1.minHeight;_4.maxWidth=_1.maxWidth;_4.maxHeight=_1.maxHeight;if(isc.isAn.Array(_1.keepInParentRect)){_4.keepInParentRect=_1.keepInParentRect}else if(_1.keepInParentRect==true){_4.keepInParentRect=_1.getParentPageRect()}else{_4.keepInParentRect=null}
return _4}
,isc.A.getDragRect=function(){var _1=this.dragMoveTarget||this.dragTarget;if(!_1)return null;return _1.getPageRect()}
,isc.A.$ll=function(){var _1=this;var _2=_1.dragMoveTarget;if(!_2)return true;var _3=(isc.Browser.isMoz&&isc.Browser.geckoVersion<20031007&&!_2.keepInParentRect);if(_3&&(_2.parentElement&&!_2.parentElement.containsPoint(_1.lastEvent.x,_1.lastEvent.y)))
{return true}
isc.$54j=true;_1.dragMoveTarget.moveToEvent(_1.dragOffsetX,_1.dragOffsetY);isc.$54j=false;return true}
,isc.A.$mq=function(){var _1=this;if(_1.dragMoveTarget)_1.dragMoveTarget.resizeToEvent(_1.resizeEdge);return true}
,isc.A.killEvent=function(){isc.EH.getWindow().event.cancelBubble=true;return false}
,isc.A.stopBubbling=function(){return isc.EH.STOP_BUBBLING}
,isc.A.startIdleTimer=function(){if(!isc.Page.isLoaded())return;if(!this.idleTimer){this.idleTimer=isc.Timer.setTimeout({target:isc.EH,methodName:this.$jv},this.IDLE_DELAY)}}
,isc.A.$jw=function(){this.idleTimer=null;var _1=isc.Page.handleEvent(null,this.IDLE);if(isc.Page.actionsArePendingForEvent(this.IDLE))this.startIdleTimer();return _1}
,isc.A.$h1=function(_1){this.$lc=_1+this.$jx++;if(this.$jx>9)this.$jx=0}
,isc.A.$h2=function(){if(this.$mr!=null)this.runTeas();this.$lc=null}
,isc.A.$ms=function(_1){isc.Timer.setTimeout(_1,0);var _2=this.$mr;if(_2==null)_2=this.$mr=[];_2.add(_1)}
,isc.A.runTeas=function(){this.$lc+="[E]";while(this.$mr!=null){var _1=this.$mr;this.$mr=null;if(this.logIsDebugEnabled()){this.logDebug("firing threadExitActions: "+this.echoAll(_1))}
for(var i=0;i<_1.length;i++){var _3=_1[i];if(isc.isA.String(_3))isc.eval(_3);else _3()}}}
,isc.A.dispatch=function(_1,_2){if(isc.$611!=null){delete isc.$611}
if(isc.Browser.isIE)_2=this.getWindow().event;this.$h1(this.$jy[_2.type]||_2.type);if(!isc.Browser.isMoz){var _3=_1.call(this,_2)}else{try{var _3=_1.call(this,_2)}catch(e){isc.Log.$am(e);throw e;}}
this.$h2();if(_3!=false&&this.$j3[_2.type]){var _4=this.$j3[_2.type](_2);if(_4==false)_3=false}
return _3}
,isc.A.captureEvent=function(_1,_2,_3,_4){var _5=this.getWindow(),_6=this.$mt;var _7=isc.$aq(this.$j0,this.$j1);_7.$ch=_5;_7.$j2=_4;var _8;if(!_6){if(_1[_2]!=null){var _8=this.$j4[_2]||_2.substring(2);this.$j3[_8]=_1[_2]}
_1[_2]=_7}else{if(isc.Browser.isIE){_1.attachEvent(_2,_7)}else if(isc.Browser.isDOM){_8=this.$j4[_2]||_2.substring(2);_1.addEventListener(_8,_7,false)}else{this.logWarn("Unable to use event listeners in this browser");this.$mt=false;return this.captureEvent(_1,_2,_3,_4)}}
if(_1===_5.document){var _9=(!_6||isc.Browser.isIE)?_2:_8;this.$649[_9]=_7}}
,isc.A.captureEvents=function(_1){var _2=this;if(window.isc_useEventListeners!=null)_2.$mt=window.isc_useEventListeners;var _3=isc.makeReverseMap(_2.eventTypes);isc.addProperties(_2,{reverseEventTypes:_3});if(_1==null)_1=this.getWindow();var _4=_1.document;isc.Page.setEvent(_2.LOAD,isc.Page.finishedLoading);if(isc.Browser.isIE){_1.attachEvent("onload",_2.handleLoad)}else if(isc.Browser.isDOM&&!isc.Browser.isOpera){_1.addEventListener("load",_2.handleLoad,true)}else{this.captureEvent(_1,"onload",_2.LOAD,_2.handleLoad)}
if(!this.$j8()){this.captureEvent(_1,"onunload",_2.UNLOAD,_2.handleUnload)}
this.captureEvent(_1,"onresize",_2.RESIZE,_2.handleResize);this.captureEvent(_4,"onmousedown",_2.MOUSE_DOWN,_2.handleMouseDown);this.captureEvent(_4,"onmousemove",_2.MOUSE_MOVE,_2.handleMouseMove);this.captureEvent(_4,"onmouseup",_2.MOUSE_UP,_2.handleMouseUp);this.captureEvent(_4,"onclick",_2.CLICK,_2.handleNativeClick);this.captureEvent(_4,"ondblclick",_2.DOUBLE_CLICK,_2.handleNativeClick);this.captureEvent(_4,"onscroll","scroll",_2.handleScroll);this.captureEvent(_4,"onmousewheel",_2.MOUSE_WHEEL,_2.handleMouseWheel);if(isc.Browser.isMoz){_1.addEventListener("DOMMouseScroll",_2.handleDOMMouseScroll,true)}
this.captureEvent(_4,"onmouseout",_2.MOUSE_OUT,_2.handleNativeMouseOut);this.captureEvent(_4,"oncontextmenu",_2.SHOW_CONTEXT_MENU,_2.handleContextMenu);this.captureEvent(_4,"onselectstart",_2.SELECT_START,_2.handleSelectStart);this.captureEvent(_1,"onselectstart",_2.SELECT_START,_2.handleSelectStart);if(isc.Browser.isIE){this.captureEvent(_4,"onselectionchange",_2.SELECTION_CHANGE,_2.handleSelectionChange)}
if(_1.isc_captureKeyEvents!=false){this.captureEvent(_4,"onkeydown",_2.KEY_DOWN,_2.$j9);this.captureEvent(_4,"onkeypress",_2.KEY_PRESS,_2.$kd);this.captureEvent(_4,"onkeyup",_2.KEY_UP,_2.$kb)}
if(isc.Browser.isIE){this.$mm=_1.ondragstart;this.$ml=_4.ondragstart;_4.ondragstart=_1.ondragstart=_2.handleNativeDragStart}}
,isc.A.$j8=function(){return(isc.Browser.isSafari&&isc.Browser.safariVersion<=412)}
,isc.A.releaseEvents=function(_1){var _2=this;if(_1==null)_1=this.getWindow();var _3=_1.document,_4=this.$649;for(var _5 in _4){if(!this.$mt){_3[_5]=null}else{if(isc.Browser.isIE){_3.detachEvent(_5,_4[_5])}else if(isc.Browser.isDOM){_3.removeEventListener(_5,_4[_5],false)}}}
if(isc.Browser.isIE){_3.ondragstart=null}
delete this.$649}
,isc.A.getLastEvent=function(){return this.lastEvent}
,isc.A.getEventType=function(_1){return(_1||this.lastEvent).eventType}
,isc.A.getTarget=function(_1){return(_1||this.lastEvent).target}
,isc.A.getDragTarget=function(){return this.dragTarget}
,isc.A.getX=function(_1){return(_1||this.lastEvent).x}
,isc.A.getY=function(_1){return(_1||this.lastEvent).y}
,isc.A.getScreenX=function(_1){return(_1||this.lastEvent).screenX}
,isc.A.getScreenY=function(_1){return(_1||this.lastEvent).screenY}
,isc.A.mouseIsDown=function(){return(this.$j6)}
,isc.A.mouseDownTarget=function(){return(this.mouseDownEvent?this.mouseDownEvent.target:null)}
,isc.A.getButtonNum=function(_1){return(_1||this.lastEvent).buttonNum}
,isc.A.leftButtonDown=function(_1){return((_1||this.lastEvent).buttonNum==1)}
,isc.A.rightButtonDown=function(_1){if(!_1)_1=this.lastEvent;return(_1.buttonNum==2)||(isc.Browser.isMac&&_1.ctrlKey)||(isc.Browser.isOpera&&(_1.ctrlKey&&_1.shiftKey))||((isc.Browser.isSafari&&(isc.Browser.safariVersion<125))&&_1.altKey)}
,isc.A.useSyntheticRightButtonEvents=function(){return isc.Browser.isOpera||(isc.Browser.isSafari&&(isc.Browser.safariVersion<125))}
,isc.A.getKeyEventCharacterValue=function(_1){return(_1||this.lastEvent).characterValue}
,isc.A.getKeyEventCharacter=function(_1){return String.fromCharCode(this.getKeyEventCharacterValue(_1))}
,isc.A.getKey=function(_1){return(_1||this.lastEvent).keyName}
,isc.A.getKeyName=function(_1){return this.getKey(_1)}
,isc.A.shiftKeyDown=function(_1){return(_1||this.lastEvent).shiftKey}
,isc.A.ctrlKeyDown=function(_1){return(_1||this.lastEvent).ctrlKey}
,isc.A.altKeyDown=function(_1){return(_1||this.lastEvent).altKey}
,isc.A.metaKeyDown=function(_1){return(_1||this.lastEvent).metaKey}
,isc.A.getKeyEventProperties=function(_1){if(_1==null)_1=this.getWindow().event;var _2=this.lastEvent;_2.nativeKeyTarget=(_1.target||_1.srcElement);_2.keyTarget=this.$ke;if(isc.isA&&isc.DynamicForm&&isc.isA.DynamicForm(this.$ke)){var _3=isc.DynamicForm.$mu(_2.nativeKeyTarget,_2.keyTarget);if(_3&&_3.item)_2.keyTarget=_3.item}
_2.eventType=this.getKeyEventType(_1.type);if(_2.eventType==this.KEY_PRESS){_2.characterValue=this.$mv(_1)}
var _4=this.determineEventKeyName(_1);if(_4!=null){_2.keyName=_4}else if(_2.eventType!=isc.EH.keyPress)delete _2.keyName;_2.nativeKeyCode=_1.keyCode;_2.shiftKey=(_1.shiftKey==true||(isc.Browser.isMoz&&_2.shiftKey));_2.ctrlKey=(_1.ctrlKey==true);_2.altKey=(_1.altKey==true);_2.metaKey=(_1.metaKey==true)}
,isc.A.getKeyEventType=function(_1){if(!_1)return;return this.$i7[_1]}
,isc.A.$mv=function(_1){if(isc.Browser.isIE)return(_1.keyCode||null);if(isc.Browser.isMoz){return(_1.which||null)}
return(_1.which||_1.keyCode||null)}
,isc.A.determineEventKeyName=function(_1){if(_1==null)return;var _2=_1.keyCode,_3=_1.which,_4=isc.EH,_5=_4.getKeyEventType(_1.type);if(isc.Browser.isIE){if(_5==_4.KEY_DOWN||_5==_4.KEY_UP){return _4.$iz[_2]}
if(_5==_4.KEY_PRESS){if(_4.$ka!=null)return _4.$ka;var _6=_4.$ja[_2];if(!_6&&this.getWindow().event.ctrlKey){_6=isc.EH.$mw(_2)}
return _6}}else if(isc.Browser.isMoz){if(_5==_4.KEY_DOWN||_5==_4.KEY_UP){return _4.$iz[_2]}else if(_5==_4.KEY_PRESS){if(_3==0&&_2!=0)return _4.$iz[_2];if(_4.$ka!=null)return _4.$ka;if(_2==0){return _4.$ja[_3]}else{return _4.$iz[_3]}}}else if(isc.Browser.isSafari){if(_5==_4.KEY_DOWN||_5==_4.KEY_UP){return _4.$iz[_2]}
var _7=(_3!=null?_3:_2);if(_7!=null&&_7!=0){if(this.getWindow().event.ctrlKey){return(isc.EH.$ja[_7]||isc.EH.$mw(_7))}
var _8=isc.EH.$ja[_7];if(_8==null)_8=isc.EH.$jb[_7]
return _8}else if(_5==this.KEY_PRESS){return null}}else{var _7=_3;if(_7==null||(_7==0&&_2))_7=_2
if(_7!=null)return isc.EH.$ja[_7]}
isc.Log.logWarn("EventHandler.determineEventKeyName(): Unable to determine key for '"+_1.type+"' event. Returning null");return null}
,isc.A.$mw=function(_1){if(_1==30)return"6";if(_1==31)return"-";return String.fromCharCode(_1+64)}
,isc.A.clearKeyEventProperties=function(){var _1=this.lastEvent;delete _1.eventType;delete _1.nativeKeyTarget;delete _1.characterValue;delete _1.keyName;delete _1.shiftKey;delete _1.ctrlKey;delete _1.altKey;delete _1.metaKey;delete this.$ka}
,isc.A.canvasDestroyed=function(_1){if(this.clickMaskUp())isc.EH.maskTarget(_1);if(_1.$rq)isc.Page.clearEvent(_1.$nx,_1.$rq);if(this.mouseDownEvent&&this.mouseDownEvent.target==_1)
this.mouseDownEvent.target=null;if(this.lastClickTarget==_1)this.lastClickTarget=null;if(this.lastEvent.target==_1)this.lastEvent.target=null;if(this.lastEvent.keyTarget==_1)this.lastEvent.keyTarget=null;if(this.$ke==_1)this.$ke=null;if(this.$k7==_1)this.$k7=null}
,isc.A.showClickMask=function(_1,_2,_3,_4){var _5;if(_2==true){_5=true;_2=isc.EH.SOFT}else if(_2==false||_2==null){_5=false;_2=isc.EH.HARD}else{_5=(_2!=isc.EH.HARD)}
if(_3==null)_3=[];else if(!isc.isAn.Array(_3))_3=[_3]
if(this.logIsInfoEnabled("clickMask")){this.logInfo("showing click mask, action: "+_1+(_5?", autoHide true ":", autoHide false ")+(_4?", ID: "+_4:""),"clickMask")}
var _6=this,_7=_6.clickMaskRegistry;if(_6.lastMoveTarget)_6.handleEvent(_6.lastMoveTarget,_6.MOUSE_OUT);delete _6.lastMoveTarget;var _8={autoHide:_5,mode:_2,ID:(_4!=null?_4:"cm_"+_6.$j7++),$mx:{}};this.$my(_3,_8);var _9=_7.last();_7.add(_8);_8.clickAction=_1;var _10=_6.getFocusCanvas();if(_10!=null&&!_3.contains(_10)){_10.blur();this.setMaskedFocusCanvas(_10,_8)}else if(_9!=null){this.setMaskedFocusCanvas(_9.$li,_8)}
var _11=this.isHardMask(_8);if(_11){var _12=isc.timeStamp();var _13;if(_7.length>1){var _14=false,_15=[];for(var i=_7.length-2;i>=0;i--){_15.add(_7[i]);if(this.isHardMask(_7[i])){_14=true;break}}
if(_14){for(var i=0;i<_15.length;i++){var _17=_15[i].$mx;if(_17){this.$mz(_17,_3,true,true)}}}else{_13=true;this.$mz(isc.Canvas._canvasList,_3,false,true)}}else{_13=true;this.$mz(isc.Canvas._canvasList,_3,false,true)}}
if(this.maskNativeTargets){if(_9==null){this.showScreenSpan(_8)}else if(_11){this.$m0(_8.$mx)}}
this.updateEventMasks();return _8.ID}
,isc.A.updateEventMasks=function(){var _1=this.clickMaskRegistry,_2=_1?_1[_1.length-1]:null;if(_2&&_2.autoHide){var _3={};isc.addProperties(_3,_2.$mx);this.showEventMasks(false,_3)}else{this.hideEventMasks()}}
,isc.A.$my=function(_1,_2){_1=this.$m1(_1,_2);for(var i=0;i<_1.length;i++){if(_1[i]==null)continue;_2.$mx[_1[i].getID()]=true}}
,isc.A.$m1=function(_1,_2){if(!_1||_1.length==0||!_2)return _1;for(var i=0;i<_1.length;i++)
_1[i]=this.$m2(_1[i]);var _4=_2.$mx;if(!_2.autoHide&&_1.length>0){var _5=_1.length;for(var i=0;i<_5;i++){var _6=_1[i];if(_6.topElement&&!_4[_6.topElement.getID()]&&!_1.contains(_6.topElement))
{this.logWarn("Attempting to unmask target canvas:"+_6.getID()+" with respect to a hard click mask. "+"This is not a top level Canvas - all ancestors of "+"this Canvas will also be unmasked.","clickMask");_1.add(_6.topElement)}}}
this.$m3(_1);this.$m4(_1);return _1}
,isc.A.$m4=function(_1){var _2=_1.length;for(var i=0;i<_2;i++){if(_1[i]==null)continue;this.$m5(_1[i],_1)}}
,isc.A.$m5=function(_1,_2,_3){if(_3&&!_2.contains(_1))_2.add(_1);if(_1.children){for(var i=0;i<_1.children.length;i++){this.$m5(_1.children[i],_2,true)}}}
,isc.A.$m3=function(_1){for(var i=0,_3=_1.length;i<_3;i++){var t=_1[i];if(t.parentElement&&_1.contains(t.parentElement))continue;this.$m6(_1[i],_1)}}
,isc.A.$m6=function(_1,_2,_3){if(_3&&!_2.contains(_1))_2.add(_1);var _4=_1.peers;if(_4){for(var i=0;i<_4.length;i++){this.$m6(_4[i],_2,true)}}
this.$m5(_1,_2)}
,isc.A.getClickMask=function(_1){var _2=this.clickMaskRegistry;if(isc.isAn.Object(_1)){return _2.contains(_1)?_1:null}
return _2.find(this.$cp,_1)}
,isc.A.isHardMask=function(_1){if(!isc.isAn.Object(_1))_1=this.getClickMask(_1);return _1==null?false:(_1.mode==isc.EH.HARD)}
,isc.A.getTopHardMask=function(){var _1=this.clickMaskRegistry;for(var i=_1.length-1;i>=0;i--){if(this.isHardMask(_1[i]))return _1[i]}
return null}
,isc.A.$mz=function(_1,_2,_3,_4){if(!_1)return;if(_3){for(var _5 in _1){var _6=this.$m2(_5);this.$m7(_6,_2,_4)}}else{for(var i=0;i<_1.length;i++){var _6=this.$m2(_1[i]);this.$m7(_6,_2,_4)}}}
,isc.A.$m7=function(_1,_2,_3){if(!isc.isA.Canvas(_1)||_1.destroyed){isc.Log.logWarn("showClickMask - attempting to remove invalid object :"+isc.Log.echo(_1)+" from tab order","clickMask");return}
if(_2&&_2[_1.getID()])return;if(_1.isDrawn()){if(_1.parentElement==null){if(!_3&&this.$m8&&this.$m8.isDrawn()&&_1.getZIndex()>=this.$m8.getZIndex())
{this.logDebug("lowering zIndex of: "+_1,"clickMask");_1.setZIndex(isc.EH.$m8.getZIndex()-1)}}}
if(_1.accessKey!=null&&_1.isDrawn()){_1.$m9(null)}}
,isc.A.hideClickMask=function(_1){if(this.logIsInfoEnabled("clickMask"))
this.logInfo("hideClickMask called with ID: "+_1,"clickMask");var _2=this.clickMaskRegistry;if(_2.length==0)return;if(_1==null){this.hideClickMask(_2[0].ID)
if(_2.length>0){this.hideClickMask()}else{this.logInfo("all clickmasks hidden","clickMask")}
return}
var _3=this.getClickMask(_1);if(_3==null)return;var _4=_2.indexOf(_3),_5=(_4==(_2.length-1)),_6=this.isHardMask(_3),_7=(_4>0?_2[_4-1]:null),_8,_9;if(this.logIsInfoEnabled("clickMask")){var _10="hiding clickMask ID: "+_1;if(_6)_10+="[autoHide:false]";else _10+="[autoHide:true]";if(_2.length<2){_10+=", all masks hidden"}else{_10+=" with index: "+_4+" of "+(_2.length-1)}
this.logInfo(_10,"clickMask")}
if(_6){_9=this.$na(_4,false);var _11=this.$na(_4,true);_8=(_11==null)}
var _12=_3.$li,_13=_3.$mx;_2.remove(_3);if(_7!=null){if(_13!=null){if(_7.$mx==null)_7.$mx={};isc.addProperties(_7.$mx,_13)}
if(_12&&!_7.$mx[_12.getID()]){this.setMaskedFocusCanvas(_12,_7)}}
if(this.$m8){if(_5&&_7==null){if(isc.Browser.isIE){isc.Timer.setTimeout({target:this.$m8,methodName:"hide"},0)}else{this.$m8.hide()}}else if(_8){if(_9){this.$m0(_9.$mx)}else this.$m8.sendToBack()}
if(_6){var _14;if(_9!=null){_14=[];for(var i=_4-1;i>=0;i--){var _16=_2[i];_14.addList(isc.getKeys(_16.$mx));if(_16==_9)break}}else{_14=isc.Canvas._canvasList}
this.$nb(_14,true)}
if(_12!=null&&!_12.destroyed&&!this.targetIsMasked(_12)){if(this.logIsInfoEnabled("clickMask")){this.logInfo("focusing in "+_12+" on clickMask hide","clickMask")}
var _17=(isc.Browser.isIE&&this.lastEvent.eventType==this.MOUSE_DOWN)
if(_17){this.$k7=_12}else{_12.focus()}}}
this.updateEventMasks()}
,isc.A.$na=function(_1,_2){var _3=this.clickMaskRegistry;if(_2){for(var i=_1+1;i<_3.length;i++){if(this.isHardMask(_3[i]))return _3[i]}}else{for(var i=_1-1;i>=0;i--){if(this.isHardMask(_3[i]))return _3[i]}}
return null}
,isc.A.$m2=function(_1){if(isc.isA.String(_1))return window[_1];return _1}
,isc.A.$nb=function(_1,_2){if(!_1||_1.length==0)return;for(var i=0;i<_1.length;i++){var _4=this.$m2(_1[i]);if(!_4)continue;if(_4.accessKey!=null&&_4.isDrawn()){_4.$m9(_4.accessKey)}
if(!_4.isDrawn()&&isc.isA.DynamicForm&&isc.isA.DynamicForm(_4)&&_4.items&&_4.items.length>0)
{var _5=_4.items[0];if(_5.containerWidget!=_4)_4=_5.containerWidget}
if(!_2&&_4.parentElement==null&&_4.getZIndex()<=this.$m8.getZIndex()&&_4!=this.$m8)
{_4.setZIndex(this.$m8.getZIndex()+1);this.logDebug("raised above screenspan: "+_4,"clickMask")}}}
,isc.A.clickMaskUp=function(_1){var _2=this.clickMaskRegistry;if(_1==null)return(_2.length>0);else return(_2.find("ID",_1)!=null)}
,isc.A.getAllClickMaskIDs=function(){var _1=this.clickMaskRegistry;if(_1.length<1)return[];return _1.getProperty("ID")}
,isc.A.showScreenSpan=function(_1){if(!this.$m8){this.$m8=isc.ScreenSpan.create({ID:"isc_EH_screenSpan",pointersToThis:[{object:this,property:"$m8"}]},this.clickMaskProperties)}
var _2=this.$m8;_2.show();if(!this.isHardMask(_1)){_2.sendToBack()}else{this.$m0(_1.$mx)}}
,isc.A.$m0=function(_1){this.$nc=true;var _2;for(var _3 in _1){var _4=this.$m2(_3);if(!_4||_4.destroyed||_4.parentElement!=null){continue}
if(_4.masterElement&&_1[_4.masterElement.getID()])continue;_4.bringToFront();if(_2==null)_2=_4.getZIndex(true);if(_4.peers){for(var i=0;i<_4.peers.length;i++){if(!_4.peers[i].isDrawn())continue;_2=Math.min(_2,_4.peers[i].getZIndex(true))}}}
if(_2!=null)this.$m8.setZIndex(_2-1);else this.$m8.bringToFront();this.$nc=false}
,isc.A.maskTarget=function(_1,_2){return this.maskTargets(_1,_2)}
,isc.A.maskTargets=function(_1,_2,_3){var _4=this.clickMaskRegistry;if(_1==null||_4.length==0)return;if(!isc.isAn.Array(_1))_1=[_1];else if(_1.length==0)return;var _5=(_2==null?_4[0]:(isc.isA.String(_2)?this.getClickMask(_2):_2));if(_5==null){this.logInfo("maskTargets called with invalid maskID - returning.","event")
return}
var _6=_1.length
for(var i=0;i<_6;i++){var _8=_1[i];if(!_3&&_8.children!=null){this.$m5(_8,_1)}
var _9=_8.parentElement;while(_9!=null){if(!_1.contains(_9)){_1.add(_9);if(_3)this.$m6(_9,_1)}
_9=_9.parentElement}
if(_3||!_9){this.$m6(_8,_1)}
if(_9)this.$m6(_9,_1)}
var _10=_4.indexOf(_5);var _11;for(var i=_10;i<_4.length;i++){_14=_4[i];if(this.isHardMask(_14))_11=i}
var _12;if(_11!=null)_12=[];for(var n=0;n<_1.length;n++){var _8=_1[n];if(_8.hasFocus)_8.blur();var _14,_11,_15=null;for(var i=_10;i<_4.length;i++){_14=_4[i];if(_14.$mx[_8.getID()]){_15=i;delete _14.$mx[_8.getID()]}}
if(_11!=null&&_15!=null&&(_11<=_15)){_12.add(_8)}}
if(_11!=null)this.$mz(_12,null,false,false)}
,isc.A.addUnmaskedTarget=function(_1,_2){return this.addUnmaskedTargets(_1,_2)}
,isc.A.addUnmaskedTargets=function(_1,_2){if(isc.$nd&&this.$nc)return;var _3=this.clickMaskRegistry;if(_1==null||_3.length==0)return;if(!isc.isAn.Array(_1))_1=[_1];if(_1.length==0)return;var _4;if(_2==null){_4=_3.last()}else{if(isc.isA.String(_2))_4=this.getClickMask(_2);else _4=_2}
if(_4==null){this.logInfo("addUnmaskedTargets called with invalid maskID - returning.","clickMask")
return}
var _5=_4;while(_5&&!this.isHardMask(_5)){_5=_3[_3.indexOf(_5)-1]}
if(_5!=null){if(isc.$nd&&_1.length==1&&_1[0].topElement!=null){return}}
_1=this.$m1(_1,_4);if(this.logIsDebugEnabled("clickMask")){this.logDebug("Added unmasked targets:"+_1.getProperty("ID")+" [+ decendants] to clickMask with ID: "+_4.ID,"clickMask")}
var _6=false;for(var i=_3.indexOf(_4)+1;i<_3.length;i++){if(this.isHardMask(_3[i]))_6=true}
for(var n=0;n<_1.length;n++){var _9=_1[n];if(_4.$mx==null)_4.$mx={};_4.$mx[_9.getID()]=true}
if(!_6){this.$nb(_1)}}
,isc.A.targetIsMasked=function(_1,_2){var _3=this.clickMaskRegistry;if(_3.length==0)return false;if(_1==null)return true;var _4;if(_2==null)_4=_3.last();else if(isc.isA.String(_2))_4=_3.find("ID",_2);else _4=_2;if(!isc.isAn.Object(_4)){this.logWarn("EventHandler.targetIsMasked() passed invalid maskID:"+_2,"clickMask");return false}
var _5=_3.indexOf(_4);for(var i=_5;i<_3.length;i++){if(i!=_5)_4=_3[i];if(_4.$mx){if(_4.$mx[_1.getID()])return false;if(isc.isA.DynamicForm!=null&&isc.isA.DynamicForm(_1)){var _7=_1.$ne(isc.EH.lastEvent);if(_7&&_7.item&&_7.item.form==_1&&_7.item.containerWidget!=_1&&_4.$mx[_7.item.containerWidget.getID()])return false}}}
return true}
,isc.A.clickMaskClick=function(_1){var _2=this.clickMaskRegistry.duplicate(),_3=_2.last();while(_3!=null&&(this.targetIsMasked(_1)||_1==this.$m8)){if(this.logIsInfoEnabled("clickMask")){this.logInfo("mouseDown on masked "+_1+(_3.clickAction!=null?" firing clickAction, ":"")+(_3.autoHide?"will hide mask"+(_3.mode==isc.EH.SOFT_CANCEL?" and block click":""):"will block click"))}
var _4=(_3.mode!=isc.EH.SOFT);this.$lj(_3)
if(_4)return false;_3=_2[_2.indexOf(_3)-1]}
return true}
,isc.A.$lj=function(_1){var _2=_1.autoHide,_3=_1.clickAction;if(_2==true)this.hideClickMask(_1.ID);if(_3!=null)this.fireCallback(_3)}
);isc.B._maxIndex=isc.C+159;isc.EventHandler.captureEvents();isc.ClassFactory.defineClass("Element",null,null,true);isc.A=isc.Element;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$wq=window.isc_insertAfterBodyStart;isc.A.$wr="isc_global_insertion_marker";isc.A.$n7="afterBegin";isc.A.$n9="afterEnd";isc.A.$n6="beforeBegin";isc.A.$n8="beforeEnd";isc.A.$w2=isc.Browser.isMoz?"border-left-width":"borderLeftWidth";isc.A.$w3=isc.Browser.isMoz?"border-top-width":"borderTopWidth";isc.A.$oi=isc.Browser.isMoz?"margin-left":"marginLeft";isc.A.$ok=isc.Browser.isMoz?"margin-top":"marginTop";isc.A.$27r="none";isc.A.$nk={};isc.A.$419={border:"borderStyle",borderWidth:"borderStyle",borderLeft:"borderLeftStyle",borderRight:"borderRightStyle",borderTop:"borderTopStyle",borderBottom:"borderBottomStyle",borderLeftWidth:"borderLeftStyle",borderRightWidth:"borderRightStyle",borderBottomWidth:"borderBottomStyle",borderTopWidth:"borderTopStyle"};isc.A.$nl={};isc.A.$39=";";isc.B.push(isc.A.get=function(_1,_2){_2=_2||this.getDocument();if(isc.Browser.isDOM)return _2.getElementById(_1)}
,isc.A.$mk=function(_1){if(!_1)_1=document;if(isc.Browser.isIE){var _2=_1.selection,_3=_2.type.toLowerCase(),_4=(_3=="text"||_3=="none");if(!_2)return null;if(_4){var _5=_2.createRange();return _5?_5.parentElement():null}else{var _5=_2.createRange(),_6;for(var i=0;i<_5.length;i++){if(!_6){_6=_5(i).parentElement}else{while(!_6.contains(_5(i))){_6=_6.parentElement}}}
return _6}}}
,isc.A.findAttribute=function(_1,_2,_3){if(!_1)return null;if(_1[_2]==_3||(_1.getAttribute&&_1.getAttribute(_2)==_3)){return _1}
var _4=_1.childNodes;for(var i=0;i<_4.length;i++){var _6=this.findAttribute(_4[i],_2,_3);if(_6)return _6}
return null}
,isc.A.getInsertionMarkerHTML=function(){return"<span id='"+this.$wr+"' style='display:none'></span>"}
,isc.A.getInsertionMarker=function(){return document.getElementById(this.$wr)}
,isc.A.createAbsoluteElement=function(_1,_2){var _3=_2||this.getWindow(),_4=this.getDocumentBody(true);if(_4==null&&!isc.Element.noBodyTagMessageShown){isc.Element.noBodyTagMessageShown=true;var _5="Error: Attempt to write content into a page outside the BODY tag.  Isomorphic "+"SmartClient requires this tag be present and all widgets be written out inside "+"it.\r"+"Please ensure your file has a BODY tag and any code to draw SmartClient widgets "+"is enclosed in this tag.";this.logError(_5);return}
if(this.$wq){return isc.Element.insertAdjacentHTML(_4,this.$n7,_1,true)}
if(isc.Browser.isIE){if(!this.$w7){if(_4.childNodes.length<2){isc.Element.insertAdjacentHTML(_4,this.$n7,this.getInsertionMarkerHTML())}else{var _6=_4.lastChild;while(_6&&_6.nodeType==3)_6=_6.previousSibling;if(_6!=null){isc.Element.insertAdjacentHTML(_6,this.$n6,this.getInsertionMarkerHTML())}else{isc.Element.insertAdjacentHTML(_4,this.$n7,this.getInsertionMarkerHTML())}}
this.$w7=this.getInsertionMarker()}
return isc.Element.insertAdjacentHTML(this.$w7,this.$n9,_1,true)}else{return isc.Element.insertAdjacentHTML(_4,this.$n8,_1,true)}}
,isc.A.insertAdjacentHTML=function(_1,_2,_3,_4){if(isc.isA.String(_1))_1=isc.Element.get(_1);if(!_1)this.logWarn("insertAdjacentHTML: element is null for where: '"+_2+"' with html: "+_3);if(isc.Browser.isIE||isc.Browser.isOpera){_1.insertAdjacentHTML(_2,_3);return}
var _5;if(_4){var _6=_1.ownerDocument.createElement("DIV");_6.innerHTML=_3;_5=_6.firstChild}else{var _7=_1.ownerDocument.createRange();_7.setStartBefore(_1);_5=_7.createContextualFragment(_3)}
switch(_2){case"beforeBegin":_1.parentNode.insertBefore(_5,_1)
break;case"afterBegin":_1.insertBefore(_5,_1.firstChild);break;case"beforeEnd":_1.appendChild(_5);break;case"afterEnd":if(_1.nextSibling)_1.parentNode.insertBefore(_5,_1.nextSibling);else _1.parentNode.appendChild(_5);break}
if(_4)return _5}
,isc.A.clear=function(_1){if(_1==null)return;if(isc.Page.isLoaded()&&isc.Browser.isIE){_1.outerHTML=isc.emptyString;return}
if(_1.parentNode){_1.parentNode.removeChild(_1)}else{isc.Log.logWarn("element parentNode null");_1.innerHTML=""}}
,isc.A.isBorderBox=function(_1){if(!_1)return;if(!isc.Browser.isMoz)return isc.Browser.isBorderBox;return(_1.style.MozBoxSizing=="border-box")}
,isc.A.getScrollHeight=function(_1){if(_1==null)return 0;var _2=((_1.scrollHeight!=null&&_1.scrollHeight!="undefined")?_1.scrollHeight:_1.offsetHeight);var _3=this.$yq(_1);return _3>_2?_3:_2}
,isc.A.$yq=function(_1){if(_1.childNodes==null)return 0;var _2=0,_3=document.ELEMENT_NODE||1,_4=this.logIsDebugEnabled("sizing");for(var i=0;i<_1.childNodes.length;i++){var _6=_1.childNodes.item(i);if(_6.nodeType!=_3)continue;var _7=isc.Element.getComputedStyleAttribute(_6,"position");var _8=0;if(_7==isc.Canvas.ABSOLUTE||_7==isc.Canvas.RELATIVE){_8+=isc.Element.getOffsetTop(_6)}else{continue}
var _9=_6.getAttribute("eventProxy"),_10;if(_9!=null&&!isc.isAn.emptyString(_9)&&!window[_9].$s0&&isc.isA.Function(window[_9].getVisibleHeight))
{_10=window[_9].getVisibleHeight()}else{_10=isc.Element.getVisibleHeight(_6)}
var _11=_8+_10;if(_7==isc.Canvas.ABSOLUTE&&(_1.style.overflow==isc.Canvas.SCROLL||_1.style.overflow==isc.Canvas.AUTO||_1.style.overflow==isc.Canvas.HIDDEN))
_11-=isc.Element.getBottomMargin(_6);if(_11>_2)_2=_11}
return _2}
,isc.A.getScrollWidth=function(_1){if(_1==null)return 0;var _2=((_1.scrollWidth!=null&&_1.scrollWidth!="undefined")?_1.scrollWidth:_1.offsetWidth);var _3=this.$yr(_1);return _3>_2?_3:_2}
,isc.A.$yr=function(_1){if(_1.childNodes==null)return 0;var _2=0,_3=document.ELEMENT_NODE||1,_4=this.logIsDebugEnabled("sizing");for(var i=0;i<_1.childNodes.length;i++){var _6=_1.childNodes.item(i);if(_6.nodeType!=_3)continue;var _7=isc.Element.getComputedStyle(_6,["position","display","left"]);var _8=0;if(_7.position==isc.Canvas.ABSOLUTE||_7.position==isc.Canvas.RELATIVE)
{_8=isc.Element.getOffsetLeft(_6)}else{continue}
var _9=_6.getAttribute("eventProxy"),_10;if(_9!=null&&!isc.isAn.emptyString(_9)&&!window[_9].$sv&&isc.isA.Function(window[_9].getVisibleWidth))
{_10=window[_9].getVisibleWidth()}else{_10=isc.Element.getVisibleWidth(_6)}
var _11=_8+_10;if(_1.style.overflow==isc.Canvas.SCROLL||_1.style.overflow==isc.Canvas.HIDDEN||_1.style.overflow==isc.Canvas.AUTO){_11-=isc.Element.getRightMargin(_6)}
if(_11>_2)_2=_11;if(_4){this.logInfo("getChildNodesRight: child node "+i+" of "+_1.childNodes.length+" ("+this.echoLeaf(_6)+")"+" left:"+_8+", width: "+_10+", right:"+_11,"sizing")}}
return _2}
,isc.A.getElementRect=function(_1){var _2=this.getDocumentBody(),_3=this.$s4(_1,_2),_4=this.$s5(_1,_2);var _5=0,_6=0;if(_1.style&&_1.style.overflow=="visible"){_5=this.getScrollWidth(_1);_6=this.getScrollHeight(_1)}
_5=Math.max(_1.offsetWidth,_1.clientWidth,_5);_6=Math.max(_1.offsetHeight,_1.clientHeight,_6);return[_3,_4,_5,_6]}
,isc.A.getInnerWidth=function(_1){var _2=_1.style.width;if(_2!=null&&!isc.isAn.emptyString(_2)){_2=parseInt(_2);if(isc.isA.Number(_2))return _2}
var _3=_1.clientWidth,_4=parseInt(this.getComputedStyleAttribute("paddingLeft")),_5=parseInt(this.getComputedStyleAttribute("paddingRight")),_6=_4+_5;if(isc.isA.Number(_6))_3-=_6;return _3}
,isc.A.getInnerHeight=function(_1){var _2=_1.style.height;if(_2!=null&&!isc.isAn.emptyString(_2)){_2=parseInt(_2);if(isc.isA.Number(_2))return _2}
var _3=_1.clientHeight,_4=parseInt(this.getComputedStyleAttribute("paddingTop")),_5=parseInt(this.getComputedStyleAttribute("paddingBottom")),_6=_4+_5;if(isc.isA.Number(_6))_3-=_6;return _3}
,isc.A.getNativeInnerWidth=function(_1){if(isc.Browser.isMoz)return this.getInnerWidth(_1);var _2=_1.offsetWidth;if(!_2)_2=this.getInnerWidth(_1);return _2}
,isc.A.getNativeInnerHeight=function(_1){if(isc.Browser.isMoz)return this.getInnerHeight(_1);var _2=_1.offsetHeight;if(!_2)_2=this.getInnerHeight(_1);return _2}
,isc.A.getTopMargin=function(_1){if(_1!=null){var _2;if(_1.style!=null)_2=parseInt(_1.style.marginTop);if(isc.isA.Number(_2))return _2;if(_1.className!=null)return isc.Element.$th(_1.className)}
return 0}
,isc.A.getBottomMargin=function(_1){if(_1!=null){var _2;if(_1.style!=null)_2=parseInt(_1.style.marginBottom);if(isc.isA.Number(_2))return _2;if(_1.className!=null)return isc.Element.$ti(_1.className)}
return 0}
,isc.A.getLeftMargin=function(_1){if(_1!=null){var _2;if(_1.style!=null)_2=parseInt(_1.style.marginLeft);if(isc.isA.Number(_2))return _2;if(_1.className!=null)return isc.Element.$tf(_1.className)}
return 0}
,isc.A.getRightMargin=function(_1){if(_1!=null){var _2;if(_1.style!=null)_2=parseInt(_1.style.marginRight);if(isc.isA.Number(_2))return _2;if(_1.className!=null)return isc.Element.$tg(_1.className)}
return 0}
,isc.A.getHMarginSize=function(_1){return isc.Element.getLeftMargin(_1)+isc.Element.getRightMargin(_1)}
,isc.A.getVMarginSize=function(_1){return isc.Element.getTopMargin(_1)+isc.Element.getBottomMargin(_1)}
,isc.A.getTopBorderSize=function(_1){if(_1==null)return 0;if(isc.Browser.isOpera&&_1.currentStyle.borderTopStyle==this.$27r)return 0;var _2=(isc.Browser.isIE||isc.Browser.isOpera?parseInt(_1.currentStyle.borderTopWidth):parseInt(isc.Element.getComputedStyleAttribute(_1,"borderTopWidth")));return isNaN(_2)?0:_2}
,isc.A.getBottomBorderSize=function(_1){if(_1==null)return 0;if(isc.Browser.isOpera&&_1.currentStyle.borderBottomStyle==this.$27r)return 0;var _2=(isc.Browser.isIE||isc.Browser.isOpera?parseInt(_1.currentStyle.borderBottomWidth):parseInt(isc.Element.getComputedStyleAttribute(_1,"borderBottomWidth")));return isNaN(_2)?0:_2}
,isc.A.getLeftBorderSize=function(_1){if(_1==null)return 0;if(isc.Browser.isOpera&&_1.currentStyle.borderLeftStyle==this.$27r)return 0;var _2=(isc.Browser.isIE||isc.Browser.isOpera?parseInt(_1.currentStyle.borderLeftWidth):parseInt(isc.Element.getComputedStyleAttribute(_1,"borderLeftWidth")));return isNaN(_2)?0:_2}
,isc.A.getRightBorderSize=function(_1){if(_1==null)return 0;if(isc.Browser.isOpera&&_1.currentStyle.borderRightStyle==this.$27r)return 0;var _2=(isc.Browser.isIE||isc.Browser.isOpera?parseInt(_1.currentStyle.borderRightWidth):parseInt(isc.Element.getComputedStyleAttribute(_1,"borderRightWidth")));return isNaN(_2)?0:_2}
,isc.A.getVBorderSize=function(_1){return isc.Element.getTopBorderSize(_1)+isc.Element.getBottomBorderSize(_1)}
,isc.A.getHBorderSize=function(_1){return isc.Element.getLeftBorderSize(_1)+isc.Element.getRightBorderSize(_1)}
,isc.A.getVisibleWidth=function(_1){if(_1==null)return 0;var _2=isc.Element.getComputedStyleAttribute(_1,"overflow"),_3;if(_2==isc.Canvas.VISIBLE||!isc.isA.Number(parseInt(_1.style.width))){_3=isc.Element.getScrollWidth(_1)+isc.Element.getHBorderSize(_1)}else{_3=parseInt(_1.style.width)}
return _3+isc.Element.getHMarginSize(_1)}
,isc.A.getVisibleHeight=function(_1){if(_1==null)return 0;var _2=isc.Element.getComputedStyleAttribute(_1,"overflow"),_3;if(_2==isc.Canvas.VISIBLE||!isc.isA.Number(parseInt(_1.style.height))){_3=isc.Element.getScrollHeight(_1)+isc.Element.getVBorderSize(_1)}else{_3=parseInt(_1.style.height)}
return _3+isc.Element.getVMarginSize(_1)}
,isc.A.getOffsetLeft=function(_1){if(_1==null){this.logWarn("getOffsetLeft: passed null element");return 0}
var _2=_1.offsetLeft;if(_1.$ys==_2){return _1.$yt}else{}
var _3=parseInt(isc.Element.getComputedStyleAttribute(_1,"marginLeft"));if(isc.isA.Number(_3)&&_3>0){_2-=_3}
var _4=this.getDocumentBody(),_5,_6="px",_7=_1.style.position;if(isc.Browser.isMoz){if(_1.offsetParent==null)return _2;if(_1.offsetParent!=_4){_5=this.ns.Element.getComputedStyle(_1.offsetParent,["borderLeftWidth","overflow"]);var _8=isc.Browser.geckoVersion,_9=(_5.overflow!="visible")&&(_8>=20051111||(_7==isc.Canvas.ABSOLUTE&&_5.overflow!="hidden")),_10=(_8>20020826&&(_1.offsetParent.style.MozBoxSizing=="border-box"));if(_10!=_9){if(_10){_2-=(isc.isA.Number(parseInt(_5.borderLeftWidth))?parseInt(_5.borderLeftWidth):0)}
if(_9){_2+=(isc.isA.Number(parseInt(_5.borderLeftWidth))?parseInt(_5.borderLeftWidth):0)}}}}
if(isc.Browser.isIE&&!isc.Browser.isIE8Strict){var _11=_1.offsetParent,_5;if(_5!=_4)_5=_11.currentStyle;var _12=(_1.currentStyle.height!=isc.Canvas.AUTO||_1.currentStyle.width!=isc.Canvas.AUTO);var _13=true;while(_11!=_4){if(_5.position==isc.Canvas.ABSOLUTE)_13=false;if(_5.width==isc.Canvas.AUTO&&_5.height==isc.Canvas.AUTO&&_5.position==isc.Canvas.RELATIVE){if(_13&&isc.isA.String(_5.borderLeftWidth)&&_5.borderLeftWidth.contains(_6)){_2-=parseInt(_5.borderLeftWidth)}
if(_12){if(isc.isA.String(_5.marginLeft)&&_5.marginLeft.contains(_6))
{var _14=parseInt(_5.marginLeft);if(_14>0)_2-=_14}
if(_11.offsetParent!=_4){var _15=_11.offsetParent.currentStyle.padding;if(isc.isA.String(_15)&&_15.contains(_6)){_2-=parseInt(_15)}}else{_2-=(_4.leftMargin?parseInt(_4.leftMargin):0)}}}
_7=_11.style.position;_11=_11.offsetParent;if(_11!=document.body){_5=_11.currentStyle}}}
if(isc.Browser.isSafari&&isc.Browser.safariVersion<525.271){if(_1.offsetParent!=null&&_1.offsetParent!=_4){var _16=this.ns.Element.getComputedStyle(_1.offsetParent,["borderLeftWidth"]).borderLeftWidth;if(_16!=null)_16=parseInt(_16);if(isc.isA.Number(_16))_2-=_16}}
_1.$ys=_1.offsetLeft;_1.$yt=_2;return _2}
,isc.A.getOffsetTop=function(_1){if(_1==null){this.logWarn("getOffsetTop: passed null element");return 0}
var _2=_1.offsetTop;if(_1.$yu==_2){return _1.$yv}else{}
var _3=parseInt(isc.Element.getComputedStyleAttribute(_1,"marginTop"));if(isc.isA.Number(_3)&&_3>0){_2-=_3}
var _4=this.getDocumentBody(),_5,_6="px",_7=_1.style.position;if(isc.Browser.isMoz){if(_1.offsetParent==null)return _2;if(_1.offsetParent!=_4){_5=this.ns.Element.getComputedStyle(_1.offsetParent,["overflow","borderTopWidth"]);var _8=(_5.overflow!="visible")&&(isc.Browser.geckoVersion>=20051111||(_7==isc.Canvas.ABSOLUTE&&_5.overflow!="hidden")),_9=(isc.Browser.geckoVersion>20020826&&_1.offsetParent.style.MozBoxSizing=="border-box");if(_9!=_8){if(_9){_2-=(isc.isA.Number(parseInt(_5.borderTopWidth))?parseInt(_5.borderTopWidth):0)}
if(_8){_2+=(isc.isA.Number(parseInt(_5.borderTopWidth))?parseInt(_5.borderTopWidth):0)}}}}
if(isc.Browser.isIE){if(_1.offsetParent&&_1.offsetParent!=_4){_5=_1.offsetParent.currentStyle;if(_5.position==isc.Canvas.RELATIVE&&_5.height==isc.Canvas.AUTO&&_5.width==isc.Canvas.AUTO&&isc.isA.String(_5.borderTopWidth)&&_5.borderTopWidth.contains(_6)){_2-=parseInt(_5.borderTopWidth)}}}
if(isc.Browser.isSafari&&isc.Browser.safariVersion<525.271){if(_1.offsetParent&&_1.offsetParent!=_4){var _10=this.ns.Element.getComputedStyle(_1.offsetParent,["borderTopWidth"]).borderTopWidth;if(_10!=null)_10=parseInt(_10);if(isc.isA.Number(_10))_2-=_10}}
_1.$yu=_1.offsetTop;_1.$yv=_2;return _2}
,isc.A.$s4=function(_1,_2,_3){return this.$yw(isc.Canvas.LEFT,_1,_2,_3)}
,isc.A.$s5=function(_1,_2){return this.$yw(isc.Canvas.TOP,_1,_2)}
,isc.A.$yw=function(_1,_2,_3,_4){if(_3==null||_2==null){return 0}
var _5=_2.offsetParent;if(isc.Browser.isMoz&&_5==null)return 0;var _6=_3.offsetParent,_7=_2,_8=0,_9=(_1==isc.Canvas.LEFT),_10=(_9?this.$w2:this.$w3),_11=(_9?this.$oi:this.$ok);if(!_9)_4=false;else if(_4==null)_4=(isc.Page.getTextDirection()==isc.Canvas.RTL);var _12=0;while(_5!=_3&&_5!=_6){var _13=(_9?this.ns.Element.getOffsetLeft(_7):this.ns.Element.getOffsetTop(_7));_8+=_13;if(!_4){_8-=((_9?_5.scrollLeft:_5.scrollTop)||0)}else{if(isc.isA.Number(_5.scrollLeft)){var _14=(_5.scrollWidth-_5.clientWidth);_8+=(_14-_5.scrollLeft)}}
var _15,_16,_17;if(isc.Browser.isIE||isc.Browser.isOpera){_15=_5.currentStyle;if(isc.Browser.isOpera&&(_9?_15.borderLeftStyle==this.$27r:_15.borderTopStyle==this.$27r))_16=null;else _16=parseInt(_15[_10]);if(isc.isA.Number(_16))_8+=_16;_17=parseInt(_15[_11]);if(isc.isA.Number(_17)&&_17>0)_8+=_17}else if(isc.Browser.isMoz){_15=document.defaultView.getComputedStyle(_5,null);_16=parseInt(_15.getPropertyValue(_10));_8+=_16;_17=parseInt(_15.getPropertyValue(_11));if(_17>0)_8+=_17}else{_16=parseInt(this.getComputedStyleAttribute(_5,_10));if(isc.isA.Number(_16))_8+=_16;_17=parseInt(this.getComputedStyleAttribute(_5,_11));if(isc.isA.Number(_17)&&_17>0)_8+=_17}
_7=_5;_5=_7.offsetParent;_12++}
_8+=(_9?this.ns.Element.getOffsetLeft(_7):this.ns.Element.getOffsetTop(_7));if(_5==_6){_8-=(_9?this.ns.Element.getOffsetLeft(_3):this.ns.Element.getOffsetTop(_3))}
return _8}
,isc.A.getStyleEdges=function(_1){if(isc.Browser.isSafari&&!isc.Element.$x1){isc.Browser.isStrict=isc.Element.$x2();isc.Element.$x1=true}
if(_1==null)return null;var _2;if(this.$nk[_1]!==_2)return this.$nk[_1];var _3=(isc.Browser.isMoz&&isc.Browser.geckoVersion<20040616),_4;if(_3){_4=this.getStyleDeclaration(_1)}else{var _5=isc.Browser.isIE?this.$x3:this.$x4;_4=this.$x5(_1,_5)}
this.$nk[_1]=_4;return _4}
,isc.A.$x2=function(){if(document.compatMode!=null){return document.compatMode=="CSS1Compat"}
var _1="<TABLE cellspacing=0 cellpadding=2 border=0><tr><td height=30>x</td></tr></TABLE>"
var _2=isc.Element.createAbsoluteElement(_1);var _3=_2.offsetHeight>30;isc.Element.clear(_2);return _3}
,isc.A.$x5=function(_1,_2){var _3=(isc.Browser.isIE||isc.Browser.isOpera||isc.Browser.isSafari||(isc.Browser.isMoz&&isc.Browser.geckoVersion>=20080205));if(!this.$x6){this.createAbsoluteElement("<TABLE CELLPADDING=81 STYLE='position:absolute;left:0px;top:-300px;'><TR><TD "+(isc.Browser.isIE8Strict?" ID=isc_cellStyleTester STYLE='border:0px;margin:0px'><DIV ID=isc_cellInnerStyleTester>"+isc.Canvas.blankImgHTML(30,30)+"</DIV></TD></TR></TABLE>":" ID=isc_cellStyleTester>&nbsp;</TD></TR></TABLE>"));this.$x6=isc.Element.get("isc_cellStyleTester");if(isc.Browser.isIE8Strict){this.$62a=isc.Element.get("isc_cellInnerStyleTester")}
this.$x7="81px";this.$x8="-16384px";if(_3){this.createAbsoluteElement("<DIV ID=isc_styleTester STYLE='position:absolute;left:0px;top:-100px;'>&nbsp;</DIV>");this.$x9=isc.Element.get("isc_styleTester");this.$ya=["marginLeft","marginTop","marginRight","marginBottom"];if(isc.Browser.isIE8Strict){this.$ya.addList(["borderLeftWidth","borderTopWidth","borderRightWidth","borderBottomWidth"])}}}
this.$x6.className=_1;var _4=this.getComputedStyle(this.$x6,_2);var _5=this.$x7;if(_4.paddingLeft==_5)_4.paddingLeft=null;if(_4.paddingTop==_5)_4.paddingTop=null;if(_4.paddingRight==_5)_4.paddingRight=null;if(_4.paddingBottom==_5)_4.paddingBottom=null;if(isc.Browser.isIE8Strict){var _6=this.$62a,_7=_6.offsetLeft,_8=_6.offsetTop;if(_7==81)_4.paddingLeft=null;if(_8==81)_4.paddingTop=null;if(this.$x6.offsetWidth-_7-30==81){_4.paddingRight=null}
if(this.$x6.offsetHeight-_8-30==81){_4.paddingBottom=null}}
if(isc.Browser.isSafari){if(isc.Browser.safariVersion<419.3){_5=isc.Canvas.AUTO;if(_4.paddingLeft==_5)_4.paddingLeft=null;if(_4.paddingTop==_5)_4.paddingTop=null;if(_4.paddingRight==_5)_4.paddingRight=null;if(_4.paddingBottom==_5)_4.paddingBottom=null}
_5=this.$x8;if(_4.marginTop==_5)_4.marginTop=null;if(_4.marginBottom==_5)_4.marginBottom=null}
if(_3){this.$x9.className=_1;var _9=this.getComputedStyle(this.$x9,this.$ya);_4.marginLeft=_9.marginLeft;_4.marginRight=_9.marginRight;_4.marginTop=_9.marginTop;_4.marginBottom=_9.marginBottom;if(isc.Browser.isIE8Strict){_4.borderLeftWidth=_9.borderLeftWidth;_4.borderRightWidth=_9.borderRightWidth;_4.borderTopWidth=_9.borderTopWidth;_4.borderBottomWidth=_9.borderBottomWidth}}
return _4}
,isc.A.getComputedStyle=function(_1,_2){var _3,_4,_5;if(isc.isA.String(_1)){_3=isc.Element.get(_1)}else{_3=_1}
if(_3==null||!isc.isAn.Object(_3)){this.logWarn("getComputedStyle: Unable to get to DOM element specified by '"+_1+"'."+this.getStackTrace());return null}
if(isc.Browser.isIE||isc.Browser.isOpera){_4=_3.currentStyle;if(_2==null)_2=this.$yb;var _6=isc.applyMask(_4,_2);return _6}
if(_2==null){_2=this.$yc}else if(isc.isAn.Array(_2)){var _7={},_8=this.$yc;for(var i=0;i<_2.length;i++){_7[_2[i]]=_8[_2[i]]}
_2=_7}
var _10=isc.Browser.isSafari&&isc.Browser.safariVersion<312,_11;if(_10){_4=_3.style;_11=this.getStyleDeclaration(_3.className)}else{_4=document.defaultView.getComputedStyle(_3,null)}
_5={};for(var _12 in _2){_5[_12]=_4.getPropertyValue(_2[_12]);if(_10&&_5[_12]==null&&_11!=null&&_11[_12]!=null&&!isc.isAn.emptyString(_11[_12]))
{_5[_12]=_11[_12]}}
return _5}
,isc.A.getComputedStyleAttribute=function(_1,_2){if(_1==null||_2==null)return null;if(isc.Browser.isIE||isc.Browser.isOpera){if(_1.currentStyle==null)return null;if(isc.Browser.isOpera&&this.$419[_2]!=null&&_1.currentStyle[this.$419[_2]]==this.$27r)return 0;return _1.currentStyle[_2]}
if(isc.Browser.isSafari){var _3=null;if(_1.style)_3=_1.style[_2];if((_3==null||isc.isAn.emptyString(_3))&&_1.className)
{var _4=isc.Element.getStyleEdges(_1.className);if(_4)_3=_4[_2]}
if(isc.isAn.emptyString(_3))return null;return _3}
var _5=this.$yc;var _6=this.$yd=this.$yd||document.defaultView;var _7=(_5[_2]||_2),_8=_6.getComputedStyle(_1,null);return _8.getPropertyValue(_7)}
,isc.A.getStyleDeclaration=function(_1,_2){if(!_1)return null;if(!isc.allowDuplicateStyles)_2=false;if(isc.Browser.isSafari&&isc.Browser.safariVersion>=312){_1=_1.toLowerCase()}
var _3="."+_1,_4=", ";var _5,_6=_2?[]:null;for(var i=document.styleSheets.length-1;i>=0;i--){var _8=this.$ye(document.styleSheets[i]);if(_8==null)continue;for(var j=_8.length-1;j>=0;j--){var _10=_8[j].selectorText;if(_10==null)continue;if(isc.Browser.isMoz){var _11=_10.split(_4);for(var k=0;k<_11.length;k++){if(_11[k]==_3){_5=_8[j].style;if(_5!=null){if(_2)_6[_6.length]=_5;else return _5}}}}else{if(_10==_3){_5=_8[j].style;if(_5!=null){if(_2)_6[_6.length]=_5;else return _5}}}}}
if(_2&&_6.length>0)return _6;return null}
,isc.A.$ye=function(_1){if(!this.$yf){var _2="try{return $yg.rules||$yg.cssRules}"+"catch(e){isc.Page.$yh = true}";this.$yf=new Function("$yg",_2)}
return this.$yf(_1)}
,isc.A.getStyleText=function(_1,_2){if(!isc.allowDuplicateStyles)_2=false;var _3=this.$nl,_4=_3[_1];if(_4!=null)return _4;var _5=this.getStyleDeclaration(_1,_2);if(_5==null){if(!isc.Browser.isSafari||isc.Page.isLoaded())
this.$nl[_1]=isc.emptyString;return isc.emptyString}
if(_2){for(var i=_5.length-1;i>-1;i--){var _7=_5[i];var _8=_7.cssText;if(_8==null)continue;if(!_8.endsWith(this.$39))_8+=this.$39;if(_4==null)_4=_8;else _4+=_8}
if(_4==null)_4=isc.$ad}else{_4=(_5.cssText||isc.$ad)}
if(!isc.endsWith(_4,isc.semi))_4+=isc.semi;return(_3[_1]=_4)}
,isc.A.$50f=function(){isc.Element.$nk={};isc.Element.$nl={};isc.Element.$yj=isc.Element.$yk=isc.Element.$yl=null}
,isc.A.$th=function(_1){return this.$sd(_1).top}
,isc.A.$ti=function(_1){return this.$sd(_1).bottom}
,isc.A.$tf=function(_1){return this.$sd(_1).left}
,isc.A.$tg=function(_1){return this.$sd(_1).right}
,isc.A.$sd=function(_1){if(this.$yk==null)this.$yk={};else if(this.$yk[_1]!=null){return this.$yk[_1]}
var _2={top:0,bottom:0,left:0,right:0},_3=isc.Element.getStyleEdges(_1);if(_3==null)return _2;var _4=_3.marginTop,_5=_3.marginBottom,_6=_3.marginLeft,_7=_3.marginRight,_8=isc.px;if(isc.isA.String(_4)&&_4.endsWith(_8))
_2.top=parseInt(_4);if(isc.isA.String(_5)&&_5.endsWith(_8))
_2.bottom=parseInt(_5);if(isc.isA.String(_6)&&_6.endsWith(_8))
_2.left=parseInt(_6);if(isc.isA.String(_7)&&_7.endsWith(_8))
_2.right=parseInt(_7);this.$yk[_1]=_2;return _2}
,isc.A.$tn=function(_1){return this.$tj(_1).top}
,isc.A.$to=function(_1){return this.$tj(_1).bottom}
,isc.A.$tl=function(_1){return this.$tj(_1).left}
,isc.A.$tm=function(_1){return this.$tj(_1).right}
,isc.A.$tj=function(_1){if(this.$yj==null)this.$yj={};else if(this.$yj[_1]!=null){return this.$yj[_1]}
var _2={top:0,bottom:0,left:0,right:0},_3=isc.Element.getStyleEdges(_1);if(_3==null)return _2;var _4=_3.borderTopWidth,_5=_3.borderBottomWidth,_6=_3.borderLeftWidth,_7=_3.borderRightWidth,_8=isc.px;if(isc.isA.String(_4)&&_4.endsWith(_8))
_2.top=parseInt(_4);if(isc.isA.String(_5)&&_5.endsWith(_8))
_2.bottom=parseInt(_5);if(isc.isA.String(_6)&&_6.endsWith(_8))
_2.left=parseInt(_6);if(isc.isA.String(_7)&&_7.endsWith(_8))
_2.right=parseInt(_7);this.$yj[_1]=_2;return _2}
,isc.A.$ym=function(_1){return this.$tn(_1)+this.$to(_1)}
,isc.A.$yn=function(_1){return this.$tl(_1)+this.$tm(_1)}
,isc.A.$tt=function(_1,_2){var _3=this.$tq(_1);if(_2&&_3.nullTop)return null;return _3.top}
,isc.A.$tu=function(_1,_2){var _3=this.$tq(_1);if(_2&&_3.nullBottom)return null;return _3.bottom}
,isc.A.$tr=function(_1,_2){var _3=this.$tq(_1);if(_2&&_3.nullLeft)return null;return _3.left}
,isc.A.$ts=function(_1,_2){var _3=this.$tq(_1);if(_2&&_3.nullRight)return null;return _3.right}
,isc.A.$tq=function(_1){if(this.$yl==null)this.$yl={};else if(this.$yl[_1]!=null){return this.$yl[_1]}
var _2={top:0,bottom:0,left:0,right:0},_3=isc.Element.getStyleEdges(_1);if(_3==null){_2.nullLeft=true;_2.nullRight=true;_2.nullTop=true;_2.nullBottom=true;return _2}
var _4=_3.paddingTop,_5=_3.paddingBottom,_6=_3.paddingLeft,_7=_3.paddingRight,_8=isc.px;_2.nullTop=(_4==null||_4==isc.emptyString);_2.nullBottom=(_5==null||_5==isc.emptyString)
_2.nullLeft=(_6==null||_6==isc.emptyString);_2.nullRight=(_7==null||_7==isc.emptyString);if(isc.isA.String(_4)&&_4.endsWith(_8))
_2.top=parseInt(_4);if(isc.isA.String(_5)&&_5.endsWith(_8))
_2.bottom=parseInt(_5);if(isc.isA.String(_6)&&_6.endsWith(_8))
_2.left=parseInt(_6);if(isc.isA.String(_7)&&_7.endsWith(_8))
_2.right=parseInt(_7);this.$yl[_1]=_2;return _2}
,isc.A.$s1=function(_1){return this.$tt(_1)+this.$tu(_1)}
,isc.A.$sw=function(_1){return this.$tr(_1)+this.$ts(_1)}
,isc.A.$yo=function(_1){return this.$ym(_1)+this.$s1(_1)}
,isc.A.$yp=function(_1){return this.$yn(_1)+this.$sw(_1)}
,isc.A.getNativeScrollbarSize=function(){if(isc.Element.$yi==null){var _1="<div id=isc_ScrollbarTest "+"style='position:absolute;top:-100px;border:0px;padding:0px;margin:0px;height:100px;width:100px;overflow:scroll;'>"+isc.nbsp+"</div>";this.createAbsoluteElement(_1);var _2=this.get('isc_ScrollbarTest');isc.Element.$yi=parseInt(_2.style.height)-_2.clientHeight;this.clear(_2)}
return isc.Element.$yi}
);isc.B._maxIndex=isc.C+68;isc.Element.$50g=function(){var _1=this.$x4={borderLeftWidth:"border-left-width",borderRightWidth:"border-right-width",borderTopWidth:"border-top-width",borderBottomWidth:"border-bottom-width",marginLeft:"margin-left",marginRight:"margin-right",marginTop:"margin-top",marginBottom:"margin-bottom",paddingLeft:"padding-left",paddingRight:"padding-right",paddingTop:"padding-top",paddingBottom:"padding-bottom"}
var _2=this.$yc=isc.addProperties({position:"position",overflow:"overflow",top:"top",left:"left",width:"width",height:"height",display:"display"},_1);if(isc.Browser.isIE||isc.Browser.isOpera){this.$yb=isc.getKeys(_2);this.$x3=isc.getKeys(_1)}}
isc.Element.$50g();isc.ClassFactory.defineClass("Canvas");isc.isA.Canvas=function(_1){return(_1!=null&&_1._isA_Canvas)}
isc.A=isc.Canvas;isc.A._isA_Canvas=true;isc.A.AUTO="auto";isc.A.ANYTHING="**anything**";isc.A.ABSOLUTE="absolute";isc.A.RELATIVE="relative";isc.A.INHERIT="inherit";isc.A.VISIBLE="visible";isc.A.HIDDEN="hidden";isc.A.COMPLETE="complete";isc.A.DRAWN="complete";isc.A.DRAWING_HANDLE="drawingHandle";isc.A.HANDLE_DRAWN="handleDrawn";isc.A.UNDRAWN="undrawn";isc.A.SCROLL="scroll";isc.A.CLIP_H="clip-h";isc.A.CLIP_V="clip-v";isc.A.IGNORE="ignore";isc.A.NATIVE="native";isc.A.CLIP="clip";isc.A.NESTED_DIV="nestedDiv";isc.A.CENTER="center";isc.A.LEFT="left";isc.A.RIGHT="right";isc.A.TOP="top";isc.A.BOTTOM="bottom";isc.A.UP="up";isc.A.DOWN="down";isc.A.BOTH="both";isc.A.NONE="none";isc.A.VERTICAL="vertical";isc.A.HORIZONTAL="horizontal";isc.A.MARKED="marked";isc.A.MIDDLE="middle";isc.A.ALL="all";isc.A.DEFAULT="default";isc.A.ARROW="default";isc.A.WAIT="wait";isc.A.HAND=(isc.Browser.isMoz?"pointer":"hand");isc.A.MOVE="move";isc.A.HELP="help";isc.A.TEXT="text";isc.A.CROSSHAIR="crosshair";isc.A.NOT_ALLOWED="not-allowed";isc.A.COL_RESIZE=(isc.Browser.isIE&&isc.Browser.version>=6?"col-resize":"e-resize");isc.A.ROW_RESIZE=(isc.Browser.isIE&&isc.Browser.version>=6?"row-resize":"n-resize");isc.A.TILE="tile";isc.A.STRETCH="stretch";isc.A.NORMAL="normal";isc.A.REPEAT="repeat";isc.A.NO_REPEAT="no-repeat";isc.A.REPEAT_X="repeat-x";isc.A.REPEAT_Y="repeat-y";isc.A.LTR="ltr";isc.A.RTL="rtl";isc.A.BEFORE="before";isc.A.AFTER="after";isc.A.NEAREST="nearest";isc.A.$ng=200000;isc.A.$nh=199950;isc.A.$ni=800000;isc.A.TAB_INDEX_GAP=50;isc.A.TAB_INDEX_FLOOR=1000;isc.A.TAB_INDEX_CEILING=32766;isc.A.$nj=[];isc.A.textStyleAttributes=["fontFamily","fontSize","color","backgroundColor","fontWeight","fontStyle","textDecoration","textAlign"];isc.A.$42a=(!isc.Browser.isIE?"margin:0px;border:0px;padding:0px;background-image:none;background-color:transparent;":"margin:0px;border:0px;padding:0px;background-color:transparent;filter:none;background-image:none;");isc.A.$nm=[];isc.A._redrawQueueDelay=(0);isc.A.$nn=200;isc.A._canvasList=[];isc.A._iscInternalCount=0;isc.A._stats={redraws:0,clears:0,destroys:0,draws:0};isc.A.$no={};isc.A.$np={};isc.A.$nq=[];isc.A.useMozBackMasks=false;isc.A.useNativeWheelDelta=true;isc.A.scrollWheelDelta=50;isc.A=isc.Canvas.getPrototype();isc.A._isA_Canvas=true;isc.A.autoDraw=true;isc.A.htmlPosition="afterBegin";isc.A.position=null;isc.A.left=0;isc.A.top=0;isc.A.defaultWidth=100;isc.A.defaultHeight=100;isc.A.minWidth=10;isc.A.maxWidth=10000;isc.A.minHeight=10;isc.A.maxHeight=10000;isc.A.zIndex=isc.Canvas.AUTO;isc.A.autoShowParent=false;isc.A.visibility=isc.Canvas.INHERIT;isc.A.styleName="normal";isc.A.contents=isc.nbsp;isc.A.backgroundRepeat=isc.Canvas.REPEAT;isc.A.mozOutlineOffset="-1px";isc.A.appImgDir="";isc.A.skinImgDir="images/";isc.A.cursor=isc.Canvas.DEFAULT;isc.A.disabledCursor=isc.Canvas.DEFAULT;isc.A.noDropCursor=isc.Canvas.NOT_ALLOWED;isc.A.$65q=(isc.Browser.isMoz&&isc.Browser.geckoVersion<20081201);isc.A.overflow=isc.Canvas.VISIBLE;isc.A.alwaysShowVScrollbar=false;isc.A.showCustomScrollbars=!((isc.Browser.isOpera||isc.Browser.isIE&&isc.Browser.version>4)||(isc.Browser.isUnix&&isc.Browser.isMoz&&isc.Browser.geckoVersion>=20020826&&isc.Browser.geckoVersion<=20031007));isc.A.scrollbarSize=16;isc.A.scrollbarConstructor="Scrollbar";isc.A.scrollLeft=0;isc.A.scrollTop=0;isc.A.scrollDelta=20;isc.A.$nr="unset";isc.A.enabled="unset";isc.A.redrawOnDisable=false;isc.A.$jp=true;isc.A.$jo=true;isc.A.$ns=true;isc.A.$nt=true;isc.A.$jq=true;isc.A.$nu=true;isc.A.showFocusOutline=true;isc.A._useNativeTabIndex=(isc.Browser.isIE&&isc.Browser.version>=5)||(isc.Browser.isMoz&&isc.Browser.geckoVersion>=20051111);isc.A.$kn=(isc.Browser.isMoz&&isc.Browser.geckoVersion<20051111)||isc.Browser.isSafari||isc.Browser.isOpera;isc.A.contextMenuProperties={autoDraw:false,width:200,showIcons:true};isc.A.clippedCorners=["TL","TR","BL","BR"];isc.A.cornerClipColor="FFFFFF";isc.A.cornerClipImage="[SKIN]corner.gif";isc.A.cornerClipSize=10;isc.A.$nv={_generated:true,overflow:"hidden",$jp:false,$jo:false,autoDraw:false,skinImgDir:"images/corners/",draw:function(){this.Super("draw",arguments)}};isc.A.dragOutlineStyle="dragOutline";isc.A.dragStartDistance=5;isc.A.canDragScroll=true;isc.A.dragScrollDelay=100;isc.A.dragScrollThreshold="10%";isc.A.minDragScrollIncrement=1;isc.A.maxDragScrollIncrement="5%";isc.A.dragIntersectStyle=isc.EventHandler.INTERSECT_WITH_MOUSE;isc.A.dragRepositionCursor=isc.Canvas.MOVE;isc.A.dragScrollType="any";isc.A.hoverDelay=300;isc.A.showHover=true;isc.A.edgeMarginSize=5;isc.A.edgeCursorMap={"T":"n-resize","L":"w-resize","B":"s-resize","R":"e-resize","TL":"nw-resize","TR":"ne-resize","BL":"sw-resize","BR":"se-resize"};isc.A.dragAppearance=isc.EventHandler.OUTLINE;isc.A.dropTypes=isc.Canvas.ANYTHING;isc.A.mouseStillDownInitialDelay=400;isc.A.mouseStillDownDelay=100;isc.A.doubleClickDelay=250;isc.A.refreshVariable="refresh";isc.A.$ks=(isc.Browser.isMoz&&(!isc.Browser.isUnix||isc.Browser.geckoVersion>20031007));isc.A.useClipDiv=(isc.Browser.isMoz||isc.Browser.isSafari||isc.Browser.isOpera);isc.A.manageChildOverflow=true;isc.A.$nw={};isc.A.percentBox="visible";isc.A.$520="viewport";isc.A.snapHGap=20;isc.A.snapVGap=20;isc.A.snapHDirection=isc.Canvas.AFTER;isc.A.snapVDirection=isc.Canvas.AFTER;isc.A.snapAxis=isc.Canvas.BOTH;isc.A.snapOnDrop=true;isc.A=isc.Canvas.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$nx="resize";isc.A.$ny="draw";isc.A.$nz="hidden";isc.A.$n0="redraw";isc.A.$n1="undefined";isc.A.$n2="draws";isc.A.$n3="drawing";isc.A.$n4="redraws";isc.A.$n5="autoDraw";isc.A.$n6="beforeBegin";isc.A.$n7="afterBegin";isc.A.$n8="beforeEnd";isc.A.$n9="afterEnd";isc.A.$oa=">";isc.A.$ob="'";isc.A.$oc="initWidget";isc.A.$55w="html";isc.A.$od="initial draw";isc.A.$oe="parentDrawn";isc.A.$of="eventProxy";isc.A.reuseDOMIDs=false;isc.A.$og="canvas";isc.A.$oh="canvas_clipDiv";isc.A.$oi="MARGIN-LEFT:";isc.A.$oj="MARGIN-RIGHT:";isc.A.$ok="MARGIN-TOP:";isc.A.$ol="MARGIN-BOTTOM:";isc.A.$om="MARGIN:";isc.A.$on="</div>";isc.A.$oo="</div></div>";isc.A.$op=[];isc.A.isBorderBox=(isc.Browser.isMoz||isc.Browser.isBorderBox);isc.A.$oq="isc.EH.focusInCanvas(";isc.A.$or="if(event.target!=this)return;isc.EH.focusInCanvas(";isc.A.$os="if(window.isc)isc.EH.blurFocusCanvas(";isc.A.$ot=",true);";isc.A.$ou="autoChild:";isc.A.$ov=["<DIV ID='",null,"'style='position:absolute;width:1px;height:1px;overflow:hidden;left:",null,"px;top:",null,"px;'>&nbsp;</DIV>"];isc.A.$ow="scrollSizeDiv";isc.A.$ox="enforceScrollSize";isc.A.$oy="-1px";isc.A.useClientRectAPI=true;isc.A.useBoxObjectAPI=false;isc.A.useBoxObjectAPISelectively=true;isc.A.$65h="0px";isc.A.$oz="left";isc.A.$o0="top";isc.A.$o1="right";isc.A.$o2="bottom";isc.A.$o3="center";isc.A.$o4="childMoved";isc.A.$o5="height";isc.A.$o6="width";isc.A.$oz="left";isc.A.$o0="top";isc.A.$o7="$o8";isc.A.$o9="%";isc.A.$pa="*";isc.A.$pb={height:"_percent_height",width:"_percent_width",left:"_percent_left",top:"_percent_top"};isc.A.$pc="resized";isc.A.$pd="childResized";isc.A.shouldSetNoDropTracker=isc.Browser.isOpera;isc.A.noDropTracker="[SKIN]/shared/no_drop.png";isc.A.adjustOverflowWhileDirty=true;isc.A.$pe={hidden:true,visible:true,scroll:true,auto:true,"clip-v":true,"clip-h":true,ignore:true};isc.A.$pf="sizing";isc.A.$pg="overflow";isc.A.$ph="px";isc.A.$27r="none";isc.A.$411="relative";isc.A.$pi="disabled";isc.A.$27r="none";isc.A.$pj="styleName";isc.A.$pk="eventpart";isc.A.$f8="count";isc.A.$pl=["edgeImage","edgeColor","customEdges","shownEdges","edgeSize","edgeTop","edgeBottom","edgeLeft","edgeRight","edgeOffset","edgeOffsetTop","edgeOffsetBottom","edgeOffsetLeft","edgeOffsetRight","canDragResize","canDragReposition"];isc.A.shadowDepth=4;isc.A.dragResizeFromShadow=true;isc.A.$pm="shadow";isc.A.isGroup=false;isc.A.groupBorderCSS="2px solid black";isc.A.groupLabelPadding=10;isc.A.showGroupLabel=true;isc.A.groupLabelDefaults={_constructor:"Label",overflow:"visible",height:1,width:1,padding:5,wrap:false,vAlign:"center",align:"center"};isc.B.push(isc.A.init=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13){if(isc.$cv)arguments.$cw=this;this.ns.ClassFactory.addGlobalID(this);this._canvasList(true);if(this.position==null){this.position=this.htmlElement!=null?isc.Canvas.RELATIVE:isc.Canvas.ABSOLUTE}
if(this.className!=null&&this.logIsInfoEnabled(this.$pj)){this.logInfo("'className' property specified. This property has been deprecated in "+"favor of 'styleName' as of SmartClient 5.5.",this.$pj)}
if(this.styleName!=null){if(this.className!=null){var _14=this.getPrototype(),_15=(this.styleName!=_14.styleName),_16=(this.className!=_14.className);if(_15)this.className=this.styleName;else if(_16)this.styleName=this.className;else this.styleName=this.className}else{this.className=this.styleName}}else if(this.className!=null){this.styleName=this.className}
if(this.size!=null)this.height=this.width=this.size;this.$pn=this.width;this.$po=this.height;if(this.width==null)this.width=this.defaultWidth;if(this.height==null)this.height=this.defaultHeight;this.$o8=this.height;if(isc.isA.String(this.margin)){var _17=parseInt(this.margin);if(isc.isA.Number(_17))this.margin=_17;else{this.logWarn("Invalid setting for this.margin:"+this.margin+". This should be a numeric value - ignoring");this.margin=null}}
if(isc.isA.String(this.padding)){var _18=parseInt(this.padding);if(isc.isA.Number(_18))this.padding=_18;else{this.logWarn("Invalid setting for this.padding:"+this.padding+". This should be set to a numeric value - ignoring");this.padding=null}}
if(this.border!=null&&!isc.isA.String(this.border)){this.border=this.$63e(this.border)}
if(this.percentSource)this.setPercentSource(this.percentSource,true);this.$pp=true;this.resizeTo(this.width,this.$o8);this.moveTo(this.left,this.top);this.$pp=null;if(this.children&&!isc.isAn.Array(this.children))this.children=[this.children];if(this.peers&&!isc.isAn.Array(this.peers))this.peers=[this.peers];if(this.enabled!=this.$nr){this.logWarn("Widget initialized with explicitly specified 'enabled' property. "+"This property has been deprecated - use 'disabled' instead.");this.disabled=!this.enabled}
if(this.redrawOnEnable!=null){this.logWarn("Widget initialized with deprcated 'redrawOnEnable' - use 'redrawOnDisable' instead.");this.redrawOnDisable=this.redrawOnEnable}
this.initWidget(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13);this.$pq();if(this.showShadow)this.$pr();if(this.clipCorners)this.$ps();if(this.useBackMask&&((isc.Browser.isIE&&isc.Browser.minorVersion>=5.5)||(isc.Canvas.useMozBackMasks&&isc.Browser.isMoz))){this.makeBackMask()}
if(this.isGroup){delete this.isGroup;this.setIsGroup(true)}
if(this.children)this.children.setProperty(this.$n5,false);if(this.peers)this.peers.setProperty(this.$n5,false);if(this.observes){var _19,_20,_21=this.observes,_22=_21.length;for(var i=0;i<_22;i++){var _19=_21[i];if(!_19)continue;if(isc.isA.String(_19.source))_20=this.getGlobalReference(_19.source);else _20=_19.source;if(_20){this.observe(_20,_19.message,_19.action)}}}
this.$pt();if(this.autoChildren)this.addAutoChildren(this.autoChildren);if(this.addOns)this.addAutoChildren(this.addOns);if(this._adjacentHandle&&!this.drawContext){this.drawContext={element:this._adjacentHandle}}
if(this.htmlElement){var _24=this.htmlElement;delete this.htmlElement;this.setHtmlElement(_24)}
if(this.eventProxy!=null){if(!isc.isA.Canvas(this.eventProxy)){this.logWarn("Canvas ID:'"+this.getID()+"' initialized with bad eventProxy. "+"This property should be set to another Canvas instance. Clearing this property.")
delete this.eventProxy}else{if(this.eventProxy.$kt==null)this.eventProxy.$kt=[];this.eventProxy.$kt.add(this)}}
var _25=this.parentElement;if(_25){this.parentElement=null;if(isc.isA.String(_25))_25=window[_25];_25.addChild(this)}
if(this.autoDraw&&!this.parentElement&&!isc.noAutoDraw){if(isc.Browser.isSafari&&isc.deferAutoDraw&&!isc.Page.isLoaded()&&this.position!="relative")
{isc.Page.setEvent("load",this.getID()+".draw()")}else{this.draw()}}}
,isc.A.initWidget=function(){}
,isc.A.setID=function(_1){var _2=this.pointersToThis=this.pointersToThis||[];_2.add({object:window,property:this.ID});this.ID=_1;window[this.ID]=this;this.clear();this.draw()}
,isc.A.getDrawnState=function(){if(this.$if==true)return isc.Canvas.COMPLETE;if(this.$pu==true)return isc.Canvas.HANDLE_DRAWN;if(this.$pv==true)return isc.Canvas.DRAWING_HANDLE;return isc.Canvas.UNDRAWN}
,isc.A.setDrawnState=function(_1){if(_1==isc.Canvas.COMPLETE)this.$if=true;else this.$if=false;if(_1==isc.Canvas.HANDLE_DRAWN)this.$pu=true;else this.$pu=false;if(_1==isc.Canvas.DRAWING_HANDLE)this.$pv=true;else this.$pv=false}
,isc.A.isDrawn=function(){return!!this.$if}
,isc.A.handleDrawn=function(){return!!this.$pu}
,isc.A.getID=function(){if(this.ID==null)this.ns.ClassFactory.addGlobalID(this);return this.ID}
,isc.A.getAttribute=function(_1){return this[_1]}
,isc.A.getInnerHTML=function(){var _1;if(!this.containsIFrame())_1=this.getContents();else{var _2=this.getContentsURL();_2=isc.Page.getURL(_2);if(isc.rpc)_2=isc.rpc.addParamsToURL(_2,this.contentsURLParams);isc.EventHandler.registerMaskableItem(this,true);_1=this.getIFrameHTML(_2)}
return _1}
,isc.A.getIFrameHTML=function(_1){return"<iframe height='100%' width='100%' scrolling='"+(this.overflow==isc.Canvas.HIDDEN?"no'":"auto'")+(isc.Browser.isSafari?" id="+this.$qs("iframe"):"")+" frameborder='0'"+" src=\""+_1+"\"></iframe>"}
,isc.A.$pw=function(){var _1=this.getDrawnState();if(_1!=isc.Canvas.COMPLETE&&_1!=isc.Canvas.HANDLE_DRAWN)return;var _2=this.getHandle(),_3=_2?_2.firstChild:null;if(_3==null)return;_3.style.height=(this.getInnerContentHeight()-2)+isc.px}
,isc.A.$px=function(_1){this.$py();var _2=this.getInnerHTML(_1);if(this.$pz){var _3=this.$pz.join(isc.emptyString);_2=(_2==null||_2==isc.nbsp?_3:_2+_3)}
return _2}
,isc.A.readyToDraw=function(){var _1=this.getDrawnState();if(this.getDrawnState()!=isc.Canvas.UNDRAWN){var _1=this.getDrawnState();this.logWarn("draw() called on widget with current drawn state: "+_1+(_1==isc.Canvas.COMPLETE?", use redraw() instead.":", ignoring.")+this.getStackTrace(),"drawing");return false}
if(this.showIf!=null){this.convertToMethod("showIf");if(this.showIf(this)==false)return false}
if(this.getHeight()<=0||this.getWidth()<=0){if(this.$p0){this.drawDeferred();return false}
this.logWarn("negative or zero area: height: "+this.getHeight()+", width: "+this.getWidth()+", refusing to draw"+this.getStackTrace(),"drawing");return false}
if(this.deferredDrawEvent!=null){this.logInfo("draw() called while object already pending a delayed draw - no action to take","drawing");return false}
if(this.parentElement!=null&&(!isc.isA.Canvas(this.parentElement)||this.parentElement.getDrawnState()==isc.Canvas.UNDRAWN))
{this.logWarn("Attempt to draw child of an undrawn parent - ignoring"+this.getStackTrace(),"drawing");return false}
if(isc.Browser.isSafari&&!isc.Page.isLoaded()){var _2=isc.Browser.safariVersion;if(parseInt(_2)<100){this.drawDeferred();return false}else{if(!isc.Canvas.$p1){isc.Canvas.logWarn("Isomorphic recommends drawing components after page load in Safari, as "+"some sizing information may not be available until the page has "+"completely loaded.  If you are encountering sizing issues for any "+"component try setting 'autoDraw' to false, and setting up an event "+"to draw the component on the Page level 'load' event.","drawing");isc.Canvas.$p1=true}}}
return true}
,isc.A.$p2=function(){return false}
,isc.A.$p4=function(){if(this.$p5)return true;var _1=this.parentElement;while(_1){if(_1.$p5)return true;_1=_1.parentElement}
if(this.children){for(var i=0;i<this.children.length;i++){if(this.children[i].$p2())return true}}
return false}
,isc.A.draw=function(_1){if(isc.$cv)arguments.$cw=this;if(!this.readyToDraw())return this;if(this.overflow==isc.Canvas.AUTO)this.getTabIndex();if(this.logIsInfoEnabled(this.$n2)){this.logInfo("draw(): drawing "+this.Class+(this.parentElement?" with parent: "+this.parentElement:"")+(!isc.Page.isLoaded()?" before page load":"")+(this.logIsDebugEnabled(this.$n2)?this.getStackTrace():""),this.$n2)}
this.$p6(this.$n2);var _2=false;if(this.autoFetchData&&!this.$p7&&this.fetchData){if(!this.dataSource){this.logWarn("autoFetchData is set, but no dataSource is specified, can't fetch")}else{_2=!isc.RPCManager.startQueue();if(this.autoFetchAsFilter&&this.filterData){this.filterData(this.getInitialCriteria())}else{this.fetchData(this.getInitialCriteria())}
this.$p7=true}}
if(this.peers!=null&&this.peers.getLength()>0){this.predrawPeers()}
if(isc.Browser.isIE&&this.fixIEOpacity&&!this.masterElement){var _3=this.parentElement;while(_3){if(_3.opacity!=null&&_3.opacity!=100){this.setOpacity(100,null,true);break}
_3=_3.parentElement}}
if(this.htmlElement!=null&&this.matchElement){if(isc.isA.String(this.htmlElement))this.htmlElement=isc.Element.get(this.htmlElement);var _4=isc.Element.getNativeInnerWidth(this.htmlElement),_5=isc.Element.getNativeInnerHeight(this.htmlElement);this.setWidth(_4);this.setHeight(_5)}
var _6=this.parentElement;var _7=(!isc.Page.isLoaded()&&!this.drawContext&&(_6==null&&this.position==isc.Canvas.RELATIVE));_7=_7||this.$p2();var _8=this.separateContentInsertion;if(isc.Page.isLoaded()||!_7){this.$p8(!_8);if(_8)this.$p9();this.drawChildren();this.$qa()}else{var _3=this.parentElement;if((isc.Browser.isOpra||isc.Browser.isIE)&&this.getDocument().readyState=="complete")
{isc.Page.finishedLoading()}
this.$qb()}
if(_2)isc.RPCManager.sendQueue();if(this.$kn&&this.$kk())this.makeFocusProxy();if(this.accessKey!=null&&this.$qc()&&this.$kk()){this.$qd()}
if(this.$qe!=null)
this.enforceScrollSize(this.$qe[0],this.$qe[1]);if(this.$qf())isc.EH.$mz([this]);if(this.clipCorners)this.$qg();if(!_1&&this.isVisible())this.show();if(this.parentElement)this.parentElement.childDrawn(this);if(this.masterElement)this.masterElement.peerDrawn(this);if(this.parentElement==null&&this.position==this.$411){this.$412=this.getPageLeft();this.$413=this.getPageTop();isc.Page.setEvent("resize",this,isc.Page.FIRE_ONCE,"$414")}
return this}
,isc.A.getInitialCriteria=function(){return this.initialCriteria}
,isc.A.$qb=function(){this.setDrawnState(isc.Canvas.DRAWING_HANDLE);var _1=this.getDocument(),_2=this.separateContentInsertion;if(this.children!=null&&this.$p2()){this.$p5=true;var _3=this.getTagStart(),_4=this.getTagEnd();_1.write(_2?_3:_3+this.$px())
this.drawChildren();_1.write(_2?this.$px()+_4:_4);this.setDrawnState(isc.Canvas.HANDLE_DRAWN)}else{_1.write(isc.SB.concat(this.getTagStart(),(_2?null:this.$px()),this.getTagEnd()));this.setDrawnState(isc.Canvas.HANDLE_DRAWN);if(_2)this.$p9();this.drawChildren()}
this.$qa();if(isc.Browser.isMoz&&this.getScrollingMechanism()==isc.Canvas.NATIVE)
this.checkNativeScroll();return this}
,isc.A.drawDeferred=function(){var _1=(isc.Page.isLoaded()?"idle":"load");if(this.deferredDrawEvent!=null){this.logInfo("drawDeferred() called when object is already pending drawing "+"- No action to take.");return}
var _2=this.getID();this.deferredDrawEvent=isc.Page.setEvent(_1,"delete "+_2+".deferredDrawEvent;"+_2+".draw();",isc.Page.FIRE_ONCE)}
,isc.A.getPrintHTML=function(printProperties,callback){this.isPrinting=true;if(printProperties==null){printProperties=isc.addProperties({},this.printProperties);printProperties.topLevelCanvas=this;printProperties.omitControls=isc.Canvas.printOmitControls;printProperties.includeControls=isc.Canvas.printIncludeControls;printProperties.isDrawn=this.isDrawn();printProperties.isVisible=this.isVisible()}else{printProperties=isc.addProperties(printProperties,this.printProperties)}
this.currentPrintProperties=printProperties||{};var HTML=[this.getPrintTagStart(),,,this.getPrintTagEnd()];if(!this.children||this.children.length==0||this.allowContentAndChildren){HTML[1]=this.getPrintInnerHTML()}
delete printProperties.inline;if(printProperties.omitComponents){var omitComponents=printProperties.omitComponents
for(var i=0;i<omitComponents.length;i++){if(isc.isA.String(omitComponents[i]))
omitComponents[i]=window[omitComponents[i]];if(!isc.isAn.Instance(omitComponents[i]))omitComponents[i]=[]}
omitComponents.removeEmpty()}
var children=this.getPrintChildren();var self=this;var completePrintHTML=this.getCompletePrintHTMLFunction(HTML,callback);if(children){var childrenHTML=[],childCount=children.length,completedCount=0;var childHTMLComplete=function(childIndex,html){childrenHTML[childIndex]=html;++completedCount;if(completedCount==childCount){return completePrintHTML(childrenHTML)}
return null}
var thisHTML=null;for(var i=0;i<childCount;i++){var child=children[i];var func=(function(i){return function(html){childHTMLComplete(i,html)}})(i);var childHTML=this.getChildPrintHTML(child,printProperties,func);if(childHTML!==null){thisHTML=childHTMLComplete(i,childHTML)}}
return thisHTML}else{return completePrintHTML()}}
,isc.A.getChildPrintHTML=function(_1,_2,_3){return _1.getPrintHTML(_2,_3)}
,isc.A.getCompletePrintHTMLFunction=function(_1,_2){var _3=this;return function(_4){_3.isPrinting=false;if(isc.isAn.Array(_4))_4=_4.join(isc.emptyString);if(_4)_1[2]=_4;_1=_1.join(isc.emptyString);delete _3.currentPrintProperties;if(_2){_3.fireCallback(_2,"HTML,callback",[_1,_2]);return null}else{return _1}}}
,isc.A.getPrintInnerHTML=function(){return this.$px()}
,isc.A.getPrintChildren=function(){var _1=this.children;if(!_1||_1.length==0)return;var _2=[];for(var i=0;i<_1.length;i++){if(this.shouldPrintChild(_1[i]))_2.add(_1[i])}
return(_2.length>0)?_2:null}
,isc.A.shouldPrintChild=function(_1){if(_1.shouldPrint!=null)return _1.shouldPrint;if(_1.masterElement)return false;var _2=this.currentPrintProperties,_3=_2.omitControls,_4=_2.omitComponents;if(!isc.isAn.Instance(_1)||(_4&&_4.contains(_1)))
{return false}
if(_3){var _5=_2.includeControls;if(_5&&_5.length>0){for(var i=0;i<_5.length;i++){var _7=_5[i];if(isc.isA[_7]&&isc.isA[_7](_1))return true}}
for(var i=0;i<_3.length;i++){var _7=_3[i];if(isc.isA[_7]&&isc.isA[_7](_1)){return false}}}
if((!_1.isDrawn()&&_2.isDrawn)||(!_1.isVisible()&&_2.isVisible))return false;return true}
,isc.A.$xo=function(){if(this.isPrinting)return false;return true}
,isc.A.getPrintStyleName=function(){return this.printStyleName||this.styleName}
,isc.A.getPrintTagStart=function(){var _1=this.currentPrintProperties,_2=_1.topLevelCanvas==this,_3=!_2&&_1.inline,_4=this.getPrintStyleName();return[(_3?"<span ":"<div "),(_4?"class='"+_4+"' ":null),this.getPrintTagStartAttributes(),">"].join(isc.emptyString)}
,isc.A.getPrintTagStartAttributes=function(){return null}
,isc.A.getPrintTagEnd=function(){var _1=this.currentPrintProperties,_2=_1.topLevelCanvas==this,_3=!_2&&_1.inline;return _3?"</span>":"</div>"}
,isc.A.makeBackMask=function(_1){if(isc.Browser.isMoz&&!isc.Page.isLoaded()){this.$49t=_1;isc.Page.setEvent("load",this,isc.Page.FIRE_ONCE,"makeBackMask");return}
if(this.$49t){_1=this.$49t;delete this.$49t}
this._backMask=isc.BackMask.create(_1);this.addPeer(this._backMask);this._backMask.setZIndex(this.getZIndex(true)-2);this.$qi()}
,isc.A.makeFocusProxy=function(){if(!this.$kn||this.$qj||this.$qk||!this.isDrawn()||this.$ql!=null)return;this.$qk=true;this.$qm();this.$qk=null}
,isc.A.$qm=function(){if(!isc.Page.isLoaded()&&isc.Browser.isSafari){this.getTabIndex();this.$ql=isc.Page.setEvent("load",this,null,"delayedMakeFocusProxy");return}
var _1=this.getTabIndex();if(this.isDisabled())_1=-1;if(isc.Browser.isSafari&&_1==-1){return}
var _2=(isc.Browser.isSafari?1:this.getViewportWidth()),_3=(isc.Browser.isSafari?1:this.getViewportHeight());var _4=isc.Canvas.getFocusProxyString(this.getCanvasName(),true,this.getOffsetLeft()-1,this.getOffsetTop()-1,_2,_3,this.isVisible(),this.$kk(),_1,this.accessKey,false,this.$qn(),this.$qo());isc.Element.insertAdjacentHTML(this.getClipHandle(),"afterEnd",_4)
this.$qj=true}
,isc.A.delayedMakeFocusProxy=function(){this.$ql=null;this.makeFocusProxy()}
,isc.A.$qp=function(){if(!this.$kn)return;if(this.$ql!=null){isc.Page.clearEvent("load",this.$ql);this.$ql=null}
if(!this.$qj)return;var _1=this.$qq();if(_1!=null){if(isc.Browser.isDOM){if(_1.parentNode){_1.parentNode.removeChild(_1)}else{this.logWarn("Unable clear focusProxy for this widget - element has no parentNode.")}}
this.$qr=null}
this.$qj=null}
,isc.A.$qc=function(){return(isc.Browser.isMoz&&this._useNativeTabIndex)}
,isc.A.$qd=function(){var _1=this.accessKey;if(!_1||!this.isDrawn()||!this.$kk())return;var _2=this.$qs("focusProxy");var _3=isc.StringBuffer.concat("<a id='",_2,"' onfocus='var _0=window.",this.getID(),";if(_0){_0.focus()}' ","accessKey='"+_1+"'></a>");isc.Element.insertAdjacentHTML(this.getClipHandle(),"beforeEnd",_3);this.$qt=isc.Element.get(_2)}
,isc.A.$qu=function(){var _1=this.$qt;delete this.$qt;if(_1)isc.Element.clear(_1)}
,isc.A.drawChildren=function(){if(this.children==null)return true;if(this.isDrawn()){this.logWarn("drawChildren() is only safe to call BEFORE a canvas has been drawn"+this.getStackTrace());return}
if(this.children&&this.logIsInfoEnabled(this.$n3)){this.logInfo("drawChildren(): "+this.children.length+" children",this.$n3)}
this.$pt();this.layoutChildren(this.$od);if(this.manageChildOverflow)this.$qv=true;for(var i=0;i<this.children.length;i++){var _2=this.children[i];if(_2.masterElement)continue;if(!_2.isDrawn())_2.draw()}}
,isc.A.$qx=function(_1){if(!this.manageChildOverflow)return;this.$qv=null;this.$qy();var _2=0;for(var i=0;i<_1.length;i++){var _4=_1[i];if(_4!=null&&_4.$qz){_2++;_4.$qz=null;_4.adjustOverflow(this.$oe)}}}
,isc.A.predrawPeers=function(){if(!this.peers)return;for(var i=0;i<this.peers.getLength();i++){var _2=this.peers[i];if(_2.$q0==true){if(!isc.isA.Canvas(_2)||_2.masterElement!=this){this.peers.remove(_2);this.addPeer(_2)}
_2.draw()}}}
,isc.A.drawPeers=function(){if(!this.peers)return true;if(this.logIsInfoEnabled(this.$n3)){this.logInfo("drawPeers(): "+this.peers.length+" peers","drawing")}
var _1=this.peers;this.peers=[];for(var i=0,_3;i<_1.length;i++){_3=_1[i];if(!isc.isA.Canvas(_3)||_3.masterElement!=this){this.addPeer(_3)}else{this.peers.add(_3)}}
for(i=0;i<this.peers.length;i++){var _3=this.peers[i];if(_3.snapTo||_3.snapEdge)_3.$qw();if(!_3.isDrawn())_3.draw()}}
,isc.A.$p8=function(_1){this.setDrawnState(isc.Canvas.DRAWING_HANDLE);var _2=_1?this.$px():null,_3=this.getTagStart(true),_4=isc.isAn.Array(_3),_5;if(_4){var _6=_3.length;_3[_3.length]=_2;_3[_3.length]=this.getTagEnd();_5=_3.join(isc.$ad);_3.length=_6}else{_5=isc.SB.concat(_3,_2,this.getTagEnd())}
var _7;var _8=this.logIsInfoEnabled(this.$n3);var _9=this.drawContext;if(_9){var _10=_9.element,_11=_9.position||"beforeBegin";this.logInfo("$p8(): drawing with "+_11+" relative to element: "+this.echoLeaf(_10),"drawing");if(_11=="replace"){_11="beforeBegin";if(isc.isA.String(_10))_10=isc.Element.get(_10);_7=this.$q1(_10,_11,_5,true);_10.parentNode.removeChild(_10);this.drawContext=null;if(this.htmlElement)this.htmlElement=null}else{_7=this.$q1(_10,_11,_5,true)}}else if(this.masterElement&&(this.masterElement.getClipHandle()!=null)){if(_8){this.logInfo("inserting HTML next to master element: "+this.masterElement,"drawing")}
var _12=this.masterElement.getClipHandle();_7=this.$q1(_12,this.$n9,_5,true)}else if(this.parentElement){if(_8){this.logInfo("inserting HTML into parent: "+this.parentElement,"drawing")}
var _13=this.parentElement.getHandle();_7=this.$q1(_13,this.$n8,_5,true)}else{if(_8){this.logDebug("inserting HTML at top level","drawing")}
_7=this.$q2(_5)}
if(!(isc.Browser.isIE||isc.Browser.isOpera)){if(_7!=null){if(this.useClipDiv){this._clipDiv=_7;this.$q3=_7.firstChild}else{this.$q3=_7}}else{}}
this.setDrawnState(isc.Canvas.HANDLE_DRAWN)}
,isc.A.$q2=function(_1){return this.ns.Element.createAbsoluteElement(_1)}
,isc.A.$q1=function(_1,_2,_3,_4){return this.ns.Element.insertAdjacentHTML(_1,_2,_3,_4)}
,isc.A.$qa=function(){this.modifyContent();if(isc.Browser.isMoz&&isc.Browser.isStrict&&this.containsIFrame())this.$pw();if(isc.screenReader)this.addContentRoles();if(this.manageChildOverflow&&this.children!=null){this.$qx(this.children)}
this.setUpEvents();if(this.$q4){this.$q5(this.left,this.top,this.width,this.$o8);var _1=this.$q6;if(isc.isAn.Array(_1))this.setClip(_1)}
this.setDrawnState(isc.Canvas.COMPLETE);this.$q7=false;if(this.parentElement==null)isc.Canvas.$q8(this);if(this.parentElement!=null&&this.parentElement.$qv){this.$qz=true}else{this.adjustOverflow(this.$ny)}
if(isc.screenReader)this.addPrimaryRole();this.drawPeers()}
,isc.A.setHtmlElement=function(_1){if(this.htmlElement==_1)return;this.htmlElement=_1;if(!this.htmlPosition)this.htmlPosition="afterBegin";var _2=_1?{position:this.htmlPosition,element:this.htmlElement}:null;this.setDrawContext(_2)}
,isc.A.setHtmlPosition=function(_1){if(_1==null)_1="afterBegin";if(this.htmlPosition==_1)return;this.htmlPosition=_1;if(this.htmlElement==null)return;var _2={position:this.htmlPosition,element:this.htmlElement};this.setDrawContext(_2)}
,isc.A.isDirty=function(){return this.$q7==true}
,isc.A.markForRedraw=function(_1){if(isc.$cv)arguments.$cw=this;if(this.isDrawn()&&!this.isDirty()){this.$q9(_1);isc.Canvas.scheduleRedraw(this);this.$q7=true}}
,isc.A.readyToRedraw=function(_1,_2){if(isc.$cv)arguments.$cw=this;if(!this.isDrawn()){return false}
var _3=this.ns.EH;if((_3.$ku||_3.$km)&&_3.lastTarget==this){if(_2){this.$q9(_1,true);this.priorityRedraw=true;this.$q7=false;this.markForRedraw(false)}
return false}
return true}
,isc.A.$q9=function(_1,_2){if(_1==false||!this.logIsInfoEnabled(this.$n4))return;var _3=(!_1&&this.logIsDebugEnabled(this.$n4)||this.logIsDebugEnabled("redrawTrace"));var _4;if(_2==null)_4="Scheduling redraw ";else _4=(_2==true?"DEFERRED ":"")+"Immediate redraw ";this.logInfo(_4+(this.isDirty()&&_2!=null?"of dirty widget ":"")+(this.children&&this.children.length>0?"("+this.getChildCount()+" children) ":"")+"("+(_1?_1:"no reason provided")+")"+(_3?this.getStackTrace():""),this.$n4)}
,isc.A.redraw=function(_1){if(isc.$cv)arguments.$cw=this;if(!this.readyToRedraw(_1,true))return this;this.$q9(_1,false);this.$p6(this.$n4);var _2=isc.timeStamp();this.$ra();this.$rb=isc.timeStamp()-_2;return this}
,isc.A.redrawIfDirty=function(_1){if(this.isDrawn()&&this.isDirty())return this.redraw(_1)}
,isc.A.$ra=function(){var _1=this.logIsDebugEnabled(this.$n3),_2=this.logIsInfoEnabled(this.$n3),_3;if(_1)_3=isc.timeStamp();if(_2)this.logInfo("$ra(): redrawing","drawing");if(this.peers!=null&&this.peers.getLength()>0)this.redrawPredrawnPeers();var _4=this.children&&this.children.length>0,_5=this.allowContentAndChildren&&_4;if(_4&&!_5&&this.shouldRedrawOnResize()){_5=true}
if((!_4||_5)&&(this.getVisibleWidth()>this.getWidth()||this.getVisibleHeight()>this.getHeight()))
{this.$q5(null,null,this.width,this.$o8)}
if(_4){if(_5)this.$p9();this.redrawChildren()}else{this.$rd()}
if(this.$qe&&!_4){delete this.$re;this.enforceScrollSize(this.$qe[0],this.$qe[1])}
this.modifyContent();if(isc.screenReader)this.addContentRoles();this.setUpEvents();this.$q7=false;this.adjustOverflow(this.$n0,null,true);this.redrawPeers();if(_1){this.logDebug("Redraw() - Total time to redraw in DOM:"+(isc.timeStamp()-_3),"drawing")}
return this}
,isc.A.$p9=function(){var _1=this.$px(),_2=this.getHandle();while(_2.hasChildNodes()){var _3=_2.firstChild.getAttribute?_2.firstChild.getAttribute(this.$of):null;if(_3&&isc.isA.Canvas(window[_3]))break;_2.removeChild(_2.firstChild)}
isc.Element.insertAdjacentHTML(_2,this.$n7,_1)}
,isc.A.$rd=function(){var _1=this.isPrinting;this.isPrinting=false;var _2=this.$px();if(isc.Browser.isMoz){var _3=this.getHandle();while(_3.hasChildNodes())_3.removeChild(_3.firstChild);var _4=_3.ownerDocument.createRange();_4.selectNodeContents(_3);_4.collapse(true);var _5=_4.createContextualFragment(_2);_3.appendChild(_5)}else{this.getHandle().innerHTML=_2}
this.isPrinting=_1}
,isc.A.modifyContent=function(){}
,isc.A.redrawChildren=function(){if(!this.children)return true;this.logInfo("redrawChildren(): "+this.children.length+" children","drawing");for(var _1=this.children,i=0;i<_1.length;i++){var _3=_1[i];if(!isc.isA.Canvas(_3))continue;if(_3.$nu){_3.redraw(false)}}}
,isc.A.redrawPredrawnPeers=function(){if(!this.peers||this.peers.getLength<1)return;for(var _1=this.peers,i=0;i<_1.length;i++){if(_1[i]&&_1[i].$jp&&_1[i].$q0){_1[i].redraw("redrawPeers")}}}
,isc.A.redrawPeers=function(){if(!this.peers)return true;this.logInfo("redrawPeers(): "+this.peers.length+" peers","drawing");for(var _1=this.peers,i=0;i<_1.length;i++){if(_1[i]&&_1[i].$jp&&!_1[i].$q0){_1[i].redraw("redrawPeers")}}}
,isc.A.updateFromServer=function(_1){_1=isc.clone(_1);isc.addProperties(_1,{useXmlHttpRequest:true,evalResult:true,suppressAutoDraw:true});if(!_1.evalVars)_1.evalVars={};if(!_1.evalVars.targetComponent)_1.evalVars.targetComponent=this;isc.rpc.sendRequest(_1)}
,isc.A.refreshFromServer=function(_1,_2,_3,_4){this.$rf("refresh",_1,_2,_3,_4)}
,isc.A.replaceFromServer=function(_1,_2,_3,_4){this.$rf("replace",_1,_2,_3,_4)}
,isc.A.$rf=function(_1,_2,_3,_4,_5){if(this.$rg){this.logWarn("Attempt to "+_1+" while "+this.$rh+" is in progress - ignoring.");return}
this.$rg=true;this.$rh=_1;this.$ri=_5;this.logDebug("Submitting to "+_1+" URL: "+_2+", with data: "+this.echo(_3));isc.Comm.sendFieldsToServer({URL:_2,fields:_3,prompt:_4,callback:this.getID()+".$rj(frame)",resultVarName:this.refreshVariable})}
,isc.A.$rj=function(_1){this.$rg=false;var _2=this.$rh;var _3=_1[this.refreshVariable];if(!isc.isAn.Object(_3)){this.logError("Expected object literal for "+_2+", but got: "+isc.Log.echo(_3));return}
_3=isc.clone(_3);var _4=this;if(_2=="refresh")this.setProperties(_3);else{if(!_3._constructor)_3._constructor=this.getClassName();_4=this.replaceWith(_3)}
isc.clearPrompt();if(this.$ri){if(!isc.isA.Function(this.$ri)){this.$ri=isc.Func.expressionToFunction("canvas",this.$ri)}
if(!isc.isA.Function(this.$ri)){this.logError("Can't convert "+_2+" callback '"+this.$ri+" to a function - not firing callback!");return}
this.$ri(_4)}}
,isc.A.clear=function(_1){if(!_1&&this.logIsInfoEnabled("clears")){var _2="clear()"+(this.children&&this.children.length>0?" ("+this.getChildCount()+" children) ":"")+(this.logIsDebugEnabled("clears")?this.getStackTrace():"");this.logInfo(_2,"clears")}
this.$rk();if(this._eventMask)this.ns.EH.unregisterMaskableItem(this);if(this==isc.Canvas.$rl)isc.Canvas.hideResizeThumbs();if(this.children){for(var _3=this.children,i=0;i<_3.length;i++){var _5=_3[i];if(!isc.isA.Canvas(_5))continue;_5.clear(true)}}
if(this.parentElement)this.parentElement.childCleared(this);if(this.masterElement)this.masterElement.peerCleared(this);if(this.getHandle())this.clearHandle();if(this.$kn)this.$qp();delete this.$re;delete this.$qt;if(this.deferredDrawEvent){isc.Page.clearEvent(this.deferredDrawEvent);delete this.deferredDrawEvent}
if(this.peers){for(var _3=this.peers,i=0;i<_3.length;i++){_3[i].clear(true)}}
if(this.canAcceptDrop)this.ns.EH.unregisterDroppableItem(this);this.setDrawnState(isc.Canvas.UNDRAWN)}
,isc.A.destroy=function(_1){if(this.doNotDestroy){this.clear();return}
if(this.destroyed)return;this.destroying=true;if(this.$rm)isc.Timer.clearTimeout(this.$rn);this.hideClickMask();if(!this.$ih){this.$p6("destroys");if(!_1){this.logInfo("destroy()"+(this.children&&this.children.length>0?" ("+this.getChildCount()+" children) ":"")+(this.logIsDebugEnabled("destroys")?this.getStackTrace():""),"destroys")}}
if(isc.Hover.lastHoverCanvas==this)isc.Hover.hide();this.clear(true);if(this.children){for(var _2=this.children.duplicate(),i=0;i<_2.length;i++){var _4=_2[i];if(!isc.isA.Canvas(_4))continue;_4.destroy(true)}}
if(this.peers){for(var _2=this.peers.duplicate(),i=0;i<_2.length;i++){_2[i].destroy(true)}}
delete this.peers;delete this.children;if(this.hscrollbar&&!this.hscrollbar.destroyed){this.hscrollbar.destroy(true);delete this.hscrollbar}
if(this.vscrollbar&&!this.vscrollbar.destroyed){this.vscrollbar.destroy(true);delete this.vscrollbar}
this.deparent();this.depeer();if(this.eventProxy!=null)this.clearEventProxy();if(this.$kt!=null){for(var _2=this.$kt.duplicate(),i=0;i<_2.length;i++){_2[i].clearEventProxy()}}
if(this.locatorParent&&this.locatorParent.locatorChildDestroyed){this.locatorParent.locatorChildDestroyed(this)}
delete this.locatorParent;this._canvasList();isc.Canvas.$ro(this);this.$rp();isc.EH.canvasDestroyed(this);isc.ClassFactory.dereferenceGlobalID(this);if(this.pointersToThis!=null){for(var i=0;i<this.pointersToThis.length;i++){var _5=this.pointersToThis[i];if(_5.object&&(_5.object[_5.property]==this)){var _6;_5.object[_5.property]=_6}}
delete this.pointersToThis}
if(this.$rr){for(var _7 in this){delete this[_7]}}
this.$63x();this.destroyed=true}
,isc.A.markForDestroy=function(){if(isc.$cv)arguments.$cw=this;if(this.destroyed||this.destroying||this.isPendingDestroy())return;this.$65i=true;if(this.logIsInfoEnabled("destroys")){this.logInfo("markForDestroy() - setting up delayed destroy() call for this component.","destroys")}
isc.Canvas.scheduleDestroy(this)}
,isc.A.isPendingDestroy=function(){return!this.destroyed&&!this.destroying&&(this.$65i==true)}
,isc.A.clearHandle=function(){if(!this.getHandle())return;this.$p6("clears");this.getHandle().eventProxy=null;this.getClipHandle().eventProxy=null;var _1=this.getClipHandle();this.$q3=null;this.$rs=null;this._clipDiv=null;isc.Element.clear(_1)}
,isc.A.replaceWith=function(_1){if(!isc.isAn.Object(_1))return;var _2;if(isc.Browser.isDOM){var _3=isc.ClassFactory.getNextGlobalID();isc.Element.insertAdjacentHTML(this.getClipHandle(),"afterEnd","<DIV ID="+_3+"></DIV>");var _2=this.getDocument().getElementById(_3);_1.drawContext={element:_2}}
var _4=this.parentElement,_5=this.masterElement,_6=(isc.isA.Layout(_4)&&_4.hasMember(this)),_7=(_6?_4.getMemberNumber(this):0);this.destroy();if(isc.isA.Canvas(_1)){_1.clear()}else{_1.autoDraw=false;_1=isc.ClassFactory.newInstance(_1);if(_1==null){this.logWarn("canvas.replaceWith(): Unable to create a widget "+"instance from the argument passed in.  Returning.")
return}}
if(_6){_4.addMember(_1,_7)}else if(_4){_4.addChild(_1)}else if(_5){_5.addPeer(_1)}
if(!_1.isDrawn())_1.draw();if(isc.Browser.isDOM){if(_2.parentNode){_2.parentNode.removeChild(_2)}else{this.logWarn("unable to clear marker")}}
return _1}
,isc.A.setDrawContext=function(_1){var _2=this.isDrawn();this.deparent();if(_2)this.clear();this.drawContext=_1;if(_2)this.draw()}
,isc.A.$qs=function(_1,_2,_3){if(_2){var _4=isc.ClassFactory.getDOMID(this.getID(),_1);if(this.reuseDOMIDs){if(!this.$63y)this.$63y=[];this.$63y[this.$63y.length]=_4}
return _4}
if(!this.$rt)this.$rt={};if(!this.$rt[_1])
this.$rt[_1]=isc.ClassFactory.getDOMID(this.getID(),_1);return this.$rt[_1]}
,isc.A.$557=function(_1){if(!this.$rt)return null;for(var _2 in this.$rt){if(_2==_1)return this.$rt[_2]}}
,isc.A.$63x=function(){if(!this.reuseDOMIDs)return;if(this.$63y){for(var i=0;i<this.$63y.length;i++){isc.ClassFactory.releaseDOMID(this.$63y[i])}}
if(this.$rt){for(var i in this.$rt){isc.ClassFactory.releaseDOMID(this.$rt[i])}}}
,isc.A.getCanvasName=function(){if(!this.$ru)this.$ru=this.$qs(this.$og,true);return this.$ru}
,isc.A.$rv=function(){return this.$qs(this.$oh)}
,isc.A.getTagStart=function(_1){var _2=isc.Canvas,_3=this.$rw();if(this.getScrollingMechanism()==isc.Canvas.CLIP&&!this.$ks&&(this.overflow==_2.HIDDEN||(this.showCustomScrollbars&&(this.overflow==_2.SCROLL||this.overflow==_2.AUTO)))){var _4=this.scrollLeft||0,_5=this.scrollTop||0;if(this.$q6==null){this.$q6=[_4,this.getWidth()+_4,this.getHeight()+_5,_5]}
_3+=";CLIP:rect("+this.$q6[0]+"px,"+this.$q6[1]+"px,"+this.$q6[2]+"px,"+this.$q6[3]+"px)"}
if(this.zIndex==_2.AUTO)this.zIndex=_2.getNextZIndex();var _6=(this.eventProxy?this.eventProxy.ID:this.ID);var _7=this.$rx(),_8=_7[0],_9=_7[1];if(!_2.$ry){_2.$ry=" onfocus=";_2.$rz=" onblur=";_2.$r0=" tabindex="
_2.$r1=" accessKey="}
var _10=isc.Browser.isMoz;var _11=this.opacity;if(!isc.Browser.isIE){if(_11!=null)_11=_11/ 100}
if(isc.Browser.isMoz){if(this.smoothFade&&(_11==1||_11==null))_11=0.9999}
if(this.useClipDiv){var _12=this.containsIFrame(),_13=this.getCurrentCursor();var _14,_15=this._useNativeTabIndex;if(_15&&this.$kk()){_14=isc.SB.concat(_2.$ry,this.$qn(),_2.$rz,this.$qo(),!this.isDisabled()?_2.$r0+this.getTabIndex():null,(!this.$qc()&&this.accessKey!=null)?_2.$r1+this.accessKey:null)}
var _16=isc.StringBuffer.concat("<div id='",this.$rv(),"' eventProxy=",_6,(this.className?" class='"+this.className+"'":""),_14," style='","POSITION:",this.position,";LEFT:",this.left,"px;TOP:",this.top,"px;WIDTH:",_8,"px;HEIGHT:",_9,"px;Z-INDEX:",this.zIndex,(this.visibility==_2.INHERIT?"":";VISIBILITY:"+this.visibility),(this.backgroundColor==null?"":";BACKGROUND-COLOR:"+this.backgroundColor),(this.backgroundImage==null?"":";BACKGROUND-IMAGE:url("+this.getImgURL(this.backgroundImage)+")"+";BACKGROUND-REPEAT:"+this.backgroundRepeat+(this.backgroundPosition?";BACKGROUND-POSITION:"+this.backgroundPosition:"")),(this.border?";BORDER:"+this.border:""),(this.padding!=null||this.$415?";PADDING:0px":""),this.$r2(),(_11!=null?(this.$65q?";-moz-opacity:":";opacity:")+_11:""),(_10?";-moz-box-sizing:border-box":null),(_10&&_15&&this.mozOutlineOffset!=null?";-moz-outline-offset:"+this.mozOutlineOffset:null),(_10&&_15&&this.mozOutlineColor!=null?";-moz-outline-color:"+this.mozOutlineColor:null),(_10&&_15&&!this.showFocusOutline?";-moz-outline-style:none":null),";OVERFLOW:",_3,";' ONSCROLL='return "+_6+".$lh()'>","<div id='",this.getCanvasName(),"' eventProxy='",_6,(this.textDirection!=null?"' dir='"+this.textDirection:""),"' style='POSITION:relative;VISIBILITY:inherit",(!this.$r3&&!isc.Browser.isOpera&&!((isc.Browser.isSafari||isc.Browser.isFirefox)&&_12)?";FLOAT:left":""),";Z-INDEX:",this.zIndex,(_13==_2.AUTO?"":";CURSOR:"+_13),(this.padding!=null?";PADDING:"+this.padding+"px":""),(this.topPadding!=null?";padding-top:"+this.topPadding+"px":""),(this.bottomPadding!=null?";padding-bottom:"+this.bottomPadding+"px":""),(this.leftPadding!=null?";padding-left:"+this.leftPadding+"px":""),(this.rightPadding!=null?";padding-right:"+this.rightPadding+"px":""),";'>")}else{if(!_2.$r4){_2.$r5=" style='POSITION:absolute;LEFT:";_2.$r6=" style='POSITION:relative;LEFT:";_2.$bd=" class='";_2.$416="'";_2.$r7=";VISIBILITY:";_2.$r8=";CURSOR:";var _17=_2.$r4=[];_17[0]="<div id=";_17[2]=" eventProxy=";_17[15]="px;TOP:";_17[22]="px;WIDTH:";_17[28]="px;HEIGHT:";_17[34]="px;Z-INDEX:";_17[44]=";OVERFLOW:";_17[59]="' ONSCROLL='return ";_17[61]=".$lh()' "}
var _17=_2.$r4;_17[1]=this.getCanvasName();_17[3]=_6;if(this.className!=null){_17[4]=_2.$bd;_17[5]=this.className;_17[6]=_2.$416}else{_17[4]=_17[5]=_17[6]=null}
_17[7]=(this.textDirection!=null?" dir="+this.textDirection:null);_17[8]=(this.position==_2.RELATIVE?_2.$r6:_2.$r5);isc.$bk(_17,this.left,9,6);isc.$bk(_17,this.top,16,6);isc.$bk(_17,_8,23,5);isc.$bk(_17,_9,29,5);if(this.zIndex!=_2.AUTO)isc.$bk(_17,this.zIndex,35,9);else{_17[35]=this.zIndex;_17[36]=_17[37]=_17[38]=_17[39]=_17[40]=_17[41]=_17[42]=_17[43]=null}
_17[45]=_3;if(this.visibility!=_2.INHERIT){_17[46]=_2.$r7;_17[47]=this.visibility}else{_17[46]=_17[47]=null}
_17[48]=(this.backgroundColor==null?null:";BACKGROUND-COLOR:"+this.backgroundColor);_17[49]=(this.backgroundImage==null?null:";BACKGROUND-IMAGE:url("+this.getImgURL(this.backgroundImage)+");BACKGROUND-REPEAT:"+this.backgroundRepeat+(this.backgroundPosition?";BACKGROUND-POSITION:"+this.backgroundPosition:""));_17[50]=(_10?";-moz-box-sizing:border-box":null);var _13=this.getCurrentCursor();if(_13==_2.AUTO){_17[51]=_17[52]=null}else{_17[51]=_2.$r8;_17[52]=_13}
_17[53]=this.$r2();_17[54]=(this.padding!=null?";PADDING:"+this.padding+isc.px:null);if(this.topPadding!=null)
_17[54]=(_17[54]||"")+";padding-top:"+this.topPadding+"px";if(this.bottomPadding!=null)
_17[54]=(_17[54]||"")+";padding-bottom:"+this.bottomPadding+"px";if(this.leftPadding!=null)
_17[54]=(_17[54]||"")+";padding-left:"+this.leftPadding+"px";if(this.rightPadding!=null)
_17[54]=(_17[54]||"")+";padding-right:"+this.rightPadding+"px";_17[55]=(this.border?";BORDER:"+this.border:null);if(isc.Browser.isIE){_17[56]=(_11==null?null:";filter:progid:DXImageTransform.Microsoft.Alpha(opacity="+_11+")");if(this.$r9){_17[57]=";filter:progid:DXImageTransform.Microsoft.iris(irisStyle=circle)"}else{_17[57]=null}}else{if(_11!=null){_17[56]=(this.$65q?";-moz-opacity:":";opacity:")+_11}else{_17[56]=null}}
_17[60]=_6;var _18=64;if(this.$kk()&&this._useNativeTabIndex){_17[64]=_2.$ry;_17[65]=this.$qn();_17[66]=_2.$rz;_17[67]=this.$qo();if(!this.isDisabled()){_17[68]=_2.$r0;isc.$bk(_17,this.getTabIndex(),69,5);if(this.accessKey!=null){_17[74]=_2.$r1;_17[75]=this.accessKey;_18=76}else _18=74;if(!this.showFocusOutline){if(!_2.$sa)_2.$sa=" hideFocus=true";_17[_18]=_2.$sa;_18+=1}}else _18=68}
_17.length=_18;_17[_18]=this.$oa;if(_1)return _17;return _17.join(isc.emptyString)}
return _16}
);isc.evalBoundary;isc.B.push(isc.A.$r2=function(){if(!this.$sb()&&this.$sc==null){if(this.margin==null)return null;return isc.SB.concat(isc.semi,this.$om,this.margin,isc.px)}
var _1=this.$sd(),_2=isc.SB.concat(isc.semi,this.$oi,_1.left,isc.px,isc.semi,this.$oj,_1.right,isc.px,isc.semi,this.$ok,_1.top,isc.px,isc.semi,this.$ol,_1.bottom,isc.px);return _2}
,isc.A.getTagEnd=function(){if(this.useClipDiv)return this.$oo;return this.$on}
,isc.A.$rw=function(){var _1=this.overflow;var _2=(this.overflow==isc.Canvas.SCROLL||this.overflow==isc.Canvas.AUTO),_3=_2&&this.showCustomScrollbars,_4=_2&&!this.showCustomScrollbars;if(this.overflow==isc.Canvas.HIDDEN||_3)
{if(this.$ks){_1=this.$se?this.$nz:"-moz-scrollbars-none";this.$r3=true}else{_1=this.$nz}}else if(isc.Browser.isOpera&&this.overflow==isc.Canvas.VISIBLE){_1=this.$nz}else if(isc.Browser.isMoz){if(_4)this.$r3=true;else if(this.$ks){_1=this.$se?this.$nz:"-moz-scrollbars-none";this.$r3=true}}
if(this.useClipDiv&&(this.overflow==isc.Canvas.CLIP_H||this.overflow==isc.Canvas.CLIP_V))
{_1=this.$nz}
return _1}
,isc.A.$rx=function(){var _1=this.getInitialWidth(),_2=this.getInitialHeight();return this.$sf(_1,_2)}
,isc.A.getInitialWidth=function(){return this.getWidth()}
,isc.A.getInitialHeight=function(){return this.getHeight()}
,isc.A.$sf=function(_1,_2){var _3=this.$sd();if(_1!=null){if(this.showCustomScrollbars&&this.vscrollOn){_1-=this.getScrollbarSize()}
_1-=(_3.left+_3.right);if(this.isBorderBox){}else if(this.useClipDiv){if(this.padding!=null){_1-=this.getHBorderSize()}else{_1-=this.getHBorderPad()}}else{_1-=this.getHBorderPad()}}
if(_2!=null){if(this.showCustomScrollbars&&this.hscrollOn){_2-=this.getScrollbarSize()}
_2-=(_3.top+_3.bottom);if(this.isBorderBox){}else if(this.useClipDiv){if(this.padding!=null){_2-=this.getVBorderSize()}else{_2-=this.getVBorderPad()}}else{_2-=this.getVBorderPad()}}
if(_1!=null&&_1<1){this.logInfo("Specified width:"+this.getInitialWidth()+" adjusted for border, margin, "+"and scrollbars would cause initial handle size to be less than or equal to "+"zero, which is not supported. Clamping handle width to 1px.","sizing");_1=1}
if(_2!=null&&_2<1){this.logInfo("Specified height:"+this.getInitialHeight()+" adjusted for border, margin, "+"and scrollbars would cause initial handle size to be less than or equal to "+"zero, which is not supported. Clamping handle height to 1px.","sizing");_2=1}
var _4=this.$op;_4[0]=_1;_4[1]=_2;return _4}
,isc.A.$qn=function(_1){var _2=this.getID();var _3=_1?null:this.$ob;if(isc.Browser.isMoz)
return isc.SB.concat(_3,this.$or,_2,this.$ot,_3);return isc.SB.concat(_3,this.$oq,this.getID(),this.$ot,_3)}
,isc.A.$qo=function(_1){var _2=_1?null:this.$ob;return isc.SB.concat(_2,this.$os,this.getID(),this.$ot,_2)}
,isc.A.$sg=function(){if(!this.$sh){this.$sh=new Function("event",this.$qn(true))}
return this.$sh}
,isc.A.$si=function(){if(!this.$sj){this.$sj=new Function("event",this.$qo(true))}
return this.$sj}
,isc.A.getHandle=function(){if(isc.$cv)arguments.$cw=this;if(this.destroyed){this.logWarn("Attempt to access destroyed widget in the DOM - "+"destroy() called at invalid time (eg: mid-draw) or invalid method "+"called on destroy()d widget. Stack Trace:"+this.getStackTrace())}
if(!(this.$pu||this.$if))return null;if(this.$q3==null){var _1=this.getCanvasName();this.$q3=this.ns.Element.get(_1);if(this.$q3==null){this.logWarn("Unable to find handle for drawn Canvas, elementId: "+_1)}}
return this.$q3}
,isc.A.getClipHandle=function(){if(!this.useClipDiv)return this.getHandle();if(!(this.$pu||this.$if))return null;if(this._clipDiv==null){var _1=this.$rv();this._clipDiv=this.ns.Element.get(_1);if(this._clipDiv==null){this.logWarn("Unable to find clipHandle for drawn Canvas, elementId: "+_1)}}
return this._clipDiv}
,isc.A.getScrollHandle=function(){return this.getClipHandle()}
,isc.A.$sk=function(){if(!this.containsIFrame())return null;var _1=this.getHandle();if(!_1)return null;_1=_1.firstChild;if(_1&&_1.tagName&&(_1.tagName.toLowerCase()=="iframe"))return _1
return null}
,isc.A.$sl=function(){if(!this.$kn||!this.$qj)return null;if(!this.$qr){var _1=this.getCanvasName()+"__focusProxy";this.$qr=this.getDocument().getElementById(_1)}
return this.$qr}
,isc.A.$qq=function(){if(!this.$kn)return null;if(!this.$qr)this.$qr=this.$sl();return(this.$qr!=null?this.$qr.parentNode:null)}
,isc.A.getStyleHandle=function(){if(!this.$rs){this.$rs=(this.getClipHandle()?this.getClipHandle().style:null)}
return this.$rs}
,isc.A.setUpEvents=function(){if(this.canAcceptDrop)this.ns.EH.registerDroppableItem(this)}
,isc.A.$pt=function(_1){if(!_1)_1=this.children;if(!_1)return;this.children=[];for(var i=0,_3;i<_1.length;i++){_3=_1[i];if(!_3)continue;if(!isc.isA.Canvas(_3)||_3.parentElement!=this){this.addChild(_3)}else{this.children.add(_3)}}}
,isc.A.$sm=function(_1){_1=_1.substring(this.$ou.length);var _2=this.$d1(_1);var _3=this[_2]?this:isc.isA.Canvas(this.creator)&&this.creator[_2]?this.creator:this;if(isc.isA.Canvas(_3[_1]))return _3[_1];return(_3[_1]=_3.createAutoChild(_1))}
,isc.A.createCanvas=function(_1){if(isc.isA.Canvas(_1))return _1;if(_1==null)return;if(isc.isA.String(_1)){if(isc.startsWith(_1,this.$ou)){return this.$sm(_1)}
return window[_1]}
var _2=_1.autoChildName;if(_2){return this[_2]=this.createAutoChild(_2,_1)}
var _3=_1._constructor;if(_3==null||isc.ClassFactory.getClass(_3)==null){_3=isc.Canvas}
_1._constructor=null;_1.autoDraw=false;return isc.ClassFactory.newInstance(_3,_1)}
,isc.A.createCanvii=function(_1){if(_1==null)return;for(var i=0;i<_1.length;i++){_1[i]=this.createCanvas(_1[i])}
return _1}
,isc.A.setEventProxy=function(_1){var _2=this.eventProxy;if(_2==_1)return;if(_2!=null){_2.$kt.remove(this);if(this.isDrawn()){if(this.getHandle()!=null)this.getHandle().eventProxy=null;if(this.getClipHandle()!=this.getHandle())this.getClipHandle().eventProxy=null}}
this.eventProxy=_1;if(_1!=null){if(!isc.isA.Canvas(_1)){this.logWarn("setEventProxy() passed invalid eventProxy - clearing this property");this.eventProxy=null}else{if(_1.$kt==null)_1.$kt=[];_1.$kt.add(this)}}
if(this.isDrawn())this.redraw("eventProxy updated")}
,isc.A.clearEventProxy=function(){this.setEventProxy()}
,isc.A.addChild=function(_1,_2,_3){if(isc.$cv)arguments.$cw=this;if(!_1)return null;if(_1==this){this.logWarn("Attempt to add a child to itself");return}
if(!isc.isAn.Instance(_1))_1=this.createCanvas(_1);if(!isc.isA.Canvas(_1)){this.logWarn("addChild(): trying to install a non-canvas as a child.  Returning.");return null}
if(_1.parentElement==this)return _1;var _4=_1.isDrawn();if(_1.parentElement)_1.deparent(_2);isc.Canvas.$ro(_1);if(_1.drawContext)_1.drawContext=null;if(_1.htmlElement)_1.htmlElement=null;_1.parentElement=this;_1.topElement=(this.topElement||this);_1.$sn();if(_2)this[_2]=_1;if(!this.children)this.children=[];if(!this.children.contains(_1))this.children.add(_1);var _5=_1.masterElement;if(_5&&_5.parentElement!=this){_5.peers.remove(_1);if(_5[_2]==_1)_5[_2]=null;_1.masterElement=null}
if(_1.peers){for(var i=0;i<_1.peers.length;i++)this.addChild(_1.peers[i])}
if(_1.isDrawn())_1.clear();if(_4&&!this.warnAboutClear&&!isc.Page.isLoaded()){this.logWarn("Adding already drawn widget:"+_1.getID()+" to new parent:"+this.getID()+". Child has been cleared so it can be drawn inside the new "+"parent. This may be a result of autoDraw being enabled for the child.")}
if(this.isDrawn())_1.$qw();var _7=this.ns.EH;if(_7.clickMaskUp()){var _8=_7.getAllClickMaskIDs();for(var i=_8.length-1;i>=0;i--){var _9=_7.targetIsMasked(this,_8[i]);if(!_9){_7.addUnmaskedTarget(_1,_8[i]);break}else{var _10=_7.targetIsMasked(_1,_8[i]);if(!_10)_7.maskTarget(_1,_8[i])}}}
if(_3==false||_1.$so){_1.$so=null;return _1}
var _11=false,_12=(_1.$sp||!_1.tabIndex);if(isc.isA&&isc.isA.Layout&&_12&&(_1.$kk()||(_1.children!=null&&_1.children.length>0)))
{var _13=_1;while(_13.parentElement){if(isc.isA.Layout(_13.parentElement)&&_13.parentElement.isDrawn())
{_13.parentElement.updateMemberTabIndex(_13);if(_13.parentElement==this)_11=true}
_13=_13.parentElement}}
if(this.isDrawn()&&!_1.masterElement){if(this.logIsDebugEnabled(this.$n3)){this.logInfo("child added to already drawn parent: "+(isc.Page.isLoaded()?"page loaded, will draw immediately":"page not loaded, will defer child drawing"),"drawing")}
if(!_11&&_1.$kk()&&_12){var _14;if(this.children.length>1){for(var i=this.children.length-2;i>=0;i--){if(this.children[i].$kk()&&this.children[i].$sp){_14=this.children[i];break}}}
if(_14==null&&this.$kk()&&this.$sp){_14=this}
if(_14!=null)_1.$sq(_14)}
_1.draw();this.adjustOverflow("addChild")}
return _1}
,isc.A.$sn=function(){var _1=this.children;if(!_1||_1.length==0)return;for(var i=0;i<_1.length;i++){var _3=_1[i];_3.topElement=this.topElement;_3.$sn()}}
,isc.A.reparent=function(_1){if(this.getID()==_1.getID())return false;if((this.parentElement==_1.parentElement)&&this.getClipHandle()&&_1.getClipHandle()&&(this.getClipHandle().parentNode==_1.getClipHandle().parentNode)){return false}
this._adjacentHandle=_1.getClipHandle();if(_1.parentElement){_1.parentElement.addChild(this)}else{if(this.parentElement)this.deparent();else this.clear();this.draw()}
return true}
,isc.A.removePeer=function(_1,_2){if(_1==null)return;var _3=this.peers,_4;if(!_3||(_4=_3.indexOf(_1))==-1){this.logWarn("Attempt to remove peer: "+_1+" from Canvas that is not its master");return}
_3.removeAt(_4);if(this[_2]==_1)this[_2]=null;_1.masterElement=null;if(_1.depeered)_1.depeered(this,_2);if(this.peerRemoved)this.peerRemoved(_1,_2)}
,isc.A.depeer=function(_1){if(!this.masterElement)return;this.masterElement.removePeer(this,_1)}
,isc.A.removeChild=function(_1,_2){if(isc.$cv)arguments.$cw=this;if(_1==null)return;var _3=this.children,_4;if(!_3||(_4=_3.indexOf(_1))==-1){this.logWarn("Attempt to remove child: "+_1+" from Canvas that is not its parent");return}
_3.removeAt(_4);if(this[_2]==_1)this[_2]=null;delete _1.parentElement;delete _1.topElement;if(_1.isDrawn())_1.clear();isc.Canvas.$q8(_1);if(_1.peers)_1.peers.map("deparent");if(_1.deparented)_1.deparented(this,_2);if(this.childRemoved)this.childRemoved(_1,_2)}
,isc.A.deparent=function(_1){if(!this.parentElement)return;this.parentElement.removeChild(this,_1)}
,isc.A.addPeer=function(_1,_2,_3,_4){if(!_1)return null;if(!isc.isAn.Instance(_1))_1=this.createCanvas(_1);if(_4==true)_1.$q0=true;if(_1.masterElement==this)return null;if(_1.masterElement)_1.depeer(_2);_1.masterElement=this;if(_2)this[_2]=_1;if(!this.peers)this.peers=[];if(!this.peers.contains(_1))this.peers.add(_1);if(this.parentElement){this.parentElement.addChild(_1,_2)}else if(_1.parentElement){_1.deparent()}
if(_1.$nt&&(_1.opacity!=this.opacity))
_1.setOpacity(this.opacity);if(_1.$jq&&(_1.visibility!=this.visibility)){_1.setVisibility(this.visibility)}
if(_1.snapTo||_1.snapEdge)_1.$qw();var _5=this.ns.EH;if(_5.clickMaskUp()){var _6=_5.getAllClickMaskIDs();for(var i=_6.length-1;i>=0;i--){var _8=_5.targetIsMasked(this,_6[i]);if(!_8){_5.addUnmaskedTarget(_1,_6[i]);break}else{var _9=_5.targetIsMasked(_1,_6[i]);if(!_9)_5.maskTarget(_1,_6[i])}}}
if(_3==false)return _1;if(this.isDrawn()&&!_1.isDrawn()){_1.draw();if(_1.$q0)this.redraw()}
return _1}
,isc.A.setSnapTo=function(_1){this.snapTo=_1;this.parentResized()}
,isc.A.getSnapTo=function(){return this.snapTo}
,isc.A.setSnapEdge=function(_1){this.snapEdge=_1;this.parentResized()}
,isc.A.getSnapEdge=function(){return this.snapEdge}
,isc.A.getFieldMethod=function(_1,_2,_3){if(_2=="children"){if(_3=="add")return"addChild";if(_3=="remove")return"removeChild"}
return this.Super("getFieldMethod",arguments)}
,isc.A.getParentElements=function(){var _1=[],_2=this.parentElement;while(_2){_1.add(_2);_2=_2.parentElement}
return _1}
,isc.A.contains=function(_1,_2){if(!_2&&_1)_1=_1.parentElement;while(_1){if(_1==this)return true;_1=_1.parentElement}
return false}
,isc.A.$sr=function(_1){var _2=_1;while(_2){if(_2==this)return true;var _3=(_2.visibility==isc.Canvas.INHERIT);if(!_3)return false;_2=_2.parentElement}
return false}
,isc.A.getChildCount=function(){if(this.children==null)return;return this.children.map("getChildCount").sum()+this.children.length}
,isc.A.showClickMask=function(_1,_2,_3){var _4=this.getID();if(!this.ns.EH.clickMaskUp(_4)){return this.ns.EH.showClickMask(_1,_2,_3,_4)}}
,isc.A.hideClickMask=function(_1){if(_1==null)_1=this.getID();if(this.ns.EH.clickMaskUp(_1))this.ns.EH.hideClickMask(_1)}
,isc.A.clickMaskUp=function(_1){if(_1==null)_1=this.getID();return this.ns.EH.clickMaskUp(_1)}
,isc.A.unmask=function(_1){this.ns.EH.addUnmaskedTarget(this,_1)}
,isc.A.mask=function(_1){this.ns.EH.maskTarget(this,_1)}
,isc.A.isMasked=function(_1){return this.ns.EH.targetIsMasked(this,_1)}
,isc.A.$qf=function(){var _1=isc.EH.clickMaskRegistry;if(!_1||_1.length==0)return false;for(var i=_1.length-1;i>=0;i--){var _3=_1[i];if(!this.isMasked(_3))return false;if(isc.EH.isHardMask(_3))return true}
return false}
,isc.A.showComponentMask=function(_1){if(!this.componentMask){this.componentMask=this.addAutoChild("componentMask",isc.addProperties({},_1,{disabled:true,autoDraw:false,$nt:false}),isc.Canvas);this.componentMask.setRect(this.getOffsetLeft(),this.getOffsetTop(),this.getVisibleWidth(),this.getVisibleHeight());this.addPeer(this.componentMask)}else if(!this.componentMask.isDrawn())this.componentMask.draw();this.disableKeyboardEvents(true,true)}
,isc.A.hideComponentMask=function(){if(this.componentMask)this.componentMask.clear();this.disableKeyboardEvents(false,true)}
,isc.A.setRect=function(_1,_2,_3,_4,_5){if(isc.$cv)arguments.$cw=this;if(isc.isAn.Array(_1)){_2=_1[1];_3=_1[2];_4=_1[3];_1=_1[0]}else if(_1!=null&&_1.top!=null){_2=_1.top;_3=_1.width;_4=_1.height;_1=_1.left}
if(this.logIsDebugEnabled()){this.logDebug("setRect: "+this.echo({left:_1,top:_2,width:_3,height:_4}))}
var _6=this.resizeTo(_3,_4,_5,true);if(_6)this.$ss=true;this.moveTo(_1,_2,_5,true);this.$ss=null;return _6}
,isc.A.getRect=function(){return[this.getLeft(),this.getTop(),this.getVisibleWidth(),this.getVisibleHeight()]}
,isc.A.getLeft=function(){var _1=this.getStyleHandle();if(_1==null)return this.left;var _2=(isc.Browser.isIE?_1.pixelLeft:parseInt(_1.left));if(this.getScrollingMechanism()==isc.Canvas.CLIP){return _2+this.scrollLeft}else{if(this.vscrollOn&&this.showCustomScrollbars&&this.isRTL()){return _2-this.getScrollbarSize()}
return _2}}
,isc.A.getOffsetLeft=function(){var _1=this.getClipHandle();if(isc.Browser.isMoz&&this.$st())_1=null;if(_1==null){if(this.logIsInfoEnabled()){this.logInfo("getOffsetLeft() called before widget is drawn - unable to calculate offset "+"coordinates.  Returning specified coordinates")}
return this.left}
var _2=isc.Element.getOffsetLeft(_1);if(this.vscrollOn&&this.showCustomScrollbars&&this.isRTL()){_2-=this.getScrollbarSize()}
if(this.getScrollingMechanism()==isc.Canvas.CLIP){return _2+this.scrollLeft}else{return _2}}
,isc.A.setLeft=function(_1){this.moveTo(_1,null)}
,isc.A.getTop=function(){var _1=this.getStyleHandle();if(_1==null)return this.top;var _2=(isc.Browser.isIE?_1.pixelTop:parseInt(_1.top));if(this.getScrollingMechanism()==isc.Canvas.CLIP){return _2+this.scrollTop}else{return _2}}
,isc.A.getOffsetTop=function(){var _1=this.getClipHandle();if(isc.Browser.isMoz&&this.$st())_1=null;if(_1==null)return this.top;var _2=isc.Element.getOffsetTop(_1);if(this.getScrollingMechanism()==isc.Canvas.CLIP){return _2+this.scrollTop}else{return _2}}
,isc.A.setTop=function(_1){this.moveTo(null,_1)}
,isc.A.getWidth=function(){return this.width}
,isc.A.setWidth=function(_1){this.resizeTo(_1)}
,isc.A.getHeight=function(){return this.$o8}
,isc.A.setHeight=function(_1){this.resizeTo(null,_1)}
,isc.A.getMinWidth=function(){return this.minWidth}
,isc.A.getMinHeight=function(){return this.minHeight}
,isc.A.getMaxWidth=function(){return this.maxWidth}
,isc.A.getMaxHeight=function(){return this.maxHeight}
,isc.A.getRight=function(){return this.getLeft()+this.getVisibleWidth()}
,isc.A.setRight=function(_1){if(isc.isA.Number(_1)){this.resizeTo(_1-this.getLeft(),null)}else{this.logWarn("setRight() expects an integer value")}}
,isc.A.getBottom=function(){return this.getTop()+this.getVisibleHeight()}
,isc.A.setBottom=function(_1){if(isc.isA.Number(_1)){this.resizeTo(null,_1-this.getTop())}else{this.logWarn("setBottom() expects an integer value")}}
,isc.A.enforceScrollSize=function(_1,_2){if(this.logIsDebugEnabled(this.$ox)){this.logDebug("enforcing scroll size:"+[_1,_2],"enforceScrollSize")}
if(!this.$pu&&!this.$if)return;if(_1==null)_1=0;if(_2==null)_2=0;if(isNaN(_1)||isNaN(_2)||_1<0||_2<0){this.logWarn("Invalid width or height in Canvas.enforceScrollSize()"+" on component: "+this.getID()+" with sizes: "+[_1,_2]+this.getStackTrace());return}
if(this.$re==null){var _3=this.$ov;var _4=this.$qs(this.$ow);_3[1]=_4;_3[3]=_1-1;_3[5]=_2-1;var _5=_3.join(isc.emptyString);this.$re=isc.Element.insertAdjacentHTML(this.getHandle(),this.$n8,_5,true);if(this.$re==null){this.$re=document.getElementById(_4)}}else if(!this.$qe||this.$qe[0]!=_1||this.$qe[1]!=_2)
{this.$re.style.left=(_1-1)+isc.px;this.$re.style.top=(_2-1)+isc.px}
this.$qe=[_1,_2]}
,isc.A.stopEnforcingScrollSize=function(){if(this.logIsDebugEnabled(this.$ox)){this.logDebug("stop enforcing scroll size","enforceScrollSize")}
delete this.$qe;if(!this.isDrawn())return;if(this.$re){this.$re.style.left=this.$oy;this.$re.style.top=this.$oy}}
,isc.A.getScrollWidth=function(_1){if(isc.$cv)arguments.$cw=this;if(this.$qz){this.$qz=null;this.adjustOverflow("widthCheckWhileDeferred")}
if(!_1&&this.$su!=null)return this.$su;var _2=0,_3=this.getClipHandle();if(_3==null){this.logDebug("No size info available from DOM, returning user-specified size");return this.getInnerWidth()}
if(this.allowNativeContentPositioning){this.$sv=true;if(isc.Browser.isSafari||(isc.Browser.isMoz&&((_3.scrollWidth||_3.offsetWidth)<=parseInt(_3.style.width))))
{_2=isc.Element.getScrollWidth(this.getHandle())}else{_2=isc.Element.getScrollWidth(_3)}
delete this.$sv}else{var _4=this.children,_5=_4&&_4.length>0,_6=0;if(!_5||this.allowContentAndChildren){if(isc.Browser.isSafari&&this.overflow==isc.Canvas.VISIBLE){_2=this.getHandle().scrollWidth;if(this.useClipDiv&&this.padding==null){_2+=isc.Element.$sw(this.styleName)}}else{_6=(_3.scrollWidth||_3.offsetWidth);if(_6!=null&&_6!=this.$n1){_2=_6;if(isc.Browser.isOpera){_2-=(this.getLeftBorderSize()+this.getLeftPadding())}
if(isc.Browser.isMoz)_2-=this.$sx();if(isc.Browser.isMoz&&this.getScrollingMechanism()==isc.Canvas.NESTED_DIV)
{var _7=this.getHandle().offsetLeft;if(_7<0)_7=-_7;_2-=_7}}
if(isc.Browser.isSafari||(isc.Browser.isMoz&&_2<=parseInt(_3.style.width)))
{var _8=this.getHandle(),_9=_8.scrollWidth||_8.offsetWidth;if(_9>_2)_2=_9}}}
if(_5){var _10=this.$sy(this.children);_2=Math.max(_10,_2);if(this.$qe!=null){var _11=this.$qe[0];_2=Math.max(_2,_11)}}}
this.$su=_2;return _2}
,isc.A.$sy=function(_1,_2){var _3=0,_4=0,_5=this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_H,_6;for(var i=0;i<_1.length;i++){var _8=_1[i];if(!_8.isDrawn()&&!_8.$59d)continue;if(_2&&_8.visibility==isc.Canvas.HIDDEN)continue;var _9=(_8.position!=isc.Canvas.RELATIVE),_10=_8.getVisibleWidth(),_11=(_9?_8.getLeft():_8.getOffsetLeft());if(!_5&&_9)_10-=_8.getRightMargin();if(_11+_10>_4){_4=_11+_10;_6=_8}
if(_11<_3)_3=Math.max(0,_11)}
return _4-_3}
,isc.A.getScrollHeight=function(_1){if(isc.$cv)arguments.$cw=this;if(this.$qz){this.$qz=null;this.adjustOverflow("heightCheckWhileDeferred")}
if(!_1&&this.$sz!=null)return this.$sz;var _2=0,_3=this.getClipHandle();if(_3==null){this.logDebug("No size info available from DOM, returning user-specified size");return this.getInnerHeight()}
if(this.allowNativeContentPositioning){this.$s0=true;if(isc.Browser.isSafari||(isc.Browser.isMoz&&((_3.scrollHeight||_3.offsetHeight)<=parseInt(_3.style.height))))
{_2=isc.Element.getScrollHeight(this.getHandle())}else{_2=isc.Element.getScrollHeight(_3)}
delete this.$s0}else{var _4=(this.children&&this.children.length>0);if(!_4||this.allowContentAndChildren){if(isc.Browser.isSafari&&this.overflow==isc.Canvas.VISIBLE){_2=this.getHandle().scrollHeight;if(this.useClipDiv&&this.padding==null){_2+=isc.Element.$s1(this.styleName)}}else{var _5=(_3.scrollHeight||_3.offsetHeight);if(_5!=null&&_5!=this.$n1){_2=_5;if(isc.Browser.isMoz)_2-=this.$s2();if(this.useClipDiv&&(isc.Browser.isSafari||(isc.Browser.isMoz&&_2<=parseInt(_3.style.height))))
{var _6=this.getHandle(),_7=_6.scrollHeight||_6.offsetHeight;if(_7>_2)_2=_7}}}}
if(_4){var _8=this.$s3(this.children);if(_8>_2){_2=_8}
if(this.$qe!=null){var _9=this.$qe[1];_2=Math.max(_2,_9)}}}
this.$sz=_2;return _2}
,isc.A.$s2=function(){if(!isc.isAn.Array(this.children))return 0;var _1=0;for(var i=0;i<this.children.length;i++){var _3=this.children[i],_4=(_3.position==isc.Canvas.ABSOLUTE?_3.getTop():_3.getOffsetTop());if(_4<_1)_1=_4}
return-_1}
,isc.A.$sx=function(){if(!isc.isAn.Array(this.children))return 0;if(!this.useClipDiv)return 0;var _1=0;for(var i=0;i<this.children.length;i++){var _3=this.children[i],_4=(_3.position==isc.Canvas.ABSOLUTE?_3.getLeft():_3.getOffsetLeft());if(_4<_1)_1=_4}
return-_1}
,isc.A.$s3=function(_1,_2){var _3=0,_4=0,_5=this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_H;for(var i=0;i<_1.length;i++){var _7=_1[i];if(!_7.isDrawn()&&!_7.$59d)continue;if(_2&&_7.visibility==isc.Canvas.HIDDEN)continue;var _8=_7.position!=isc.Canvas.RELATIVE,_9=_7.getVisibleHeight(),_10=(_8?_7.getTop():_7.getOffsetTop());if(!_5&&_8)_9-=_7.getBottomMargin();if(_9+_10>_4)_4=_9+_10;if(_10<_3)_3=Math.max(0,_10)}
return _4-_3}
,isc.A.getScrollLeft=function(){if(!this.isDrawn()||this.getScrollingMechanism()!=isc.Canvas.NATIVE){return this.scrollLeft}
return this.getScrollHandle().scrollLeft}
,isc.A.getScrollTop=function(){if(!this.isDrawn()||this.getScrollingMechanism()!=isc.Canvas.NATIVE){return this.scrollTop}
return this.getScrollHandle().scrollTop}
,isc.A.setPageLeft=function(_1){this.moveBy(_1-this.getPageLeft(),0)}
,isc.A.setPageTop=function(_1){this.moveBy(0,_1-this.getPageTop())}
,isc.A.getParentPageRect=function(){if(this.parentElement){var _1=this.parentElement,_2=_1.getPageRect();var _3=_1.getLeftMargin(),_4=_1.getTopMargin();_2[0]+=_3;_2[1]+=_4;_2[2]-=(_3+_1.getRightMargin());_2[3]-=(_4+_1.getBottomMargin());if(this.peers&&this.peers.length>0){var _5=this.getPeerRect(),_6=this.getPageRect();_2[0]+=(_6[0]-_5[0]);_2[1]+=(_6[1]-_5[1]);_2[2]-=(_5[2]-_6[2]);_2[3]-=(_5[3]-_6[3])}
var _7=_1.$tj();_2[0]+=_7.left;_2[1]+=_7.top;_2[2]-=_7.right+_7.left;_2[3]-=_7.bottom+_7.top;var _8=_1.getScrollbarSize();if(_1.vscrollOn)_2[2]-=_8;if(_1.hscrollOn)_2[3]-=_8;return _2}
else return[0,0,isc.Page.getWidth(),isc.Page.getHeight()]}
,isc.A.setPageRect=function(_1,_2,_3,_4,_5){if(isc.isAn.Array(_1)){_2=_1[1];_3=_1[2];_4=_1[3];_1=_1[0]}
if(this.keepInParentRect&&this.ns.EH.dragging&&this==this.ns.EH.dragMoveTarget){var _6=(_3==null&&_4==null);if(_3==null)_3=this.getVisibleWidth();if(_4==null)_4=this.getVisibleHeight();var _7=_1+_3,_8=_2+_4,_9;var _10=isc.isAn.Array(this.keepInParentRect);if(_10){_9=this.keepInParentRect}else{_9=this.getParentPageRect()}
var _11=_9[0],_12=_9[1],_13=_9[2],_14=_9[3],_15=_11+_13,_16=_12+_14;var _17=this.ns.EH,_18=_17.getDragTarget(_17.getLastEvent()).parentElement;if(_18){var _19=_18.getScrollLeft(),_20=_18.getScrollWidth()-
_18.getViewportWidth()-_19,_21=_18.getScrollTop(),_22=_18.getScrollHeight()-
_18.getViewportHeight()-_21}else{var _19=isc.Page.getScrollLeft(),_20=isc.Page.getScrollWidth()-
isc.Page.getWidth()-_19,_21=isc.Page.getScrollTop(),_22=isc.Page.getScrollHeight()-
isc.Page.getHeight()-_21}
if(_20<0)_20=0;if(_22<0)_22=0;if(_6){if(_1<_11-_19){_1=_11-_19}
else if(_7>_15+_20){_1=_15+_20-_3}
if(_2<_12-_21){_2=_12-_21}
else if(_8>_16+_22){_2=_16+_22-_4}}else{if(_1<_11){_3=_3-(_11-_1);_1=_11}else if(_7>_15){_3=_3-(_7-_15)}
if(_2<_12){_4=_4-(_12-_2);_2=_12}else if(_8>_16){_4=_4-(_8-_16)}}}
this.moveBy(_1-this.getPageLeft(),_2-this.getPageTop());if(_5){var _23=this.getVisibleWidth(),_24=this.getVisibleHeight(),_25=_23-_3,_26=_24-_4;this.resizeTo(_3,_4);this.redrawIfDirty("setPageRect");var _27=(_23-this.getVisibleWidth()),_28=(_24-this.getVisibleHeight());if(_1>this.getPageLeft())_1-=(_25-_27);if(_2>this.getPageTop())_2-=(_26-_28)}else{this.resizeTo(_3,_4)}}
,isc.A.getCanvasLeft=function(){if(!this.isDrawn()){if(this.position==isc.Canvas.RELATIVE){this.logWarn("getCanvasLeft(): Called on undrawn relatively-position widget '"+this.getID()+"'.  The drawn coordinates can not be reliably "+"calculated until the widget has drawn - returning estimated position")}
return this.left}
if(isc.Browser.isMoz&&this.$st())return this.left;var _1=this.parentElement,_2=this.$s4(_1==null?null:_1.getHandle());if(_1&&_1.getScrollingMechanism()==isc.Canvas.CLIP){_2-=this.parentElement.scrollLeft}
return _2}
,isc.A.getPageLeft=function(){if(isc.$cv)arguments.$cw=this;var _1=this.getClipHandle();if(_1&&isc.Browser.isMoz&&this.$st())_1=null;if(_1==null){if(!this.isDrawn()&&this.position==isc.Canvas.RELATIVE){this.logWarn("getPageLeft(): Called on undrawn relatively-position widget '"+this.getID()+"'.  The page level coordinates can not be reliably "+"calculated until the widget has drawn - returning estimated position")}
var _2=this.parentElement;if(_2){var _3=0;if(_2.hscrollOn){if(!this.isRTL())_3=_2.getScrollLeft();else{var _4=_2.getScrollWidth()-_2.getViewportWidth();_3=-1*(_4-_2.getScrollLeft())}}
return this.getOffsetLeft()+_2.getLeftBorderSize()+_2.getLeftMargin()+_2.getPageLeft()-_3}else{return this.getOffsetLeft()}}
if(isc.Browser.isMoz){if(this.useClientRectAPI&&isc.Browser.geckoVersion>20071109&&_1.getBoundingClientRect!=null)
{var _5=_1.getBoundingClientRect().left;_5-=this.getLeftMargin();_5+=isc.Page.getScrollLeft();return _5}else if((this.useBoxObjectAPI||(this.useBoxObjectAPISelectively&&isc.$54j))&&isc.Browser.geckoVersion>20061010&&!isc.Browser.isCamino&&document.getBoxObjectFor!=null)
{var _6=this.getDocument().getBoxObjectFor(_1);if(_6){var _5=_6.x-this.getLeftMargin(),_2=this.parentElement;while(_2){_5+=_2.getScrollLeft();_2=_2.parentElement}}}}
return this.$s4()}
,isc.A.$s4=function(_1){if(_1==null)_1=this.getDocumentBody();var _2=this.ns.Element.$s4(this.getClipHandle(),_1,this.isRTL());if(this.getScrollingMechanism()==isc.Canvas.CLIP)_2+=this.scrollLeft;return _2}
,isc.A.getCanvasTop=function(){if(!this.isDrawn()){if(this.position==isc.Canvas.RELATIVE){this.logWarn("getCanvasTop(): Called on undrawn relatively-position widget '"+this.getID()+"'.  The drawn coordinates can not be reliably "+"calculated until the widget has drawn - returning estimated position")}
return this.top}
if(isc.Browser.isMoz&&this.$st())return this.top;var _1=this.$s5(this.parentElement==null?null:this.parentElement.getHandle());if(this.parentElement&&this.parentElement.getScrollingMechanism()==isc.Canvas.CLIP){_1-=this.parentElement.scrollTop}
return _1}
,isc.A.getPageTop=function(){var _1=this.getClipHandle();if(_1&&isc.Browser.isMoz&&this.$st())_1=null;if(_1==null){if(!this.isDrawn()&&this.position==isc.Canvas.RELATIVE){this.logWarn("getPageTop(): Called on undrawn relatively-positioned widget '"+this.getID()+"'.  The page level coordinates can not be reliably "+"calculated until the widget has drawn - returning estimated position")}
var _2=this.parentElement;if(_2){return this.getOffsetTop()+_2.getTopBorderSize()+_2.getTopMargin()+_2.getPageTop()-_2.getScrollTop()}else{return this.getOffsetTop()}}
if(isc.Browser.isMoz){if(this.useClientRectAPI&&isc.Browser.geckoVersion>20071109&&_1.getBoundingClientRect!=null)
{var _3=_1.getBoundingClientRect().top;_3-=this.getTopMargin();_3+=isc.Page.getScrollTop();return _3}else if((this.useBoxObjectAPI||(this.useBoxObjectAPISelectively&&isc.$54j))&&isc.Browser.geckoVersion>20061010&&!isc.Browser.isCamino&&document.getBoxObjectFor!=null)
{var _4=this.getDocument().getBoxObjectFor(_1);if(_4){var _3=_4.y-this.getTopMargin(),_2=this.parentElement;while(_2){_3+=_2.getScrollTop();_2=_2.parentElement}}}}
return this.$s5()}
,isc.A.$s5=function(_1){if(_1==null)_1=this.getDocumentBody();var _2=this.ns.Element.$s5(this.getClipHandle(),_1);if(this.getScrollingMechanism()==isc.Canvas.CLIP)_2+=this.scrollTop;return _2}
,isc.A.getPageRight=function(){return this.getPageLeft()+this.getVisibleWidth()}
,isc.A.getPageBottom=function(){return this.getPageTop()+this.getVisibleHeight()}
,isc.A.getPageRect=function(){return[this.getPageLeft(),this.getPageTop(),this.getVisibleWidth(),this.getVisibleHeight()]}
,isc.A.usingCSSScrollbars=function(){return!this.showCustomScrollbars&&(this.overflow==isc.Canvas.AUTO||this.overflow==isc.Canvas.SCROLL)}
,isc.A.getScrollingMechanism=function(){if(!this.$s6){if(!this.showCustomScrollbars&&(this.overflow==isc.Canvas.AUTO||this.overflow==isc.Canvas.SCROLL))
{this.$s6=isc.Canvas.NATIVE}else{if((isc.Browser.isSafari&&isc.Browser.SafariVersion<125)||(isc.Browser.isMoz&&isc.Browser.isUnix&&isc.Browser.geckoVersion<=20031007))
{this.$s6=isc.Canvas.NESTED_DIV}else{this.$s6=isc.Canvas.NATIVE}}}
return this.$s6}
,isc.A.setMargin=function(_1){this.$s7=null;this.$s8=null;if(_1==null){delete this.margin}else{var _2=_1;if(isc.isA.String(_1))_1=parseInt(_1);if(!isc.isA.Number(_1)){this.logWarn("setMargin() passed invalid margin:"+_2+", ignoring.");return}
this.margin=_1}
var _3=this.getStyleHandle();if(!_3)return;if(_1==null){_3.margin=0}else{_3.margin=this.margin+isc.px}
this.adjustOverflow("setMargin")}
);isc.evalBoundary;isc.B.push(isc.A.getMargin=function(){return this.margin}
,isc.A.getTopMargin=function(){return this.$sd().top}
,isc.A.getLeftMargin=function(){return this.$sd().left}
,isc.A.getBottomMargin=function(){return this.$sd().bottom}
,isc.A.getRightMargin=function(){return this.$sd().right}
,isc.A.$sd=function(){var _1=this.$sc,_2=(_1!=null),_3,_4,_5,_6;if(_2){_3=_1.top;_6=_1.bottom;_4=_1.left;_5=_1.right;if((!_3||_3.length==0)&&(!_6||_6.length==0)&&(!_4||_4.length==0)&&(!_5||_5.length==0))_2=false}
if(!this.$sb()&&!_2)return this.$s9();var _7=this.$s8;if(_7)return _7;var _8=this.$ta();_7={left:_8.left,right:_8.right,top:_8.top,bottom:_8.bottom};if(_2){if(_3){for(var i=0;i<_3.length;i++){var _10=_3[i];_7.top+=_10.getVisibleHeight();if(_10.$55s!=null){_7.top-=_10.$55s}}}
if(_6){for(var i=0;i<_6.length;i++){var _11=_6[i];_7.bottom+=_11.getVisibleHeight();if(_11.$55s!=null){_7.bottom-=_11.$55s}}}
if(_4){for(var i=0;i<_4.length;i++){var _12=_4[i];_7.left+=_12.getVisibleWidth();if(_12.$55s!=null){_7.left-=_12.$55s}}}
if(_5){for(var i=0;i<_5.length;i++){var _13=_5[i];_7.right+=_13.getVisibleWidth();if(_13.$55s!=null){_7.right-=_13.$55s}}}}
if(this.$sb()){var _14=this.$pq();_7.left+=_14.$tb,_7.right+=_14.$tc,_7.top+=_14.$td,_7.bottom+=_14.$te}
return(this.$s8=_7)}
,isc.A.$ta=function(){var _1=this.$if;this.$if=false;var _2=this.$s9();this.$if=_1;return _2}
,isc.A.$s9=function(){if(this.$s7!=null)return this.$s7;var _1={},_2=isc.px;if(!this.isDrawn()){var _3=this.margin;if(isc.isA.String(_3)){if(_3.endsWith(_2)||parseInt(_3)+""==_3)
_3=parseInt(_3)}
if(isc.isA.Number(_3)){_1.top=_3;_1.bottom=_3;_1.left=_3;_1.right=_3;this.$s7=_1;return _1}}else{var _4=this.getStyleHandle(),_5=_4.marginLeft,_6=_4.marginRight,_7=_4.marginTop,_8=_4.marginBottom;if(isc.isA.String(_5)&&_5.endsWith(_2))
_5=parseInt(_5);if(isc.isA.String(_6)&&_6.endsWith(_2))
_6=parseInt(_6)
if(isc.isA.String(_7)&&_7.endsWith(_2))
_7=parseInt(_7);if(isc.isA.String(_8)&&_8.endsWith(_2))
_8=parseInt(_8)
if(isc.isA.Number(_5))_1.left=_5;if(isc.isA.Number(_6))_1.right=_6;if(isc.isA.Number(_7))_1.top=_7;if(isc.isA.Number(_8))_1.bottom=_8}
if(this.className){if(!isc.isA.Number(_1.left))
_1.left=isc.Element.$tf(this.className);if(!isc.isA.Number(_1.right))
_1.right=isc.Element.$tg(this.className);if(!isc.isA.Number(_1.top))
_1.top=isc.Element.$th(this.className);if(!isc.isA.Number(_1.bottom))
_1.bottom=isc.Element.$ti(this.className)}else{if(!isc.isA.Number(_1.left))
_1.left=0;if(!isc.isA.Number(_1.right))
_1.right=0;if(!isc.isA.Number(_1.top))
_1.top=0;if(!isc.isA.Number(_1.bottom))
_1.bottom=0}
return(this.$s7=_1)}
,isc.A.getTopBorderSize=function(){return this.$tj().top}
,isc.A.getBottomBorderSize=function(){return this.$tj().bottom}
,isc.A.getLeftBorderSize=function(){return this.$tj().left}
,isc.A.getRightBorderSize=function(){return this.$tj().right}
,isc.A.getHBorderSize=function(){return(this.getLeftBorderSize()+this.getRightBorderSize())}
,isc.A.getVBorderSize=function(){return this.getTopBorderSize()+this.getBottomBorderSize()}
,isc.A.$tj=function(){if(this.$tk!=null)return this.$tk;var _1={},_2=isc.px;if(!this.isDrawn()){var _3=this.border;if(_3!=null&&isc.contains(_3,_2)){var _4=_3.match(/\s*\d+px/g);if(isc.isAn.Array(_4))_4=parseInt(_4[0]);else _4=parseInt(_4);if(isc.isA.Number(_4)){this.$tk={left:_4,right:_4,top:_4,bottom:_4}
return this.$tk}}}else{var _5=this.getStyleHandle(),_6=_5.borderLeftWidth,_7=_5.borderRightWidth,_8=_5.borderTopWidth,_9=_5.borderBottomWidth;if(isc.isA.String(_6)&&_6.endsWith(_2))
_6=parseInt(_6);if(isc.isA.String(_7)&&_7.endsWith(_2))
_7=parseInt(_7)
if(isc.isA.String(_8)&&_8.endsWith(_2))
_8=parseInt(_8);if(isc.isA.String(_9)&&_9.endsWith(_2))
_9=parseInt(_9)
if(isc.isA.Number(_6))_1.left=_6;if(isc.isA.Number(_7))_1.right=_7;if(isc.isA.Number(_8))_1.top=_8;if(isc.isA.Number(_9))_1.bottom=_9}
if(this.className){if(!isc.isA.Number(_1.left))
_1.left=isc.Element.$tl(this.className);if(!isc.isA.Number(_1.right))
_1.right=isc.Element.$tm(this.className);if(!isc.isA.Number(_1.top))
_1.top=isc.Element.$tn(this.className);if(!isc.isA.Number(_1.bottom))
_1.bottom=isc.Element.$to(this.className)}else{if(!isc.isA.Number(_1.left))
_1.left=0;if(!isc.isA.Number(_1.right))
_1.right=0;if(!isc.isA.Number(_1.top))
_1.top=0;if(!isc.isA.Number(_1.bottom))
_1.bottom=0}
return(this.$tk=_1)}
,isc.A.setTopPadding=function(_1){this.topPadding=_1;if(isc.isA.Number(_1))_1+="px";if(this.isDrawn())this.getHandle().paddingTop=_1}
,isc.A.setLeftPadding=function(_1){this.leftPadding=_1;if(isc.isA.Number(_1))_1+="px";if(this.isDrawn())this.getHandle().paddingLeft=_1}
,isc.A.setRightPadding=function(_1){this.rightPadding=_1;if(isc.isA.Number(_1))_1+="px";if(this.isDrawn())this.getHandle().paddingRight=_1}
,isc.A.setBottomPadding=function(_1){this.bottomPadding=_1;if(isc.isA.Number(_1))_1+="px";if(this.isDrawn())this.getHandle().paddingBottom=_1}
,isc.A.setPadding=function(_1){this.$tp=null;if(_1!=null){var _2=_1;if(isc.isA.String(_1))_1=parseInt(_1);if(!isc.isA.Number(_1)){this.logWarn("setPadding passed unrecognized value:"+_2+" - ignoring");return}}
this.padding=_1;var _3=isc.Browser.isDOM?this.getHandle():null;if(!_3){return}
if(_1==null){_3.style.padding=null;if(this.useClipDiv)this.getClipHandle().style.padding=null}else{_3.style.padding=this.padding+isc.px;if(this.useClipDiv)this.getClipHandle().style.padding=this.$65h}}
,isc.A.getPadding=function(){return this.padding}
,isc.A.getTopPadding=function(){return this.$tq().top}
,isc.A.getBottomPadding=function(){return this.$tq().bottom}
,isc.A.getLeftPadding=function(){return this.$tq().left}
,isc.A.getRightPadding=function(){return this.$tq().right}
,isc.A.getVPadding=function(){return this.getTopPadding()+this.getBottomPadding()}
,isc.A.getHPadding=function(){return this.getLeftPadding()+this.getRightPadding()}
,isc.A.$tq=function(){if(this.$tp!=null)return this.$tp;var _1={},_2=isc.px;if(this.isDrawn()&&this.getHandle()!=null){var _3=this.getHandle().style;if(_3.paddingTop!=null&&!isc.isAn.emptyString(_3.paddingTop)&&_3.paddingTop.endsWith(_2)){_1.top=parseInt(_3.paddingTop)}
if(_3.paddingBottom!=null&&!isc.isAn.emptyString(_3.paddingBottom)&&_3.paddingBottom.endsWith(_2)){_1.bottom=parseInt(_3.paddingBottom)}
if(_3.paddingLeft!=null&&!isc.isAn.emptyString(_3.paddingLeft)&&_3.paddingLeft.endsWith(_2)){_1.left=parseInt(_3.paddingLeft)}
if(_3.paddingRight!=null&&!isc.isAn.emptyString(_3.paddingRight)&&_3.paddingRight.endsWith(_2)){_1.right=parseInt(_3.paddingRight)}}else if(this.padding){_1.left=_1.right=_1.bottom=_1.top=parseInt(this.padding)}
if(this.className){if(!isc.isA.Number(_1.left))_1.left=isc.Element.$tr(this.className);if(!isc.isA.Number(_1.right))_1.right=isc.Element.$ts(this.className);if(!isc.isA.Number(_1.top))_1.top=isc.Element.$tt(this.className);if(!isc.isA.Number(_1.bottom))_1.bottom=isc.Element.$tu(this.className)}else{if(!isc.isA.Number(_1.left))_1.left=0;if(!isc.isA.Number(_1.right))_1.right=0;if(!isc.isA.Number(_1.top))_1.top=0;if(!isc.isA.Number(_1.bottom))_1.bottom=0}
return(this.$tp=_1)}
,isc.A.containsPoint=function(_1,_2,_3){if(isc.$cv)arguments.$cw=this;if(!this.isVisible()||!this.isDrawn())return false;if(_3==null)_3=false;var _4=this.getPageLeft()+this.getLeftMargin();if(_1<_4)return false;var _5=this.getPageTop()+this.getTopMargin();if(_2<_5)return false;var _6=_3?this.getViewportWidth():(this.getVisibleWidth()-this.getHMarginSize());if(_1>_4+_6)return false;var _7=_3?this.getViewportHeight():(this.getVisibleHeight()-this.getVMarginSize());if(_2>_5+_7)return false;var _8=0,_9=0;var _10=this.$tv=this.$tv||[];_10.length=1;_10[0]=this;var i=1,_12=this;while(_12.parentElement!=null){_12=_12.parentElement
_10[i]=_12;i++}
var _13,_14;for(var j=_10.length-1;j>=0;j--){var _16=_10[j];_8+=_16.getCanvasLeft();_9+=_16.getCanvasTop();if(j+1<_10.length){var _17=_10[j+1];_8-=_17.getScrollLeft();_9-=_17.getScrollTop()}
_8+=_16.getLeftMargin();_9+=_16.getTopMargin();if(_16==this&&!_3){_13=_16.getVisibleWidth()-_16.getHMarginSize();_14=_16.getVisibleHeight()-_16.getVMarginSize()}else{_8+=_16.getLeftBorderSize();_9+=_16.getTopBorderSize();_13=_16.getViewportWidth();_14=_16.getViewportHeight()}
if(!((_1>=_8)&&(_1<=_8+_13)&&(_2>=_9)&&(_2<=_9+_14)))
{return false}}
return true}
,isc.A.visibleAtPoint=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;if(!this.containsPoint(_1,_2,_3)){return false}
if(!isc.isAn.Array(_4))_4=[_4];var _5=this;while(_5!=null){var _6=(_5.parentElement!=null?_5.parentElement.children:isc.Canvas.$tw);for(var i=0;i<_6.length;i++){var _8=_6[i];if(_8==null||_8==_5||!_8.isDrawn()||!_8.isVisible()||_4.contains(_8)||_8.isMouseTransparent||(_8.getZIndex()<_5.getZIndex()))
{continue}
if(_8.$jr)continue;if(isc.isA.Scrollbar(_8)||isc.isA.ScrollThumb(_8))continue;if(isc.EdgedCanvas&&isc.isA.EdgedCanvas(_8)&&_8.masterElement&&_8.masterElement.$l0==_8)continue;if(isc.Layout&&isc.isA.Layout(_8.parentElement)&&_8.parentElement.hasMember(_8)&&_8.parentElement.hasMember(_5))
{continue}
if(isc.TabSet&&isc.isA.TabBar(_8)&&isc.isA.TabSet(_8.parentElement)&&_8.parentElement.paneContainer&&_8.parentElement.paneContainer.contains(this))
{continue}
if(_8.containsPoint(_1,_2,false)){return false}}
_5=_5.parentElement}
return true}
,isc.A.scrollIntoView=function(_1,_2,_3,_4,_5,_6,_7,_8){if(_3==null)_3=0;if(_4==null)_4=0;var _9=true;var _10,_11;if(this.overflow!=isc.Canvas.VISIBLE&&this.overflow!=isc.Canvas.IGNORE){if(_1!=null){var _12=this.getScrollLeft(),_13=this.getViewportWidth(),_14=_12+_13,_15=false,_16=false;if(_1+_3>_14)_15=true;if(_1<_12)_16=true;if(_15!=_16){if(_5==this.$oz){_10=_1}else if(_5==this.$o1){_10=(_1+_3)-this.getViewportWidth()}else{_10=(_1+parseInt(_3/ 2))
-parseInt(this.getViewportWidth()/2)}}}
if(_2!=null){var _17=this.getScrollTop(),_18=_17+this.getViewportHeight(),_19=false,_20=false;if(_2+_4>_18)_20=true;if(_2<_17)_19=true;if(_19!=_20){if(_6==this.$o0){_11=_2}else if(_6==this.$o2){_11=(_2+_4)-this.getViewportHeight()}else{_11=(_2+parseInt(_4/ 2))
-parseInt(this.getViewportHeight()/2)}}}
if(_10!=null||_11!=null){if(_7){this.animateScroll(_10,_11,_8);_9=false}else{this.scrollTo(_10,_11)}}}
if(this.parentElement!=null){var _21=_1,_22=_2;if(_21!=null){_21-=this.getScrollLeft();_21+=this.getOffsetLeft()}
if(_22!=null){_22-=this.getScrollTop();_22+=this.getOffsetTop()}
this.parentElement.scrollIntoView(_21,_22,_3,_4)}
if(_8&&_9)this.fireCallback(_8)}
,isc.A.intersects=function(_1){var _2=_1.getPageLeft(),_3=_1.getVisibleWidth(),_4=_1.getPageTop(),_5=_1.getVisibleHeight();return this.intersectsRect(_2,_4,_3,_5)}
,isc.A.intersectsRect=function(_1,_2,_3,_4){var _5,_6=[];if(isc.isAn.Array(_1))_5=_1;else _5=[_1,_2,_3,_4];return isc.Canvas.rectsIntersect(_5,[this.getPageLeft(),this.getPageTop(),this.getVisibleWidth(),this.getVisibleHeight()])}
,isc.A.containsEvent=function(){return this.containsPoint(this.ns.EH.getX(),this.ns.EH.getY())}
,isc.A.getEventEdge=function(_1){var _2=this.ns.EH;if(!_1)_1=(this.resizeFrom||_2.ALL_EDGES);var _3=this.edgeMarginSize;if(!isc.isAn.Array(_1))_1=[_1];var _4=this.$ta(),_5=_4.left,_6=_4.right,_7=_4.top,_8=_4.bottom;var _9=this.getPageLeft()+_5,_10=this.getPageTop()+_7,_11=(this.getPageRight()-_6)+1,_12=(this.getPageBottom()-_8)+1,y=_2.getY(),x=_2.getX(),_15="",_16="";if(y<_10||y>_12||x<_9||x>_11)return null;if(y>=(_12-_3)&&y<=_12)_16="B";else if(y>=_10&&y<=(_10+_3+1))_16="T";if(x>=(_11-_3)&&x<=_11)_15="R";else if(x>=_9&&x<=(_9+_3+1))_15="L";if(_15!=""||_16!=""){var _17=_16+_15;if(_1.contains(_17))return _17;else if(_15!=""&&_1.contains(_15))return _15;else if(_16!=""&&_1.contains(_16))return _16}
return null}
,isc.A.getOffsetX=function(){var _1=this.ns.EH.getX()
-(this.getPageLeft()+this.getLeftBorderSize())+this.getScrollLeft()
-(this.vscrollOn&&this.isRTL()?this.getScrollbarSize():0);return _1}
,isc.A.getOffsetY=function(){return this.ns.EH.getY()+this.getScrollTop()
-(this.getPageTop()+this.getTopBorderSize())}
,isc.A.setClip=function(_1,_2,_3,_4){if(isc.isAn.Array(_1))
this.$q6=_1;else
this.$q6=[_1,_2,_3,_4];var _5=this.getClipHandle();if(_5!=null){var _6=this.$q6;if(this.getScrollingMechanism()==isc.Canvas.CLIP){_6=_6.duplicate();_6[3]+=this.scrollLeft;_6[0]+=this.scrollTop;_6[1]+=this.scrollLeft;_6[2]+=this.scrollTop}
if(this.overflow==isc.Canvas.HIDDEN||(this.showCustomScrollbars==true&&(this.overflow==isc.Canvas.AUTO||this.overflow==isc.Canvas.SCROLL))){var _7=parseInt(_5.style.width),_8=_6[1],_9=parseInt(_5.style.height),_10=_6[2],_11=this.$sf(_8,_10);_8=_11[0];_10=_11[1];if(_7<_8){this.logDebug("setClip(): setting width because handle.width is smaller")
_5.style.width=_8+isc.px}
if(_9<_10){this.logDebug("setClip(): setting height because handle.height is smaller\r"+[_9,_10])
_5.style.height=_10+isc.px}}
_5.style.clip="rect("+_6.join("px ")+"px)"}}
,isc.A.getScrollbarSize=function(){if(this.showCustomScrollbars)return this.scrollbarSize;return isc.Element.getNativeScrollbarSize()}
,isc.A.getViewportWidth=function(){return this.getVisibleWidth()-
(this.vscrollOn?this.getScrollbarSize():0)-
this.getHMarginBorder()}
,isc.A.getViewportHeight=function(){return this.getVisibleHeight()-
(this.hscrollOn?this.getScrollbarSize():0)-
this.getVMarginBorder()}
,isc.A.getOuterViewportWidth=function(){return this.getVisibleWidth()-(this.vscrollOn?this.getScrollbarSize():0)-
this.getHMarginSize()}
,isc.A.getOuterViewportHeight=function(){return this.getVisibleHeight()-(this.hscrollOn?this.getScrollbarSize():0)-
this.getVMarginSize()}
,isc.A.getInnerHeight=function(){return this.getHeight()
-((this.hscrollOn||this.overflow==isc.Canvas.SCROLL)?this.getScrollbarSize():0)
-this.getVMarginBorder()}
,isc.A.getInnerWidth=function(){var _1=this.getWidth();if(this.vscrollOn||this.overflow==isc.Canvas.SCROLL||this.alwaysShowVScrollbar)
_1-=this.getScrollbarSize();return _1-this.getHMarginBorder()}
,isc.A.getInnerContentHeight=function(){return this.getHeight()
-(this.hscrollOn||this.overflow==isc.Canvas.SCROLL?this.getScrollbarSize():0)
-this.getVMarginBorderPad()}
,isc.A.getInnerContentWidth=function(){var _1=this.getWidth();if(this.vscrollOn||this.overflow==isc.Canvas.SCROLL||this.alwaysShowVScrollbar)
_1-=this.getScrollbarSize();return _1-this.getHMarginBorderPad()}
,isc.A.getVBorderPad=function(){return this.getVBorderSize()+this.getVPadding()}
,isc.A.getHBorderPad=function(){return this.getHBorderSize()+this.getHPadding()}
,isc.A.getHMarginSize=function(){return this.getLeftMargin()+this.getRightMargin()}
,isc.A.getVMarginSize=function(){return this.getTopMargin()+this.getBottomMargin()}
,isc.A.getVMarginBorder=function(){var _1=this.$sd(),_2=this.$tj();return _1.top+_1.bottom+_2.top+_2.bottom}
,isc.A.getHMarginBorder=function(){var _1=this.$sd(),_2=this.$tj();return _1.left+_1.right+_2.left+_2.right}
,isc.A.getVMarginBorderPad=function(){return this.getVMarginSize()+this.getVBorderPad()}
,isc.A.getHMarginBorderPad=function(){return this.getHMarginSize()+this.getHBorderPad()}
,isc.A.getClipWidth=function(){return this.getVisibleWidth()}
,isc.A.getClipHeight=function(){return this.getVisibleHeight()}
,isc.A.getVisibleWidth=function(_1){if((this.$if||this.$pu)&&(this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_V)){return Math.max(this.width,(this.getScrollWidth(_1)+this.getHMarginBorder()))}else{return this.width}}
,isc.A.getVisibleHeight=function(_1){if((this.$if||this.$pu)&&(this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_H))
{return Math.max(this.getHeight(),(this.getScrollHeight(_1)+this.getVMarginBorder()))}else{return this.getHeight()}}
,isc.A.getPeerRect=function(){var _1=this.getPageRect();if(this.peers==null)return _1;for(var i=0;i<this.peers.length;i++){var _3=this.peers[i];if(!_3.isDrawn()||(this.isVisible()&&!_3.isVisible()))continue;if((!this.vscrollOn&&_3==this.vscrollbar)||(!this.hscrollOn&&_3==this.hscrollbar))continue;var _4=_3.getPageRect();if(_4[0]<_1[0])_1[0]=_4[0];if(_4[1]<_1[1])_1[1]=_4[1];var _5=_4[0]+_4[2];if(_5>_1[0]+_1[2])_1[2]=_5-_1[0];var _6=_4[1]+_4[3];if(_6>_1[1]+_1[3])_1[3]=_6-_1[1]}
return _1}
,isc.A.moveBy=function(_1,_2,_3,_4){var _5=_3&&_4;if(!_5&&this.rectAnimation)this.finishAnimation("rect");else if(!_3&&this.moveAnimation)this.finishAnimation("move");if(isc.$cv)arguments.$cw=this;if(isc.isA.Number(_1))
this.left+=_1;else
_1=0;if(isc.isA.Number(_2))
this.top+=_2;else
_2=0;var _6=(_1!=0||_2!=0);if(!_6&&!_4)return false;this.$tx=_1;this.$ty=_2;var _7=(_4&&this.$tz?this.width:null),_8=(_4&&this.$t0?this.$o8:null);this.$q5(this.left,this.top,_7,_8);if(_4)this.$t1();this.$t2();return _6}
,isc.A.$t2=function(){var _1=(this.$tx||0),_2=(this.$ty||0),_3;this.$tx=_3;this.$ty=_3;if(!_1&&!_2)return;this.$t3(this,_1,_2);this.$t4(_1,_2);if(this.parentElement)this.parentElement.childMoved(this,_1,_2);if(this.masterElement)this.masterElement.peerMoved(this,_1,_2);if(this.$kn&&this.$qj){var _4=this.$qq();if(_4!=null){var _5=parseInt(_4.style.left)+_1,_6=parseInt(_4.style.top)+_2;_4.style.left=_5+"px";_4.style.top=_6+"px"}}
this.moved(_1,_2)}
,isc.A.moved=function(deltaX,deltaY){}
,isc.A.parentMoved=function(_1,_2,_3){this.$t3(_1,_2,_3)}
,isc.A.$t3=function(_1,_2,_3){var _4=this.children;if(_4==null)return;for(var i=0;i<_4.length;i++){if(isc.isA.Canvas(_4[i]))_4[i].parentMoved(_1,_2,_3)}}
,isc.A.childMoved=function(_1,_2,_3){if(this.allowContentAndChildren&&this.overflow==isc.Canvas.VISIBLE)
this.$t5=true;this.$t6(this.$o4)}
,isc.A.$t4=function(_1,_2){var _3=this.peers;if(_3==null)return;for(var i=0;i<_3.length;i++){if(_3[i])_3[i].masterMoved(_1,_2)}}
,isc.A.masterMoved=function(_1,_2){if(this.$ns)this.moveBy(_1,_2)}
,isc.A.peerMoved=function(_1,_2,_3){}
,isc.A.dragRepositioned=function(){}
,isc.A.getDelta=function(_1,_2,_3){if(_2==null)return null;var _4=_1,_5=this.$pb[_1];if(_1==this.$o5)_4=this.$o7;if(isc.isA.Number(_2)){var _6=Math.round(_2);if(_6!=_2){this.logWarn(_1+" specified as fractional coordinate:"+_2+". Rounded to:"+_6);_2=_6}}else if(isc.isA.String(_2)&&isc.endsWith(_2,this.$o9)){this[_5]=_2;if(this.masterElement==null&&this.parentElement==null&&this.$rq==null){this.$rq=isc.Page.setEvent(this.$nx,this,isc.Page.FIRE_ONCE)}
if(this.$pp){_3=this[_4]=0;if(this.percentBox=="custom")this[_4]=1}
if(this.percentBox=="custom")return 0;var _7,_8,_9,_10=(_1==this.$oz||_1==this.$o6);if(this.percentSource||(this.snapTo&&this.masterElement)){_7=this.percentSource||this.masterElement;_9=(this.percentBox==this.$520),_8=_10?(_9?_7.getViewportWidth():_7.getVisibleWidth()):(_9?_7.getViewportHeight():_7.getVisibleHeight())}else{_7=this.parentElement;_8=(_10?(_7?_7.getInnerWidth():isc.Page.getWidth()):(_7?_7.getInnerHeight():isc.Page.getHeight()))}
if(isc.Browser.isIE&&!isc.Page.isLoaded()&&((isc.Page.getWidth()==0)||(isc.Page.getHeight()==0)))
{isc.Page.setEvent("load",this.ID+".pageResize()",isc.Page.FIRE_ONCE);this.$p0=true}
_2=Math.round((parseInt(_2,10)/100)*_8);return _2-_3}
var _11=_2;if(!isc.isA.Number(_2)){_2=parseInt(_2);if(isc.isA.Number(_2)&&isc.isA.String(_3)){this[_4]=_3=_2}}
this[_5]=null;if(!isc.isA.Number(_2)||(_2<0&&(_1==this.$o6||_1==this.$o5)))
{if(_11!="*"){this.logWarn("ignoring bad or negative "+_1+": "+_11+(this.logIsDebugEnabled("sizing")?this.getStackTrace():" [enable 'sizing' log for stack trace]"))}else{_1==this.$o6?this.$pn="*":this.$po="*";var _7=this.parentElement;if(isc.isA.Layout(_7)&&_7.hasMember(this)){_7.reflow(this.getID()+" set "+_1+" to '*'")}}
if(_3==this[_1]||_3==this[_4]){_3=this.restoreDefaultSize(_1==this.$o5)}
this.adjustOverflow();return null}
return _2-_3}
,isc.A.restoreDefaultSize=function(_1){var _2=_1?this.$o5:this.$o6,_3=this.getClass().getInstanceProperty(_2);if(!isc.isA.Number(_3)){if(_1)_3=this.defaultHeight;else _3=this.defaultWidth}
var _4=this[_2]=(isc.isA.Number(_3)?_3:0);if(_1)this.$o8=_4;return _4}
,isc.A.pageResize=function(){this.$rq=null;this.$p0=null;this.$qw()}
,isc.A.moveTo=function(_1,_2,_3,_4){if(!_4&&_1==null&&_2==null)return false;if(isc.$cv)arguments.$cw=this;if(_1!=null&&_1.top!=null){_2=_1.top;_1=_1.left}
var _5=this.getDelta(this.$oz,_1,this.getLeft()),_6=this.getDelta(this.$o0,_2,this.getTop());return this.moveBy(_5,_6,_3,_4)}
,isc.A.moveToEvent=function(_1,_2){var _3=this.ns.EH.getLastEvent(),x=_3.x,y=_3.y;if(isc.isA.Number(_1))x-=_1;if(isc.isA.Number(_2))y-=_2;var _6=this.ns.EH;var _7=_6.getDragTarget(_3);var _8;if(_6.getDragTarget().canDrop){_8=_6.getDropTarget(_3);if(_8){if(!_7.snapOnDrop||!_8.shouldSnapOnDrop(_7)){_8=null}}else{_8=_6.getDragTarget(_3).parentElement}}else{_8=_6.getDragTarget(_3).parentElement}
if(isc.isA.Canvas(_8)&&(_7.snapToGrid==true||(_7.snapToGrid==null&&_8.childrenSnapToGrid==true)))
{if(_8.noSnapDragOffset(this)){x=_3.x,y=_3.y}
if(_8.snapAxis==isc.Canvas.HORIZONTAL||_8.snapAxis==isc.Canvas.BOTH)
{var _9=(_8.getPageLeft()+_8.getLeftBorderSize()+_8.getLeftMargin()-_8.getScrollLeft());x-=_9;x=_8.getHSnapPosition(x)+_8.getHSnapOrigin(_7);x+=_9}
if(_8.snapAxis==isc.Canvas.VERTICAL||_8.snapAxis==isc.Canvas.BOTH)
{var _9=(_8.getPageTop()+_8.getTopBorderSize()+_8.getTopMargin()-_8.getScrollTop())
y-=_9;y=_8.getVSnapPosition(y)+_8.getVSnapOrigin(_7);y+=_9}}
this.setPageRect(x,y)}
,isc.A.getVSnapOrigin=function(_1){return this.VSnapOrigin?this.VSnapOrigin:0}
,isc.A.getHSnapOrigin=function(_1){return this.HSnapOrigin?this.HSnapOrigin:0}
,isc.A.placeNextTo=function(_1,_2,_3,_4){var _5=_1.getPeerRect(),_6=this.getPeerRect(),_7=isc.Canvas.$t7(_6[2],_6[3],_5,_2,_3,_4);this.setPageRect(_7[0],_7[1])}
,isc.A.showNextTo=function(_1,_2,_3){if(_2==null)_2="right";if(_3==null)_3=false;this.placeNextTo(_1,_2,_3);this.animateShow("fade")}
,isc.A.placeNear=function(_1,_2){if(isc.isAn.Array(_1)){_2=_1[1];_1=_1[0]}else if(isc.isAn.Object(_1)){_2=_1.top;_1=_1.left}
var _3=this.getPeerRect(),_4=isc.Canvas.$t7(_3[2],_3[3],{left:_1,top:_2});this.setPageRect(_4[0],_4[1])}
,isc.A.resizeBy=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;var _5=_3&&_4;if(!_5&&this.rectAnimation)this.finishAnimation("rect");if(!_3){if(_5&&this.resizeAnimation)this.finishAnimation("resize");if(this.hideAnimation)this.finishAnimation("hide");if(this.showAnimation)this.finishAnimation("show")}
var _6=this.getWidth(),_7=this.getHeight();if(isc.isA.Number(_1)){this.width+=_1;if(!this.$pp)this.$t8=true}else{_1=0}
if(isc.isA.Number(_2)){this.height=this.$o8=_7+_2;if(!this.$pp)this.$t9=true}else{_2=0}
if(_1==0&&_2==0)return false;this.$tz=_1;this.$t0=_2;this.$ua=_3;if(this.isDrawn()&&this.logIsInfoEnabled(this.$nx)){this.logInfo("resize of drawn component: "+"new width/height: "+[this.width,this.$o8]+", old width/height: "+[_6,_7]+", delta width/height: "+[_1,_2]+(this.logIsDebugEnabled(this.$nx)?this.getStackTrace():""),this.$nx)}
if(!_4){var _8=this.$q6;if(isc.isAn.Array(_8)){_8[1]+=_1;_8[2]+=_2}
var _9=this.getDrawnState();if(_9==isc.Canvas.COMPLETE){this.$q5(this.left,this.top,this.width,this.$o8);if(isc.isAn.Array(_8))this.setClip(_8)}else if(_9!=isc.Canvas.UNDRAWN){this.$q4=true}
this.$t1()}
return true}
,isc.A.$t1=function(){var _1=(this.$tz||0),_2=(this.$t0||0),_3=this.$ua,_4;this.$tz=_4;this.$t0=_4;this.$ua=_4;if(!_1&&!_2)return;var _5;if(this.isDrawn()){_5=this.shouldRedrawOnResize(_1,_2,_3);if(_5){this.markForRedraw(this.$nx)}}
if(!_3)this.layoutChildren(this.$pc,_1,_2)
if(isc.Browser.isMoz&&this.containsIFrame())this.$pw();this.$ub(_1,_2);if(!_5)this.adjustOverflow(this.$nx);if(!_3&&this.$kn&&this.$qj){var _6=this.$sl();if(_6!=null){_6.style.width=this.getWidth()+isc.px;_6.style.height=this.getHeight()+isc.px}}
this.resizePeersBy(_1,_2);this.$5y(_1,_2)}
,isc.A.shouldRedrawOnResize=function(_1,_2){var _3=this.redrawOnResize;if(_3==null){_3=!((this.children!=null&&this.children.length>0&&!this.allowContentAndChildren)||(this.getInnerHTML==isc.Canvas.$b4.getInnerHTML&&!isc.isA.Function(this.contents)))}
return _3}
,isc.A.dragResizing=function(){var _1=isc.EH;return(_1.dragging&&_1.dragOperation==_1.DRAG_RESIZE&&_1.dragTarget==this)}
,isc.A.$5y=function(deltaX,deltaY,reason){if(isc.$cv)arguments.$cw=this;if(this.snapTo)this.$qw(true);if(this.parentElement)this.parentElement.childResized(this,deltaX,deltaY,reason);if(this.masterElement)this.masterElement.peerResized(this,deltaX,deltaY,reason);var peers=this.peers;if(peers){for(var i=0;i<peers.length;i++){if(isc.isA.Canvas(peers[i]))peers[i].masterResized(deltaX,deltaY,reason)}}
if(this.clipCorners&&this.$uc){var clips=this.$uc;if(clips.TR)clips.TR.moveBy(deltaX,null);if(clips.BL)clips.BL.moveBy(null,deltaY);if(clips.BR)clips.BR.moveBy(deltaX,deltaY)}
if(this.$ud!=null)delete this.$ud;if(this.$ue!=null)delete this.$ue;this.resized()}
,isc.A.$ub=function(){}
,isc.A.resized=function(){}
,isc.A.innerSizeChanged=function(_1){this.layoutChildren(_1);var _2=this.peers;if(_2){for(var i=0;i<_2.length;i++){if(!_2[i].percentSource&&_2[i].snapTo&&_2[i].percentBox==this.$520)
{_2[i].$qw()}}}}
,isc.A.setPercentSource=function(_1,_2){if(isc.isA.String(_1))_1=window[_1];if(!_2&&this.percentSource==_1)return;if(this.percentSource&&this.isObserving(this.percentSource,"innerSizeChanged")){this.ignore(this.percentSource,"innerSizeChanged");this.ignore(this.percentSource,"resized")}
if(!isc.isA.Canvas(_1)){this.percentSource=null;return}
this.percentSource=_1;this.observe(_1,"innerSizeChanged","observer.percentSourceInnerSizeChanged()");this.observe(_1,"resized","observer.$qw()")}
,isc.A.percentSourceInnerSizeChanged=function(){if(this.percentBox==this.$520)this.$qw()}
,isc.A.childResized=function(_1,_2,_3,_4){if(this.allowContentAndChildren&&this.overflow==isc.Canvas.VISIBLE)
this.$t5=true;this.$t6(this.$pd)}
,isc.A.peerResized=function(_1,_2,_3,_4){}
,isc.A.masterResized=function(_1,_2,_3){this.$qw()}
,isc.A.dragResized=function(){}
,isc.A.resizePeersBy=function(_1,_2){var _3=this.peers;if(_3){for(var i=0;i<_3.length;i++){if(_3[i]&&_3[i].$jo){_3[i].resizeBy(_1,_2)}}}}
,isc.A.layoutChildren=function(_1,_2,_3){if(this.children)this.$uf()}
,isc.A.$uf=function(){var _1=this.children;if(_1!=null&&_1.length>0){for(var i=0;i<_1.length;i++){if(isc.isA.Canvas(_1[i]))_1[i].parentResized()}}}
,isc.A.resizeTo=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;if(_1==null&&_2==null)return false;var _5=this.getDelta(this.$o6,_1,this.getWidth()),_6=this.getDelta(this.$o5,_2,this.getHeight());return this.resizeBy(_5,_6,_3,_4)}
,isc.A.resizeToEvent=function(_1){var _2=this.ns.EH,_3=_2.getLastEvent(),x=_3.x,y=_3.y,_6=this.getPageLeft(),_7=this.getPageTop(),_8=this.getPageRight(),_9=this.getPageBottom();var _10=_2.getDragTarget(_3);var _11=_2.getDragTarget(_3).parentElement;if(_11){if(_10.snapResizeToGrid==true||(_10.snapResizeToGrid==null&&_10.snapToGrid==true)||(_10.snapResizeToGrid==null&&(_11.childrenSnapResizeToGrid==true||(_11.childrenSnapResizeToGrid==null&&_11.childrenSnapToGrid==true)))){if(_11.snapAxis==isc.Canvas.HORIZONTAL||_11.snapAxis==isc.Canvas.BOTH){var _12=(_11.getPageLeft()+_11.getLeftBorderSize()+_11.getLeftMargin()-_11.getScrollLeft());x-=_12;x=_11.getHSnapPosition(x)+_11.getHSnapOrigin(_10);x+=_12}
if(_11.snapAxis==isc.Canvas.VERTICAL||_11.snapAxis==isc.Canvas.BOTH){_12=(_11.getPageTop()+_11.getTopBorderSize()+_11.getTopMargin()-_11.getScrollTop());y-=_12;y=_11.getVSnapPosition(y)+_11.getVSnapOrigin(_10);y+=_12}}}
if(this.logIsDebugEnabled("dragResize")){this.logDebug("resizeToEvent: coords: "+isc.Log.echo({x:x,y:y,left:_6,top:_7,right:_8,bottom:_9}),"dragResize")}
_1=_1||_2.resizeEdge||"BR";if(_1.contains("T")){var _13=Math.min(this.maxHeight,Math.max(_9-y,this.minHeight));_7=_9-_13}else if(_1.contains("B")){var _13=Math.min(this.maxHeight,Math.max(y-_7,this.minHeight));_9=_7+_13}
if(_1.contains("L")){var _14=Math.min(this.maxWidth,Math.max(_8-x,this.minWidth));_6=_8-_14}else if(_1.contains("R")){var _14=Math.min(this.maxWidth,Math.max(x-_6,this.minWidth));_8=_6+_14}
var _15=_8-_6,_16=_9-_7;this.setPageRect(_6,_7,_15,_16,true);_2.dragResizeWidth=_15;_2.dragResizeHeight=_16;if(this==this.ns.EH.dragTracker)this.redrawIfDirty()}
,isc.A.resizeTarget=function(_1,_2,_3,_4,_5,_6,_7){_5=_5||0;_4=_4||0;if(_6==null)_6=_2?isc.EH.getY():isc.EH.getX();_6+=_4;if(this.parentElement){var _8=this.getParentPageRect(),_9=_2?(_8[1]+_8[3]):(_8[0]+_8[2]);_9-=_2?this.getVisibleHeight():this.getVisibleWidth();if(_6>_9)_6=_9}
_7=_7!=null?_7:!_2&&this.isRTL();var _10=_2?_1.getMinHeight():_1.getMinWidth(),_11=_2?_1.getMaxHeight():_1.getMaxWidth();var _12;if(_7){_12=(_2?_1.getPageBottom():_1.getPageRight())
-(_2?this.getVisibleHeight():this.getVisibleWidth())}else{_12=_2?_1.getPageTop():_1.getPageLeft()}
var _13=!_7?_6-_12-_5:_12-_6-_5;if(_13<_10){_13=_10}else if(_13>_11){_13=_11}
this.$ug=_13;_6=_12+_5+(_7?-_13:_13);if(_3){_2?_1.setHeight(this.$ug):_1.setWidth(this.$ug)}else{_2?this.setPageTop(_6):this.setPageLeft(_6)}}
,isc.A.finishTargetResize=function(_1,_2,_3){if(_3)return;_2?_1.setHeight(this.$ug):_1.setWidth(this.$ug)}
,isc.A.parentResized=function(){if(isc.$cv)arguments.$cw=this;this.$qw()}
,isc.A.$qw=function(_1){if(this.snapTo!=null&&this.percentBox!="custom"){if((this._percent_width||this._percent_height)&&!_1){this.resizeTo(this._percent_width,this._percent_height)}
var _2,_3,_4;_2=(this.masterElement?this.masterElement:this.parentElement);if(!_2)return;if(this.masterElement){_4=(this.percentBox==this.$520),_3=[_2.getTop()+(_4?(_2.getTopBorderSize()+_2.getTopMargin()):0),_2.getLeft()+(_4?(_2.getLeftBorderSize()+_2.getLeftMargin()):0)]}else{_4=true;_3=[0,0]}
var _5=_2.$52c(this.snapTo,_3,[_4?_2.getViewportWidth():_2.getVisibleWidth(),_4?_2.getViewportHeight():_2.getVisibleHeight()],false);var _6=this.$52c((this.snapEdge||this.snapTo),_5,[this.getVisibleWidth(),this.getVisibleHeight()],true);if(this.snapOffsetLeft!=null)_6[1]+=this.snapOffsetLeft;if(this.snapOffsetTop!=null)_6[0]+=this.snapOffsetTop;this.moveTo(_6[1],_6[0]);this.$jo=false}
if(this.snapTo==null&&!_1){if(this._percent_left||this._percent_top||this._percent_width||this._percent_height)
{this.setRect(this._percent_left,this._percent_top,this._percent_width,this._percent_height)}}}
,isc.A.$52c=function(_1,_2,_3,_4){var _5=_3[0],_6=_3[1];var _7;if(_1=="TL")_7=[0,0];else if(_1=="T")_7=[0,_5/ 2];else if(_1=="TR")_7=[0,_5];else if(_1=="R")_7=[_6/ 2,_5];else if(_1=="BR")_7=[_6,_5];else if(_1=="B")_7=[_6,_5/ 2];else if(_1=="BL")_7=[_6,0];else if(_1=="L")_7=[_6/ 2,0];else if(_1=="C")_7=[_6/ 2,_5/ 2];else _7=[0,0];_7[0]=Math.floor(_7[0]);_7[1]=Math.floor(_7[1]);if(_4)return[_2[0]-_7[0],_2[1]-_7[1]];else return[_2[0]+_7[0],_2[1]+_7[1]]}
,isc.A.prepareForDragging=function(){var _1=this.ns.EH;if(_1.dragTarget)return;if(this.canDragResize){_1.resizeEdge=this.getEventEdge();if(_1.resizeEdge){_1.dragTarget=this;_1.dragOperation=_1.DRAG_RESIZE;_1.dragMoveAction=_1.$mq}}
if(!_1.dragTarget){if(this.canDragReposition){_1.dragTarget=this;_1.dragOperation=_1.DRAG_REPOSITION;_1.dragMoveAction=_1.$ll}else if(this.canDrag){_1.dragTarget=this;_1.dragOperation=_1.DRAG}}}
,isc.A.setNoDropIndicator=function(){this.$uh=true;this.$k2();if(this.shouldSetNoDropTracker&&isc.EH.dragTracker&&isc.EH.dragTracker.isVisible()){if(!this.$ui)this.$ui=isc.EH.dragTracker.getContents();isc.EH.setDragTracker(this.imgHTML(this.noDropTracker))}}
,isc.A.clearNoDropIndicator=function(){if(!this.$uh)return;delete this.$uh;this.$k2();if(this.shouldSetNoDropTracker&&isc.EH.dragTracker){isc.EH.setDragTracker(this.$ui);delete this.$ui}}
,isc.A.shouldDragScroll=function(){return this.canDragScroll}
,isc.A.$uj=function(_1){var _2=this.getVDragScrollThreshold();if(_1<_2)return-1;if(_1>(this.getViewportHeight()-_2))return 1;return 0}
,isc.A.$uk=function(_1){var _2=this.getHDragScrollThreshold();if(_1<_2)return-1;if(_1>(this.getViewportWidth()-_2))return 1;return 0}
,isc.A.$l4=function(_1){var _2=(this.getOffsetY()-this.getScrollTop()),_3=(this.getOffsetX()-this.getScrollLeft());if(_1!=null){if(_1==isc.Canvas.VERTICAL)
return this.$uj(_2)!=0;else
return this.$uk(_3)!=0}
return(this.$uj(_2)!=0||this.$uk(_3)!=0)}
,isc.A.getHDragScrollThreshold=function(){if(this.$ud!=null)return this.$ud;var _1=this.dragScrollThreshold;if(isc.isA.Number(_1))this.$ud=_1;else{_1=parseInt(_1);if(!isNaN(_1)){this.$ud=parseInt(_1*this.getViewportWidth()/100);return this.$ud}else{isc.Log.logWarn("Unable to resolve specified drag scroll threshold '"+this.dragScrollThreshold+"' to a valid size. Should be specified as"+" an absolute pixel value, or a percentage of widget viewport.");return 0}}}
,isc.A.getVDragScrollThreshold=function(){if(this.$ue!=null)return this.$ue;var _1=this.dragScrollThreshold;if(isc.isA.Number(_1))this.$ue=_1;else{_1=parseInt(_1);if(!isNaN(_1)){this.$ue=parseInt(_1*this.getViewportHeight()/100);return this.$ue}else{isc.Log.logWarn("Unable to resolve specified drag scroll threshold '"+this.dragScrollThreshold+"' to a valid size. Should be specified as"+" an absolute pixel value, or a percentage of widget viewport.");return 0}}}
,isc.A.$l5=function(_1){if(this.$ul!=null)return;var _2=(this.getOffsetY()-this.getScrollTop()),_3=(this.getOffsetX()-this.getScrollLeft()),_4=this.$uk(_3),_5=this.$uj(_2);this.$ul=isc.Timer.setTimeout({target:this,methodName:"$um",args:[_4,_5,true,_1]},this.dragScrollDelay)}
,isc.A.$um=function(_1,_2,_3,_4){this.$ul=null;var _5=0,_6=0;if(this.ns.EH.dragging&&this.containsEvent()){var _7=this.getOffsetX()-this.getScrollLeft(),_8=this.getOffsetY()-this.getScrollTop(),_9=this.getViewportWidth(),_10=this.getViewportHeight();if(!isc.isA.Number(this.maxDragScrollIncrement)){var _11=parseInt(this.maxDragScrollIncrement);if(!isc.isA.Number(_11))
this.logWarn("Unable to resolve this.maxDragScrollIncrement '"+this.maxDragScrollIncrement+"' to a valid value. This should be an "+"absolute pixel value or a percentage to scroll by.");this.$un=parseInt(_11/ 100*this.getScrollWidth());this.$uo=parseInt(_11/ 100*this.getScrollHeight())}else{this.$un=this.$uo=this.maxDragScrollIncrement}
if(!isc.isA.Number(this.minDragScrollIncrement)){var _12=parseInt(this.minDragScrollIncrement);if(!isc.isA.Number(_12))
this.logWarn("Unable to resolve this.minDragScrollIncrement '"+this.minDragScrollIncrement+"' to a valid value. This should be an "+"absolute pixel value or a percentage to scroll by.");this.$up=parseInt(_12/ 100*(this.getScrollWidth()-_9));this.$uq=parseInt(_12/ 100*(this.getScrollHeight()-_10))}else{this.$up=this.$uq=this.minDragScrollIncrement}
var _13=(_4==isc.Canvas.VERTICAL?0:this.$uk(_7)),_14=(_4==isc.Canvas.HORIZONTAL?0:this.$uj(_8));if(_3){if(_1!=0&&_1!=_13)
_1=0;if(_2!=0&&_2!=_14)
_2=0}else{_1=_13;_2=_14}
_5=this.getScrollIncrement(_1,_7,_9,this.getHDragScrollThreshold(),this.$un,this.$up);_6=this.getScrollIncrement(_2,_8,_10,this.getVDragScrollThreshold(),this.$uo,this.$uq);if((_5>0&&(this.getScrollLeft()>=this.getScrollRight()))||(_5<0&&(this.getScrollLeft()<=0)))_5=0;if((_6>0&&(this.getScrollTop()>=this.getScrollBottom()))||(_6<0&&(this.getScrollTop()<=0)))_6=0}
if(_5!=0||_6!=0){this.scrollBy(_5,_6);this.$ul=isc.Timer.setTimeout({target:this,methodName:"$um",args:[null,null,null,_4]},50)}else{delete this.$un;delete this.$up;delete this.$uo;delete this.$uq}}
);isc.evalBoundary;isc.B.push(isc.A.getScrollIncrement=function(_1,_2,_3,_4,_5,_6){if(_1==null||_1==0)return 0;if(_1>0){_2=_2-(_3-_4)}else if(_1<0){_2=_4-_2}
if(_2<0||_2>_4)return 0;var _7=_1*
((_2/ _4)*(_5-_6)+_6);return parseInt(_7)}
,isc.A.hasInherentHeight=function(){if(this.inherentHeight!=null)return this.inherentHeight;return(this.children==null&&(this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_H))}
,isc.A.hasInherentWidth=function(){if(this.inherentWidth!=null)return this.inherentWidth;return(this.children==null&&(this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_V))}
,isc.A.canOverflowWidth=function(){return this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_H}
,isc.A.canOverflowHeight=function(){return this.overflow==isc.Canvas.VISIBLE||this.overflow==isc.Canvas.CLIP_V}
,isc.A.getOverflow=function(){return this.overflow}
,isc.A.setOverflow=function(_1){if(this.$va!=null&&!this.$vb)
this.finishAnimation(this.$va);if(this.$vc!=null&&!this.$vd)
this.finishAnimation(this.$vc);if(this.overflow==_1)return;var _2=this.overflow;this.overflow=_1;if(!this.isDrawn())return;if(_1!=isc.Canvas.SCROLL&&_1!=isc.Canvas.AUTO&&(this.hscrollOn||this.vscrollOn))
{this.hscrollOn=this.vscrollOn=false;if(this.hscrollbar!=null)this.hscrollbar.hide();if(this.vscrollbar!=null)this.vscrollbar.hide()}
if(isc.Browser.isIE&&(_1==isc.Canvas.CLIP_H||_1==isc.Canvas.CLIP_V))
{this.markForRedraw();return}
var _3=this.getStyleHandle();_3.overflow=this.$rw();var _4=this.$rx();_3.width=_4[0];_3.height=_4[1];if(this.getScrollingMechanism()==isc.Canvas.CLIP&&!this.$ks&&(_1==isc.Canvas.HIDDEN||(this.showCustomScrollbars&&(_1==isc.Canvas.SCROLL||_1==isc.Canvas.AUTO)))){var _5=this.scrollLeft||0,_6=this.scrollTop||0;if(this.$q6==null){this.$q6=[_5,this.getWidth()+_5,this.getHeight()+_6,_6]}
_3.clip="rect("+this.$q6[0]+"px,"+this.$q6[1]+"px,"+this.$q6[2]+"px,"+this.$q6[3]+"px)"}else
if(_3.clip!=null&&_3.clip!=""&&_3.clip!="rect(auto auto auto auto)")
{_3.clip=(isc.Browser.isIE?"rect(auto)":"")}
this.adjustOverflow("setOverflow");if(_2==isc.Canvas.VISIBLE&&_1!=isc.Canvas.VISIBLE){var _7=Math.max(this.getScrollWidth()-this.getInnerWidth(),0),_8=Math.max(this.getScrollHeight()-this.getInnerHeight(),0);if(_7>0||_8>0)this.$5y(-_7,-_8,"overflow changed")}else if(_2!=isc.Canvas.VISIBLE&&_1==isc.Canvas.VISIBLE){var _7=Math.max(this.getScrollWidth()-this.getInnerWidth(),0),_8=Math.max(this.getScrollHeight()-this.getInnerHeight(),0);if(_7>0||_8>0)this.$5y(_7,_8,"overflow changed")}
if((_1==isc.Canvas.HIDDEN||_1==isc.Canvas.VISIBLE)&&(_2==isc.Canvas.HIDDEN||_2==isc.Canvas.VISIBLE)){}else{this.$ur()}}
,isc.A.$t6=function(_1){if(!this.isDrawn()||this.isDirty())return;if(!this.$rm){if(this.logIsDebugEnabled())
this.logDebug("delaying adjustOverflow: "+(_1?_1:this.getStackTrace()));var _2=this;this.$rn=isc.Timer.setTimeout(function(){if(!_2.destroyed)_2.adjustOverflow(_1,true)},0)}
this.$rm=true}
,isc.A.adjustForContent=function(_1){var _2="adjustForContent() called";if(_1)this.adjustOverflow(_2);else this.$t6(_2)}
,isc.A.$qy=function(){var _1=this.getHandle();if(isc.Browser.isOpera){var _1=this.getHandle();return!(_1.scrollHeight==0&&_1.scrollWidth==0)}
if(!isc.Browser.isIE){var _2=this.getClipHandle();if(_2==null)return false;var _3=_2.scrollHeight;if(_3==null||_3==0)_3==this.getClipHandle().offsetHeight;return _3!=0}
var _4;if(isc.Browser.isWin){return _1!=null&&_1.scrollHeight!=this.$n1&&_1.scrollHeight!=0}}
,isc.A.adjustOverflow=function(_1,_2,_3){if(isc.$cv)arguments.$cw=this;if(_2&&!this.$rm){return}
this.$rm=false;if(!this.isDrawn()||this.overflow==isc.Canvas.IGNORE)return true;if(!this.adjustOverflowWhileDirty&&!_3&&this.isDirty()&&(this.overflow!=isc.Canvas.VISIBLE))
{return}
if(!isc.Page.isLoaded()&&(isc.Browser.isSafari||(isc.Browser.isMoz&&isc.Browser.geckoVersion<20040616)))
{isc.Page.setEvent("load",this,isc.Page.FIRE_ONCE,"$us");if(isc.Browser.isMoz)return}
if(this.$417)return;if(this.$qy())return this.$ut(_1);if(this.logIsDebugEnabled("overflow")){this.logDebug("browser not done drawing, deferring overflow.","overflow");if(this.useClipDiv){this.logDebug("clipHandle sizes: "+this.echoElementSize(this.getClipHandle()),"overflow")}
this.logDebug("handle sizes: "+this.echoElementSize(this.getHandle()),"overflow")}
if(!this.$uu){this.$t6();this.$uu=true}else{this.logDebug("still waiting for size to become available","overflow");this.$uv()}
return false}
,isc.A.$us=function(){if(!this.destroyed&&this.isDrawn())this.adjustOverflow("pageLoad")}
,isc.A.$uv=function(){isc.Canvas.$uv(this.getID())}
,isc.A.$ut=function(_1){if(this.$uw){return}
this.$uw=true;this.$ux(_1);this.$uw=false}
,isc.A.$ux=function(_1){if(!this.$pe[this.overflow]){this.logWarn("This widget has overflow specified as "+this.echo(this.overflow)+".  This overflow setting is not supported - defaulting to overflow:\"visible\".");this.overflow=isc.Canvas.VISIBLE}
if(this.$su!=null)delete this.$su;if(this.$sz!=null)delete this.$sz;var _2=this.$uy,_3=this.$uz;delete this.$uy;delete this.$uz;var _4=this.$u0;this.$u0=false;var _5=isc.Canvas;this.$uu=null;if(this.getHandle()==null)this.logWarn("adjustOverflow: handle null");if(this.getClipHandle()==null)this.logWarn("adjustOverflow: clipHandle null");if(this.alwaysShowVScrollbar){if(this.overflow!=isc.Canvas.AUTO||this.overflow!=isc.Canvas.SCROLL){this.logInfo("alwaysShowVScrollbar specified as true, but overflow set to \""+this.overflow+"\". Property will be ignored.")}else if(this.showCustomScrollbars==false){this.logWarn("alwaysShowVScrollbar property not supported when showing native scrollbars")}}
if(this.logIsInfoEnabled(this.$pf)){this.logInfo("Specified size: "+this.getWidth()+"x"+this.getHeight()+", drawn scroll size: "+this.getScrollWidth(true)+"x"+this.getScrollHeight(true)+", border: "+this.getVBorderSize()+"x"+this.getHBorderSize()+", margin: "+this.getVMarginSize()+"x"+this.getHMarginSize()+(_2==null?"":", old size: "+_2+"x"+_3)+", reason: "+_1,"sizing")}
if(this.logIsDebugEnabled(this.$pf)){if(this.useClipDiv){this.logDebug("clipHandle sizes: "+this.echoElementSize(this.getClipHandle()),"sizing")}
this.logDebug("handle sizes: "+this.echoElementSize(this.getHandle()),"sizing")}
if(this.overflow==_5.IGNORE){}else if(this.overflow==_5.VISIBLE){if(this.$t5){if(this.getWidth()<this.getVisibleWidth()||this.getHeight()<this.getVisibleHeight())
{this.$q5(null,null,this.width,this.$o8)}
delete this.$t5}
var _6=this.getScrollWidth(true),_7=this.getScrollHeight(true);if(this.$ks){var _8=this.getScrollHandle();if(_8.scrollTop!=0||_8.scrollLeft!=0){_8.scrollTop=_8.scrollLeft=0}}
var _9=this.getInnerWidth(),_10=this.getInnerHeight();var _11=this.$u0=(_6>_9||_7>_10);if(!_11&&!_4)
{this.$uy=_6;this.$uz=_7;return}
var _12=this.getHMarginBorder(),_13=this.getVMarginBorder();this.$q5(this.left,this.top,Math.max((_6+_12),this.getWidth()),Math.max((_7+_13),this.getHeight()));var _14=this.children&&this.children.length>0;if(!_14||this.allowContentAndChildren){var _15=this.getScrollHeight(true),_16=this.getScrollWidth(true);if(_15!=_7||_16!=_6){_6=_16;_7=_15;this.$q5(this.left,this.top,Math.max((_6+_12),this.getWidth()),Math.max((_7+_13),this.getHeight()))}}
if(this.snapTo!=null&&_11&&(_1==this.$oe||_1==this.$ny))
{this.$qw(true)}
this.$uy=_6;this.$uz=_7;if((_2!=null&&_2!=_6)||(_3!=null&&_3!=_7))
{if(!_11&&_1==this.$nx)return;this.$5y(_6-_2,_7-_3,this.$pg)}}else if(this.overflow==_5.HIDDEN){this.$q5(this.left,this.top,this.getWidth(),this.getHeight());if(isc.Browser.isIE&&this.isRTL()){this.scrollLeft=this.getClipHandle().scrollLeft}
this.$51s()}else if(this.overflow==_5.CLIP_H){var _7=this.getScrollHeight(),_13=this.getVMarginBorder(),_17=Math.max(_7+_13,this.getHeight());this.$uz=_17;this.setClip(0,this.getWidth(),_17,0);this.$q5(this.left,this.top,this.getWidth(),_17)}else if(this.overflow==_5.CLIP_V){var _6=this.getScrollWidth(),_12=this.getHMarginBorder();if((isc.Browser.isIE||isc.Browser.isMoz||isc.Browser.isOpera)&&(_6>this.getInnerWidth())&&(this.$uy==_6)){this.$q5(this.left,this.top,this.getWidth(),this.getHeight());_6=this.getScrollWidth(true)
if(_6>this.getInnerWidth()){this.$q5(this.left,this.top,_6+_12,this.getHeight())}}else{this.$q5(this.left,this.top,Math.max(_6+_12,this.getWidth()),this.getHeight())}
var _18=Math.max(_6+_12,this.getWidth());this.setClip(0,_18,this.getHeight(),0);this.$uy=_18}else{if(isc.Browser.isIE&&this.showCustomScrollbars&&this.getScrollingMechanism()==isc.Canvas.NATIVE)
{var _19=this.scrollLeft,_20=this.scrollTop;if(this.getScrollLeft()!=_19||this.getScrollTop()!=_20){this.$lh()}}
var _21=this.vscrollOn,_22=this.hscrollOn,_23=this.$kk();var _24=(this.alwaysShowVScrollbar&&this.showCustomScrollbars);if(this.overflow==isc.Canvas.SCROLL){this.hscrollOn=this.vscrollOn=true}else{var _7=this.getScrollHeight(),_25=this.getHeight(),_6=this.getScrollWidth(),_26=this.getWidth(),_27=this.getScrollbarSize(),_28;var _13=this.getVMarginBorder(),_12=this.getHMarginBorder();if(!this.showCustomScrollbars&&this.getHandle().clientHeight!=null){this.hscrollOn=(this.getClipHandle().clientHeight<_25-_13);this.vscrollOn=_24||(this.getClipHandle().clientWidth<_26-_12)}else{this.vscrollOn=_24||((_7-(_25-_13))>0);this.hscrollOn=(_6-(_26-_12))>0}
if((this.vscrollOn&&!_21&&!this.hscrollOn)||(this.hscrollOn&&!_22&&!this.vscrollOn))
{if(this.showCustomScrollbars){this.$q5(this.left,this.top,this.getWidth(),this.getHeight())}
_28=(this.vscrollOn?"V":"")+(this.hscrollOn?"H":"");this.innerSizeChanged("introducing scrolling");var _16=this.getScrollWidth(true),_15=this.getScrollHeight(true);if(this.logIsDebugEnabled("scrolling")){this.logDebug("Rechecking scrollWidth/Height on introduction of scroll:"+" old: "+[_6,_7]+", new: "+[_16,_15],"scrolling")}
_6=_16;_7=_15}
if(this.vscrollOn&&!this.hscrollOn){if(this.showCustomScrollbars||(this.getClipHandle().clientHeight==null))
this.hscrollOn=_6-(_26-_12-_27)>0;else
this.hscrollOn=(_25>this.getClipHandle().clientHeight+this.getVBorderSize())}else if(this.hscrollOn){if(this.showCustomScrollbars||(this.getClipHandle().clientWidth==null))
this.vscrollOn=_24||(_7-(_25-_13-_27)>0);else
this.vscrollOn=_24||(_26>this.getClipHandle().clientWidth+this.getHBorderSize())}}
if(this.logIsInfoEnabled("scrolling")){this.logInfo("Drawn size: "+this.getScrollWidth(true)+" by "+this.getScrollHeight(true)+", specified: "+this.getWidth()+" by "+this.getHeight()+", scrollbar state: "+(this.hscrollOn?"h":"")+(this.vscrollOn?"v":""),"scrolling")}
if(this.showCustomScrollbars&&(this.hscrollOn!=_22||this.vscrollOn!=_21))
{this.$q5(this.left,this.top,this.getWidth(),this.getHeight());if(this.$su!=null)delete this.$su;if(this.$sz!=null)delete this.$sz}
var _29=((_21?"V":"")+(_22?"H":"")),_30=((this.vscrollOn?"V":"")+(this.hscrollOn?"H":""));if(_29!=_30){this.logInfo("Scrollbar state: "+_29+" -> "+_30,"scrolling");if(_28==null||_30!=_28)
{this.innerSizeChanged("scrolling state changed")}}
if(this.isRTL()&&this.hscrollOn&&!_22){var _31=this.getClipHandle().scrollLeft;this.scrollLeft=_31}
if(this.showCustomScrollbars){if(!this.hscrollOn&&_22)this.hscrollbar.hide();if(!this.vscrollOn&&_21)this.vscrollbar.hide();if(this.hscrollOn){this.$u1()}else{if(_22)this.scrollTo(0)}
if(this.vscrollOn){this.$u2()}else{if(_21)this.scrollTo(null,0)}
this.$51s()}
if((this._useNativeTabIndex||this.$kn)&&_23!=this.$kk())
{this.$ur()}}
return true}
,isc.A.$51s=function(){var _1=Math.max(0,this.getScrollBottom()),_2=Math.max(0,this.getScrollRight()),_3=this.getScrollLeft(),_4=this.getScrollTop(),_5=false;if(_3>_2){_5=true;_3=_2}
if(_4>_1){_5=true;_4=_1}
if(_5){this.scrollTo(_3,_4)}}
,isc.A.checkNativeScroll=function(){var _1=this.getScrollHandle();if(this.getScrollingMechanism()!=isc.Canvas.NATIVE||_1==null)return;if(_1.scrollLeft!=this.scrollLeft||_1.scrollTop!=this.scrollTop){this.scrollTo(this.scrollLeft,this.scrollTop)}}
,isc.A.$u1=function(){var _1=this.hscrollbar;if(!_1){_1=this.hscrollbar=isc.ClassFactory.newInstance(this.scrollbarConstructor,{ID:this.getID()+"_hscroll",autoDraw:false,_generated:true,zIndex:this.getZIndex()+1,vertical:false,scrollTarget:this,visibility:this.visibility,$jp:false,$jo:false,$nu:false,$u3:false})}
if(!isc.Page.isLoaded()){var _2=this;isc.Page.setEvent("load",function(){if(!_2.destroyed)_2.$u1()});return}
if(!this.hscrollOn)return;_1.setRect(this.getOffsetLeft()+this.getLeftMargin()+(this.vscrollOn&&this.isRTL()?this.scrollbarSize:0),this.getOffsetTop()+this.getHeight()-
(this.getBottomMargin()+this.scrollbarSize),this.getOuterViewportWidth(),this.scrollbarSize);if(!_1.masterElement){this.addPeer(_1)}else{if(this.visibility!=isc.Canvas.HIDDEN)_1.show()}}
,isc.A.$u2=function(){var _1=this.vscrollbar
if(!_1){_1=this.vscrollbar=isc.ClassFactory.newInstance(this.scrollbarConstructor,{ID:this.getID()+"_vscroll",autoDraw:false,_generated:true,zIndex:this.getZIndex()+1,vertical:true,scrollTarget:this,visibility:this.visibility,$jp:false,$jo:false,$nu:false,$u3:false})}
if(!isc.Page.isLoaded()){var _2=this;isc.Page.setEvent("load",function(){if(!_2.destroyed)_2.$u2()});return}
if(!this.vscrollOn)return;_1.setShowCorner(this.hscrollOn&&this.vscrollOn);_1.setRect(this.getOffsetLeft()+(this.isRTL()?this.getLeftMargin():this.getWidth()-(this.getRightMargin()+this.getScrollbarSize())),this.getOffsetTop()+this.getTopMargin(),this.getScrollbarSize(),this.getHeight()-this.getVMarginSize());if(!_1.masterElement){this.addPeer(_1)}else{if(this.visibility!=isc.Canvas.HIDDEN)_1.show()}}
,isc.A.scrollByPage=function(_1,_2){var _3=(_1?this.getViewportHeight():this.getViewportWidth())-
this.scrollDelta;this.$u4(_1,_2*_3)}
,isc.A.scrollByDelta=function(_1,_2){this.$u4(_1,_2*this.scrollDelta)}
,isc.A.$u4=function(_1,_2){if(_1){this.scrollTo(null,this.getScrollTop()+_2)}else{this.scrollTo(this.getScrollLeft()+_2)}}
,isc.A.canScroll=function(_1){var _2=_1?this.getScrollHeight():this.getScrollWidth(),_3=_1?this.getViewportHeight():this.getViewportWidth();return(_2>_3)}
,isc.A.getScrollRatio=function(_1){var _2=_1?this.getScrollHeight():this.getScrollWidth(),_3=_1?this.getViewportHeight():this.getViewportWidth(),_4=_1?this.getScrollTop():this.getScrollLeft(),_5=_2-_3;if(_5==0)return 0;return _4/ _5}
,isc.A.scrollToRatio=function(_1,_2){var _3=Math.max(0,(_1?this.getScrollBottom():this.getScrollRight())),_4=Math.round(_3*_2);if(_1){this.scrollTo(null,_4)}else{this.scrollTo(_4)}}
,isc.A.getViewportRatio=function(_1){if(_1){return this.getViewportHeight()/this.getScrollHeight()}else{return this.getViewportWidth()/this.getScrollWidth()}}
,isc.A.getScrollBottom=function(){if(this.overflow==isc.Canvas.VISIBLE)return 0;return this.getScrollHeight()-this.getViewportHeight()}
,isc.A.getScrollRight=function(){if(this.overflow==isc.Canvas.VISIBLE)return 0;return this.getScrollWidth()-this.getViewportWidth()}
,isc.A.scrollToTop=function(){this.scrollTo(null,0)}
,isc.A.scrollToBottom=function(){this.scrollTo(null,this.getScrollBottom())}
,isc.A.scrollToLeft=function(){this.scrollTo(0,null)}
,isc.A.scrollToRight=function(){this.scrollTo(this.getScrollRight(),null)}
,isc.A.scrollBy=function(_1,_2){var _3,_4;if(_1!=null)_3=this.getScrollLeft()+_1;if(_2!=null)_4=this.getScrollTop()+_2;return this.scrollTo(_3,_4)}
,isc.A.scrollByPercent=function(_1,_2){if(isc.isA.String(_1))_1=parseInt(_1);if(isc.isA.String(_2))_2=parseInt(_2);if(!isc.isA.Number(_1))_1=0;else
_1=parseInt(_1/ 100*Math.max(0,(this.getScrollWidth()-this.getViewportWidth())));if(!isc.isA.Number(_2))_2=0;else
_2=parseInt(_2/ 100*Math.max(0,(this.getScrollHeight()-this.getViewportHeight())));this.scrollBy(_1,_2)}
,isc.A.scrollTo=function(left,top,handleAlreadyMoved,animating){if(isc.$cv)arguments.$cw=this;if(!animating){if(this.scrollAnimation)this.finishAnimation("scroll");if(this.hideAnimation&&this.$hideAnimationInfo.slideOut)
this.$hideAnimationInfo.slideOut=false;if(this.showAnimation&&this.$showAnimationInfo.slideIn)
this.$showAnimationInfo.slideIn=false}
if(this.logIsDebugEnabled("scrolling")){this.logDebug("scrollTo("+left+", "+top+(handleAlreadyMoved?", handleAlreadyMoved":"")+")","scrolling")}
if(!isc.isA.Number(left))left=this.getScrollLeft();if(!isc.isA.Number(top))top=this.getScrollTop();var actuallyMoved=false;if((left!=null&&left!=this.scrollLeft)||(top!=null&&top!=this.scrollTop)){actuallyMoved=true;this.lastScrollLeft=this.scrollLeft;this.lastScrollTop=this.scrollTop;this.lastScrollDirection=(left!=null&&left!=this.scrollLeft&&top!=null&&top!=this.scrollTop?"both":top!=null&&top!=this.scrollTop?"vertical":"horizontal")}
if(handleAlreadyMoved||!this.isDrawn()){this.scrollLeft=left;this.scrollTop=top}else{var maxScrollLeft=this.getScrollRight();this.scrollLeft=Math.max(0,Math.min(maxScrollLeft,left));var maxScrollTop=this.getScrollBottom();this.scrollTop=Math.max(0,Math.min(maxScrollTop,top));this.$u5(this.scrollLeft,this.scrollTop)}
if(this.showCustomScrollbars){if(this.hscrollOn&&this.hscrollbar)this.hscrollbar.setThumb();if(this.vscrollOn&&this.vscrollbar)this.vscrollbar.setThumb()}
if(actuallyMoved)this.$u6()}
,isc.A.scrolled=function(){}
,isc.A.$u6=function(){if(!isc.EH.$ky){var _1=isc.EH.lastEvent,_2=(_1.eventType==isc.EH.MOUSE_MOVE?_1.target:isc.EH.lastMoveTarget);if(_2!=null){if(!this.contains(_2,true))_2=null;else if(_1.eventType!=isc.EH.MOUSE_MOVE&&!_2.visibleAtPoint(isc.EH.getX(),isc.EH.getY(),false))
{_2=null}
if(_2!=null)isc.EH.$kx(null,isc.EH.lastEvent)}}
if(this.scrolled)this.scrolled()}
,isc.A.scrollToPercent=function(_1,_2){if(isc.isA.String(_1))_1=parseInt(_1);if(isc.isA.String(_2))_2=parseInt(_2);if(!isc.isA.Number(_1))_1=0;if(!isc.isA.Number(_2))_2=0;_1=parseInt(_1/ 100*Math.max(0,(this.getScrollWidth()-this.getViewportWidth())));_2=parseInt(_2/ 100*Math.max(0,(this.getScrollHeight()-this.getViewportHeight())));this.scrollTo(_1,_2)}
,isc.A.$u5=function(_1,_2){var _3=this.getScrollingMechanism();if(_3==isc.Canvas.NATIVE){var _4=this.getScrollHandle();if(_4){this.$u7=true;_4.scrollLeft=_1;_4.scrollTop=_2;delete this.$u7;if(_4.scrollLeft!=this.scrollLeft||_4.scrollTop!=this.scrollTop){this.scrollLeft=_4.scrollLeft;this.scrollTop=_4.scrollTop}}}else if(_3==isc.Canvas.NESTED_DIV){var _4=this.getHandle();if(_4==null){this.logWarn(this.getCallTrace(arguments)+" in NS6 with null handle");return}
_4=_4.style;_4.left=-_1+"px";_4.top=-_2+"px"}else if(_3==isc.Canvas.CLIP){this.scrollLeft=_1;this.scrollTop=_2;var _5=this.getViewportHeight(),_6=this.getViewportWidth();if(this.logIsDebugEnabled()){this.logDebug("scrollTo: "+this.echo({clipWidth:_6,clipHeight:_5,left:this.left,top:this.top,scrollLeft:this.scrollLeft,scrollTop:this.scrollTop}))}
this.$q5(this.left,this.top,_6,_5);this.setClip(0,_6,_5,0)}}
,isc.A.$lh=function(_1,_2){isc.EH.$h1("SCR");if(isc.$cv)arguments.$cw=this;if(this.$u7)return;if(isc.Browser.isMoz&&!_1&&(_2||isc.Browser.geckoVersion<20030312)){if(!this.$u8)
this.$u8=this.delayCall("$lh",[true],10);return}
this.$u8=null;if(!this.isDrawn())return;var _3=this.getScrollHandle(),_4=_3.scrollLeft,_5=_3.scrollTop;if(_4==this.scrollLeft&&_5==this.scrollTop)return;var _6=this.getScrollingMechanism();if(_6!=isc.Canvas.NATIVE){this.logWarn("unsupported native scroll occurred on this widget - resetting");if(_6==isc.Canvas.NESTED_DIV){_3.scrollLeft=_3.scrollTop=0}else{_3.scrollLeft=this.scrollLeft;_3.scrollTop=this.scrollTop}
return}
this.scrollTo(_4,_5,true);isc.EH.$h2()}
,isc.A.mouseWheel=function(){if((this.overflow==isc.Canvas.AUTO||this.overflow==isc.Canvas.SCROLL)&&this.showCustomScrollbars&&this.vscrollOn)
{var _1=this.ns.EH.lastEvent.wheelDelta;var _2=this.scrollTop+Math.round(_1*isc.Canvas.scrollWheelDelta);this.scrollTo(this.getScrollLeft(),_2);return false}
return true}
,isc.A.isDragScrolling=function(){if(this.vscrollOn&&this.vscrollbar&&this.vscrollbar.isDragScrolling())return true;if(this.hscrollOn&&this.hscrollbar&&this.hscrollbar.isDragScrolling())return true;return false}
,isc.A.isRepeatTrackScrolling=function(){if(this.vscrollOn&&this.vscrollbar&&this.vscrollbar.isRepeatTrackScrolling())return true;if(this.hscrollOn&&this.hscrollbar&&this.hscrollbar.isRepeatTrackScrolling())return true;return false}
,isc.A.handleKeyPress=function(_1,_2){var _3;if(this.convertToMethod("keyPress")){_3=this.keyPress(_1,_2)}
if(_3!=false&&this.shouldCancelKey!=null&&this.shouldCancelKey(_1,_2))
{_3=false}
if(_3==false)return false;var _4=_1.keyName;if(this.$kn&&((isc.Browser.isMoz&&this.canSelectText)||isc.Browser.isSafari)&&_4=="Tab")
{this.setFocus(true)}
if((this.overflow==isc.Canvas.AUTO||this.overflow==isc.Canvas.SCROLL)&&this.showCustomScrollbars)
{var _5=0,_6=0;if(_4=="Page_Up")_6-=this.getViewportHeight();else if(_4=="Page_Down")_6+=this.getViewportHeight();else if(_4=="Arrow_Up")_6-=10;else if(_4=="Arrow_Down")_6+=10;else if(_4=="Arrow_Left")_5-=10;else if(_4=="Arrow_Right")_5+=10;if(_5!=0||_6!=0){this.scrollTo(this.scrollLeft+_5,this.scrollTop+_6);return false}
if(_4=="Home"){this.scrollTo(null,0);return false}else if(_4=="End"){this.scrollTo(null,(this.getScrollHeight()-this.getViewportHeight()));return false}}
return _3}
,isc.A.$q5=function(_1,_2,_3,_4){if(this.getScrollingMechanism()==isc.Canvas.CLIP){if(_1!=null)_1-=this.scrollLeft;if(_2!=null)_2-=this.scrollTop;if(_3!=null)_3+=this.scrollLeft;if(_4!=null)_4+=this.scrollTop}
if(this.showCustomScrollbars&&this.vscrollOn&&_1!=null&&this.isRTL()){_1+=this.getScrollbarSize()}
if(_3!=null||_4!=null){var _5=this.$sf(_3,_4);_3=_5[0];_4=_5[1]}
var _6=this.getStyleHandle();if(_6){if(isc.isA.Number(_1))this.$u9(_6,isc.Canvas.LEFT,_1);if(isc.isA.Number(_2))this.$u9(_6,isc.Canvas.TOP,_2);if(isc.isA.Number(_3))this.$u9(_6,this.$o6,Math.max(_3,1));if(isc.isA.Number(_4))this.$u9(_6,this.$o5,Math.max(_4,1))}}
,isc.A.$u9=function(_1,_2,_3){if(isc.Browser.isIE||isc.Browser.isOpera){if(!isc.Browser.isStrict){_1[_2]=_3}else{if(_3<0&&(_2==this.$o6||_2==this.$o5))_3=0;_1[_2]=_3+this.$ph}}else{if(_1==null){return}
_1[_2]=_3+this.$ph}}
,isc.A.$qi=function(){var _1=this._backMask;if(!_1)return;if(this.showEdges){var _2=this.$l0,_3=this.maskEdgeCenterOnly,_4=_3?_2.$y4:_2.$tb,_5=_3?_2.$y5:_2.$tc,_6=_3?_2.$y6:_2.$td,_7=_3?_2.$y7:_2.$te,_8=this.getVisibleWidth()-(_4+_5),_9=this.getVisibleHeight()-(_6+_7);if(_8<=0||_9<=0)_1.hide();else{if(this.isVisible())_1.show();_1.setRect(this.getLeft()+_4,this.getTop()+_6,_8,_9)}}else{_1.setRect(this.getRect())}}
,isc.A.getTextDirection=function(){var _1=this;while(_1){if(_1.textDirection!=null)return _1.textDirection;_1=_1.parentElement;if(_1&&_1.eventProxy)_1=_1.eventProxy}
return isc.Page.getTextDirection()}
,isc.A.isRTL=function(){return(this.getTextDirection()==isc.Canvas.RTL)}
,isc.A.getRTLSign=function(){return this.isRTL()?-1:1}
,isc.A.setVisibility=function(_1){if(this.$va!=null&&!this.$vb)
this.finishAnimation(this.$va);if(this.$vc!=null&&!this.$vd)
this.finishAnimation(this.$vc);if(this.fadeAnimation)this.finishAnimation("fade");if(!isc.isA.String(_1)){_1=(_1!=false?isc.Canvas.INHERIT:isc.Canvas.HIDDEN)}
if(this.visibility==_1)return;var _2=this.isVisible();this.visibility=_1;if(this.isDrawn()){if(!_2&&this.isVisible()){if(this.isDirty()){this.redraw("show() while dirty")}else if(this.children&&this.children.length>0){var _3=isc.Canvas.$nm.duplicate();for(var i=0;i<_3.length;i++){var _5=_3[i];if(_5&&_5.isDirty()&&this.$sr(_5)){_5.redraw("show() on parent while dirty")}}}
this.$ve()}
this.$vf(_1)}
if(_2&&!this.isVisible()){this.$ve()}
if(this.peers){for(var i=0;i<this.peers.length;i++){var _6=this.peers[i];if(this.isVisible()&&((_6==this.hscrollbar&&!this.hscrollOn)||(_6==this.vscrollbar&&!this.vscrollOn)))continue;if(this.isVisible()&&_6==this._shadow&&!this.showShadow)continue;if(_6.$jq)_6.setVisibility(_1)}}
if(this.children)this.children.map("parentVisibilityChanged",_1);if(this.parentElement)this.parentElement.childVisibilityChanged(this,_1);if(this.$kn)this.$vg()}
,isc.A.parentVisibilityChanged=function(_1){if(this.children)this.children.map("parentVisibilityChanged",_1);this.$ve();if(this==isc.Canvas.$rl)isc.Canvas.hideResizeThumbs();if(this.$kn)this.$vg()}
,isc.A.childVisibilityChanged=function(_1,_2){this.$t6("childVisChange")}
,isc.A.childCleared=function(_1){if(!this.destroying)this.$t6("childClear")}
,isc.A.peerCleared=function(_1){}
,isc.A.childDrawn=function(_1){if(this.isDrawn())this.$t6("childDraw")}
,isc.A.peerDrawn=function(_1){}
,isc.A.$vg=function(){if(!this.$kn||!this.$qj)return;var _1=this.isVisible(),_2=this.$sl();if(_2){if(_1&&_2.style.visibility==isc.Canvas.HIDDEN)
_2.style.visibility=isc.Canvas.VISIBLE
if(!_1&&_2.style.visibility!=isc.Canvas.HIDDEN)
_2.style.visibility=isc.Canvas.HIDDEN}}
,isc.A.$vf=function(_1){var _2=this.getStyleHandle();if(_2!=null)_2.visibility=_1}
,isc.A.$ve=function(){if(!this.hideUsingDisplayNone||!this.isDrawn())return;var _1=this.getStyleHandle();if(!this.isVisible()&&!this.$62u){this.$vh=_1.display;this.$62u=true;_1.display=this.$27r}else if(this.isVisible()&&this.$62u){_1.display=(this.$vh?this.$vh:isc.emptyString);delete this.$62u}}
,isc.A.$418=function(){return(this.getDrawnState()==isc.Canvas.UNDRAWN)&&!this.parentElement&&!this.masterElement}
,isc.A.show=function(){if(isc.$cv)arguments.$cw=this;var _1=this.hasFocus;if(this.$418()){this.draw(true)}
this.setVisibility(isc.Canvas.INHERIT);if(_1&&this.hasFocus){this.logInfo("Show: Hidden / Undrawn widget marked as having focus - calling focus()","events");this.hasFocus=false;this.focus()}
if(this.autoShowParent&&this.parentElement)this.parentElement.show()}
,isc.A.$414=function(){if(!this.isDrawn()||this.parentElement||this.position!=this.$411)return;var _1=this.$412,_2=this.$413,_3=this.getPageLeft(),_4=this.getPageTop();this.$tx=(_3-_1);this.$ty=(_4-_2);this.$t2();this.$412=_3;this.$413=_4;isc.Page.setEvent("resize",this,isc.Page.FIRE_ONCE,"$414")}
,isc.A.hide=function(){this.$rk();this.setVisibility(isc.Canvas.HIDDEN)}
,isc.A.isVisible=function(){var _1=this;while(_1){if(_1.visibility==isc.Canvas.HIDDEN)return false;if(_1.visibility==isc.Canvas.VISIBLE)return true;_1=_1.parentElement}
return true}
,isc.A.$st=function(){var _1=this;while(_1){if(_1.visibility==isc.Canvas.HIDDEN&&_1.hideUsingDisplayNone)return true;_1=_1.parentElement}
return false}
,isc.A.setEnabled=function(_1){this.logWarn("call to deprecated method 'setEnabled()' - use 'setDisabled()' instead.");var _2=((_1==null||isc.isA.Boolean(_1))?!_1:(_1==this.$pi));this.setDisabled(_2)}
,isc.A.setDisabled=function(_1){if(_1==null)_1=false;if(!isc.isA.Boolean(_1))_1=(_1==this.$pi);if(this.disabled==_1)return;if(this.peers)this.peers.map("masterDisabled",_1);var _2=this.isDisabled()
this.disabled=_1;var _3=this.isDisabled();if(_2!=_3){this.setHandleDisabled(_3);if(this.children)this.children.map("parentDisabled",_3)}}
,isc.A.masterDisabled=function(_1){this.setDisabled(_1)}
,isc.A.parentDisabled=function(_1){if(this.disabled)return;if(!this.parentElement.redrawOnDisable)this.setHandleDisabled(_1);if(this.children)this.children.map("parentDisabled",_1)}
,isc.A.setHandleDisabled=function(_1){if(!this.isDrawn())return;if(this.redrawOnDisable)this.markForRedraw("setDisabled");if(this.$kk())this.disableKeyboardEvents(_1)}
,isc.A.disableKeyboardEvents=function(_1,_2){if(_1){this.$vi(-1);if(this.accessKey!=null)this.$m9(null)}else{this.$vi(this.getTabIndex());if(this.accessKey!=null)this.$m9(this.accessKey)}
if(_1&&this.hasFocus)this.blur();if(_2&&this.children){for(var i=0;i<this.children.length;i++){this.children[i].disableKeyboardEvents(_1,true)}}}
,isc.A.enable=function(){if(this.disabled)this.setDisabled(false)}
,isc.A.disable=function(){if(!this.disabled)this.setDisabled(true)}
,isc.A.isDisabled=function(){var _1=this;while(_1){if(_1.disabled)return true;_1=_1.parentElement;if(_1&&_1.eventProxy)_1=_1.eventProxy}
return false}
,isc.A.isEnabled=function(){this.logWarn("Call to deprecated 'isEnabled()' method - should use isDisabled() instead");return!this.isDisabled()}
,isc.A.$kk=function(){if(this.canFocus!=null)return this.canFocus;if((this.overflow==isc.Canvas.SCROLL)||((this.overflow==isc.Canvas.AUTO)&&(this.vscrollOn||this.hscrollOn))){return true}
return false}
,isc.A.setCanFocus=function(_1){this.canFocus=_1;this.$ur()}
,isc.A.$ur=function(){this.$vj(this.$kk());this.canFocusChanged()}
,isc.A.$vj=function(_1){var _2;if(this.$kn){if(_1){_2=this.$sl();if(!_2)return this.makeFocusProxy()}else{this.$qp();return}
if(isc.Browser.isSafari&&this.getTabIndex()==-1){this.$qp();return}}
if(this.$qc()){if(_1&&this.accessKey){this.$qd()}else if(this.$qt){this.$qu()}}
if(this._useNativeTabIndex)_2=this.getClipHandle();if(_1){this.$vk(this.getTabIndex(),this.$sp);if(_2!=null){var _3=this.$sg(),_4=this.$si();_2.onfocus=_3;_2.onblur=_4;if(this.accessKey)this.$m9(this.accessKey)}}else{if(_2!=null){_2.onFocus=null;_2.onBlur=null;this.$vi(-1);if(_2.accessKey!=null)this.$m9(null)}}}
,isc.A.canFocusChanged=function(){var _1=this.parentElement;while(_1){_1.childCanFocusChanged(this);_1=_1.parentElement}}
,isc.A.childCanFocusChanged=function(_1){}
,isc.A.setShowFocusOutline=function(_1,_2){if(!_2&&this.showFocusOutline==_1)return;if(!_2)this.showFocusOutline=_1;if(isc.Browser.isMoz){var _3=this.getClipHandle();if(_3){_3.style.MozOutlineStyle=(_1?isc.emptyString:this.$27r)}}else{var _3=this.getHandle();if(_3)_3.hideFocus=!_1}}
,isc.A.$vl=function(_1){return(this.isDrawn()&&this.visibleInDOM()&&(!_1||!this.isDisabled()))}
,isc.A.visibleInDOM=function(){if(!this.isVisible())return false;var _1=this;while(_1.parentElement)_1=_1.parentElement;if(_1.position==isc.Canvas.ABSOLUTE)return true;var _2=this.getDocumentBody();var _3=_1.getClipHandle().parentNode;while(_3&&_3!=_2){var _4=_3.style;if(_4&&_4.visibility==this.$nz)return false;if(_4&&_4.display==this.$27r)return false;_3=_3.parentNode}
return true}
,isc.A.getFocusHandle=function(){if(this._useNativeTabIndex){return this.getClipHandle()}else if(this.$kn&&this.$qj){return this.$sl()}
return null}
,isc.A.setFocus=function(_1){if(!this.$vl(_1))return;var _2=this.getFocusHandle();if(_1&&this.$kk()){if(_2!=null){this.logInfo("about to call native focus()"+(this.logIsDebugEnabled("traceFocus")?this.getStackTrace():""),"nativeFocus");isc.EH.$lg=this;_2.focus();isc.EH.$vm=this}else{this.ns.EH.focusInCanvas(this)}}else if(this.hasFocus){if(_2){this.logInfo("about to call native blur()"+(this.logIsDebugEnabled("traceBlur")?this.getStackTrace():""),"nativeFocus");isc.EH.$ld=this;_2.blur()}else{this.ns.EH.blurFocusCanvas(this)}}}
,isc.A.$vn=function(){var _1=isc.EH.$ke;if(_1!=null&&_1!=this){this.logDebug("not restoring focus; focus moved to: "+_1,"nativeFocus");return}
var _2=isc.EH.$lg;if(_2!=null&&_2!=this){this.logDebug("not restoring focus; focus about to move to:"+_2,"nativeFocus");return}
this.logDebug("restoring focus from zIndex change","nativeFocus");this.$vo(true)}
,isc.A.focus=function(){if(isc.$cv)arguments.$cw=this;this.setFocus(true)}
,isc.A.blur=function(){if(isc.$cv)arguments.$cw=this;this.setFocus(false)}
,isc.A.focusAtEnd=function(_1){return this.focus()}
,isc.A.$vo=function(_1){this.$vp=true;this.setFocus(_1)}
,isc.A.$lf=function(_1){if(_1==null)_1=(this.ns.EH.$ke==this);this.hasFocus=_1;if(this.$vp){delete this.$vp;return false}
this.$vq=true;if(this.focusChanged!=null){this.convertToMethod("focusChanged");this.focusChanged(_1)}
if(this.redrawOnFocus)this.markForRedraw("setFocus");this.$vq=false}
,isc.A.$rk=function(){var _1=this.ns.EH.getFocusCanvas();if(this.$sr(_1)){if(isc.isA.Canvas(_1.focusOnHide)&&_1.focusOnHide.isDrawn()&&_1.focusOnHide.isVisible()){_1.focusOnHide.focus()}
else{_1.blur();if(_1.hasFocus)isc.EH.blurFocusCanvas(_1)}}}
,isc.A.containsFocus=function(){var _1=this.ns.EH.getFocusCanvas();return this.contains(_1,true)}
,isc.A.setAccessKey=function(_1){this.accessKey=_1;if(this.$kk()&&!this.isDisabled()){this.$m9(this.accessKey)}}
,isc.A.$m9=function(_1){if(this.$qc()){if(_1==null)this.$qu();else{if(this.$qt)this.$qt.accessKey=_1;else this.$qd()}
return}
if(this._useNativeTabIndex){var _2=this.getHandle();if(_2!=null)_2.accessKey=_1}
if(this.$kn&&this.$qj){var _2=this.$sl();if(_2!=null){if(isc.Browser.isMoz){this.$qp();this.makeFocusProxy()}else{_2.accessKey=_1}}}}
,isc.A.getAccessKey=function(){return this.accessKey}
,isc.A.getTabIndex=function(){if(this.tabIndex==null){this.$vr()}
return this.tabIndex}
,isc.A.getTabIndexSpan=function(){return 1}
,isc.A.setTabIndex=function(_1){var _2=isc.Canvas.TAB_INDEX_FLOOR;if(_1>=_2){var _3=_2-1;this.logWarn("setTabIndex(): Passed index of "+_1+". This method does not support setting a tab index greater than "+_3+".  Setting tab index for this widget to "+_3+this.getStackTrace());_1=_3}
this.$rp();this.$vk(_1,false)}
,isc.A.$vk=function(_1,_2){this.$sp=_2;this.tabIndex=_1;if(this.$kk()&&!this.isDisabled()){this.$vi(_1)}}
,isc.A.$vi=function(_1){if(this._useNativeTabIndex&&this.isDrawn()){this.getClipHandle().tabIndex=_1;if(isc.Browser.isIE)isc.Canvas.$vs()}
if(this.$kn){if(!this.$qj)return this.makeFocusProxy();var _2=this.$sl();var _3=(this.hasFocus&&!this.$vq);if(_3&&_2)_2.blur();if(isc.Browser.isSafari&&_1<0)return this.$qp();if(_2!=null){_2.tabIndex=_1;if(isc.Browser.isMoz){_2.style.MozUserFocus=(_1<0?"ignore":"normal")}
if(_3)_2.focus()}}}
);isc.evalBoundary;isc.B.push(isc.A.$vr=function(){var _1=isc.Canvas;if(_1.$vt==null){_1.$vt=_1.TAB_INDEX_FLOOR}
var _2=isc.EH.$kl;if(_2)_1.$vt+=_2.getTabIndexSpan();_1.$vt+=_1.TAB_INDEX_GAP
if(_1.$vt>isc.Canvas.TAB_INDEX_CEILING&&!isc.Canvas.$vu)
{isc.Canvas.logWarn("Auto allocation of tab-indices has reached native browser ceiling "+"- tab-order cannot be guaranteed for widgets on this page.");isc.Canvas.$vu=true}
this.$vk(_1.$vt,true);if(_2){_2.$vv(this);this.$vw=_2}else{isc.EH.$kj=this}
isc.EH.$kl=this}
,isc.A.$vx=function(_1){if(this==_1||this.$vy()==_1)return;var _2=_1.getTabIndex();if(!_1.$sp){this.logWarn("$vx() attempting to set tab index adjacent to widget "+_1+" with explicitly specified tabIndex ["+_1.tabIndex+"]. This method can only manipulate widgets with auto-assigned tab indexes.");return}
var _3=_1.$vw;var _4=this.$vz(),_5=this.$vy();if(isc.EH.$kl==this)isc.EH.$kl=_4;if(isc.EH.$kj==this)isc.EH.$kj=_5;if(_4!=null)
_4.$vv(_5);if(_5!=null)
_5.$v0(_4);this.$v0(null);this.$vv(null);this.$v1(_1.$vz(),_1);this.$v2()}
,isc.A.$sq=function(_1){if(this==_1||this.$vw==_1)return;_1.getTabIndex();if(!_1.$sp){this.logWarn("$sq() attempting to set tab index adjacent to widget "+_1+" with explicitly specified tabIndex ["+_1.tabIndex+"]. This method can only manipulate widgets with auto-assigned tab indexes.");return}
var _2=_1,_3=this.$vz(),_4=this.$vy();if(isc.EH.$kl==this)isc.EH.$kl=_3;if(isc.EH.$kj==this)isc.EH.$kj=_4;if(_3!=null)
_3.$vv(_4);if(_4!=null)
_4.$v0(_3);this.$v0(null);this.$vv(null);this.$v1(_1,_1.$vy());this.$v2()}
,isc.A.$v1=function(_1,_2){if(_2==null)return this.$vr();if(_1==null){var _3=_2.$vy();_2.$rp();this.$vv(_3);this.$v0(null);this.$vk(_2.tabIndex,true);isc.EH.$kj=this;_2.$v1(this,_3);return}
this.$vv(_2);_2.$v0(this);this.$v0(_1);_1.$vv(this);var _4=_1.tabIndex+_1.getTabIndexSpan(),_5=_2.tabIndex,_6=_4+Math.floor((_5-_4)/2),_7=this.getTabIndexSpan();if((_6+_7)>_5){_2.$v3((_6+_7)-_5)}
if(this.logIsDebugEnabled("tabIndex")){this.logDebug("Putting "+this.getID()+" in tab order between: "+_1.getID()+":"+_1.tabIndex+", and :"+_2.getID()+":"+_2.tabIndex+". Resulting tabIndex:"+_6,"tabIndex")}
this.$vk(_6,true)}
,isc.A.$v3=function(_1){var _2=this.$vy();if(_2==null){this.$vk(this.tabIndex+_1+isc.Canvas.TAB_INDEX_GAP,true);return}
var _3=_2.getTabIndex(),_4=_3-this.getTabIndexSpan();if(this.tabIndex+_1<_4)this.$vk(_4,true);else{_2.$v3(_1-(_4-this.tabIndex));this.$vk(_2.tabIndex-this.getTabIndexSpan(),true)}}
,isc.A.$vy=function(_1){if(!_1)return this.$v4;else return this.$vw}
,isc.A.$vz=function(){return this.$vy(true)}
,isc.A.$vv=function(_1,_2){if(!_2)this.$v4=_1;else this.$vw=_1}
,isc.A.$v0=function(_1){return this.$vv(_1,true)}
,isc.A.$kf=function(_1,_2){var _3=this;do{_3=(_1?_3.$vy():_3.$vz())}while(_3&&(isc.EH.targetIsMasked(_3,_2)||_3.isDisabled()||!_3.isDrawn()||!_3.isVisible()||!_3.$kk()))
if(_3){this.logInfo("focusInNextTabElement() shifting focus to:"+_3,"syntheticTabIndex");_3.focusAtEnd(_1)}else if(_1){this.logInfo("focusInNextTabElement() shifting focus to first widget","syntheticTabIndex");if(isc.EH.$kj==null||(isc.EH.$kj==this&&this.isMasked(_2)))return;isc.EH.$kh(_2)}else{this.logInfo("focusInNextTabElement() shifting focus to last widget","syntheticTabIndex");if(isc.EH.$kl==null||(isc.EH.$kl==this&&this.isMasked(_2)))return;isc.EH.$kg(_2)}}
,isc.A.$v2=function(){var _1=isc.isA.Layout(this)?this.members:this.children;if(!_1||_1.length==0)return;var _2=this.$vy();for(var i=_1.length-1;i>=0;i--){if(_1[i]==null||(_1[i].tabIndex!=null&&!_1[i].$sp))continue;if(_2==null)_1[i].$sq(this);else _1[i].$vx(_2);_2=_1[i]}}
,isc.A.$v5=function(){var _1=this.children;if(isc.Layout&&isc.isA.Layout(this))_1=this.members;if(_1!=null){for(var i=_1.length-1;i>=0;i--){var _3=_1[i].$v5();if(_3!=null)return _3}}
if(this.tabIndex==null||this.$sp)return this;return null}
,isc.A.$rp=function(){if(!this.$sp||!this.tabIndex)return;var _1=this.$vz(),_2=this.$vy();if(_1==null&&_2==null&&isc.EH.$kl!=this&&isc.EH.$kj!=this)return;if(_1){_1.$vv(_2)}else{isc.EH.$kj=_2}
if(_2){_2.$v0(_1)}else{isc.EH.$kl=_1}
this.$v0(null);this.$vv(null)}
,isc.A.getZIndex=function(_1){if(!this.isDrawn()||isc.Browser.isSafari){if(_1&&this.zIndex==isc.Canvas.AUTO){this.setZIndex(isc.Canvas.getNextZIndex())}
return this.zIndex}
return parseInt(this.getStyleHandle().zIndex)}
,isc.A.setZIndex=function(_1){var _2=this.zIndex;if(_2==_1)return;var _3=false;if(isc.Browser.isIE&&this.hasFocus&&this._useNativeTabIndex)
{_3=true;this.logDebug("blurring due to zIndex change","nativeFocus");this.$vo(false)}
if(_1<_2)this.$v6(_1);this.zIndex=_1;if(this.isDrawn()){if(this.useClipDiv)this.getHandle().style.zIndex=_1
this.getStyleHandle().zIndex=_1}
if(_1>_2)this.$v6(_1);if(this.hscrollbar)this.hscrollbar.moveAbove(this);if(this.vscrollbar)this.vscrollbar.moveAbove(this);if(this.clipCorners){var _4=this.$uc;if(_4.TL)_4.TL.moveAbove(this);if(_4.TR)_4.TR.moveAbove(this);if(_4.BL)_4.BL.moveAbove(this);if(_4.BR)_4.BR.moveAbove(this)}
if(_3){this.delayCall("$vn",[],0)}
this.zIndexChanged(_2,_1)}
,isc.A.$v6=function(_1){if(this.$sb())this.$l0.setZIndex(_1-1);if(this._backMask)this._backMask.setZIndex(_1-2);if(this._shadow)this._shadow.setZIndex(_1-3);if(this.modalMask)this.modalMask.setZIndex(_1-4)}
,isc.A.zIndexChanged=function(_1,_2){if(this.children)this.children.map("parentZIndexChanged")}
,isc.A.parentZIndexChanged=function(){if(this.children)this.children.map("parentZIndexChanged")}
,isc.A.bringToFront=function(){if(isc.$cv)arguments.$cw=this;isc.Canvas.$ni+=18;this.setZIndex(isc.Canvas.$ni);isc.$nd=true;this.unmask();isc.$nd=false}
,isc.A.sendToBack=function(){isc.Canvas.$nh-=18;this.setZIndex(isc.Canvas.$nh)}
,isc.A.moveAbove=function(_1){var z=_1.getZIndex(true);this.setZIndex(z+6)}
,isc.A.moveBelow=function(_1){var z=_1.getZIndex(true);this.setZIndex(z-6)}
,isc.A.getContents=function(){var _1=(isc.isA.Function(this.contents)?this.contents():this.contents);return this.dynamicContents?_1.evalDynamicString(this,this.dynamicContentsVars):_1}
,isc.A.setContents=function(_1){if(_1!=null)this.contents=_1;this.markForRedraw("setContents")}
,isc.A.containsIFrame=function(){return this.contentsURL!=null&&this.contentsType=="page"}
,isc.A.getContentsURL=function(){return this.contentsURL}
,isc.A.setContentsURL=function(_1){this.contentsURL=_1;_1=isc.Page.getURL(_1);_1=isc.rpc.addParamsToURL(_1,this.contentsURLParams);if(!this.isDrawn())return;if(this.containsIFrame()){var _2=this.$sk();if(!_2||!_1)this.markForRedraw("setContentsURL");else _2.src=_1}}
,isc.A.setBackgroundColor=function(_1){if(_1)this.backgroundColor=_1;if(this.isDrawn()){return this.getStyleHandle().backgroundColor=_1}}
,isc.A.setBackgroundImage=function(_1){if(_1)this.backgroundImage=_1;if(this.isDrawn()){if(this.isDrawn())this.getStyleHandle().backgroundImage='url('+this.getImgURL(this.backgroundImage)+')'}}
,isc.A.setBorder=function(_1){this.$tk=null;if(_1!=null&&!isc.isA.String(_1)){_1=this.$63e(_1)}
if(_1==null)return;if(_1.endsWith(";"))_1=_1.slice(0,_1.length-1);this.border=_1;var _2=this.getStyleHandle();if(!_2)return;if(_2.border!=_1){_2.border=_1}
this.adjustOverflow("setBorder");this.innerSizeChanged("Border thickness changed")}
,isc.A.$63e=function(_1){var _2=_1;if(isc.isA.Number(_1)){_1+="px solid"}else{_1=null;this.logWarn("this.border defined as "+_2+". This property should have a string value - dropping this attribute.")}
return _1}
,isc.A.getBorder=function(){return this.border}
,isc.A.setOpacity=function(_1,_2,_3){if(!_2&&this.fadeAnimation)this.finishAnimation("fade");var _4=this.opacity;this.opacity=_1;if(this.opacity==100&&!_3&&!(this.smoothFade&&isc.Browser.isMoz))this.opacity=null;if(this.isDrawn()){if(isc.Browser.isMoz){var _5=(this.opacity!=null)?this.opacity/ 100:"";if(this.smoothFade&&(_5==1||this.opacity==null))_5=0.9999;if(this.$65q)this.getStyleHandle().MozOpacity=_5;else this.getStyleHandle().opacity=_5}else if(isc.Browser.isIE){this.getStyleHandle().filter=(this.opacity==null?"":"progid:DXImageTransform.Microsoft.Alpha(opacity="+this.opacity+")")}else{var _5=(this.opacity!=null)?this.opacity/ 100:"";this.getStyleHandle().opacity=_5}}
this.$v7(_1,_2,_3||_1!=null);if(isc.Browser.isIE&&this.fixIEOpacity&&this.children){for(var i=0;i<this.children.length;i++){var _7=this.children[i];if(_7.opacity==null&&(_3||_1!=null)){_7.setOpacity(100,_2,true)}else if(_7.opacity==100){_7.setOpacity(null)}}}
this.opacityChanged(_1,_2)}
,isc.A.opacityChanged=function(_1,_2){}
,isc.A.$v7=function(_1,_2,_3){if(!this.peers)return;for(var i=0;i<this.peers.length;i++){if(this.peers[i].$nt){this.peers[i].setOpacity(_1,_2,_3)}else if(this.peers[i]==this.edgedCanvas&&this.edgeOpacity){var _5=Math.round(this.opacity*(this.edgeOpacity*.01));this.peers[i].setOpacity(_5,_2,_3)}}}
,isc.A.setPrompt=function(_1){this.prompt=_1;this.updateHover()}
,isc.A.hilite=function(){isc.Log.hiliteCanvas(this.ID)}
,isc.A.setCursor=function(_1){if(_1&&_1!=this.cursor){this.cursor=_1;this.$k2()}}
,isc.A.$v8=function(_1){if(this.isDrawn()){if(isc.Browser.isMoz&&_1=="hand")_1=isc.Canvas.HAND;this.$v9=_1;this.getStyleHandle().cursor=_1;if(this.useClipDiv)this.getHandle().style.cursor=_1;if(this.$kt){for(var i=0;i<this.$kt.length;i++){this.$kt[i].$v8(_1)}}
if(this.ns.EH.$wa&&(this==this.ns.EH.getTarget())){this.ns.EH.$wa.setCursor(_1)}}
if(isc.Browser.isOpera&&isc.EH.lastEvent.target==this)this.markForRedraw()}
,isc.A.$k2=function(){var _1=this.getCurrentCursor();if(this.$v9==_1)return;this.$v8(_1)}
,isc.A.getCurrentCursor=function(){var _1=this.cursor;if(isc.EH.dragging&&this.$uh&&(isc.EH.dragMoveTarget!=this)){_1=this.noDropCursor}else if(this.isDisabled())_1=this.disabledCursor;else{var _2;if(this.canDragResize&&this.edgeCursorMap){var _3=this.getEventEdge();if(_3&&this.edgeCursorMap[_3]){_1=this.edgeCursorMap[_3];_2=true}}
if(!_2&&this.canDragReposition&&this.dragRepositionCursor){_1=this.dragRepositionCursor}}
return _1}
,isc.A.getHoverTarget=function(_1,_2){var _3=this;while(_3){if(_3.getCanHover()==null){if(_3.prompt!=null)return _3;_3=_3.parentElement}else if(_3.getCanHover()){return _3}else{return null}}
return null}
,isc.A.startHover=function(_1){isc.Hover.setAction(this,this.$wb,null,this.hoverDelay)}
,isc.A.stopHover=function(_1){isc.Hover.clear()}
,isc.A.$wb=function(){var _1=isc.EH,_2=_1.lastMoveTarget;var _3=_1.lastEvent;if(!_2||_2.getHoverTarget(_3)!=this)return;return this.handleHover()}
,isc.A.getCanHover=function(){return this.canHover}
,isc.A.handleHover=function(){if(this.hover&&this.hover()==false)return;if(this.showHover){var _1=this.getHoverHTML();if(_1!=null&&!isc.isAn.emptyString(_1)){var _2=this.$wc();isc.Hover.show(_1,_2,null,this)}}}
,isc.A.updateHover=function(_1){if(isc.Hover.lastHoverCanvas!=this||!isc.Hover.hoverCanvas.isVisible())return;if(_1==null)_1=this.getHoverHTML();isc.Hover.show(_1,this.$wc(),null,this)}
,isc.A.hoverHidden=function(){}
,isc.A.$wc=function(){return{width:this.hoverWidth,height:this.hoverHeight,align:this.hoverAlign,valign:this.hoverVAlign,baseStyle:this.hoverStyle,opacity:this.hoverOpacity,moveWithMouse:this.hoverMoveWithMouse,wrap:this.hoverWrap}}
,isc.A.getHoverHTML=function(){return this.prompt}
,isc.A.setClassName=function(_1){if(this.logIsInfoEnabled(this.$pj)){this.logInfo("call to deprecated setClassName() property - use setStyleName() instead")}
return this.setStyleName(_1)}
,isc.A.setStyleName=function(_1){this.$tk=null;this.$tp=null;if(_1){this.styleName=_1;this.className=_1}
if(this.getClipHandle())this.getClipHandle().className=this.styleName;if(this.overflow!=isc.Canvas.HIDDEN)this.adjustOverflow("setStyleName")}
,isc.A.getStateName=function(){var _1=this.getClipHandle().className;return(_1!=null?_1:this.styleName)}
,isc.A.handleShowContextMenu=function(_1){if(_1.target==this&&this.useEventParts){var _2=this.getEventPart(_1);if(_2.part){if(this.$wd(_2.part,"showContextMenu",_2.element,_2.ID,_1)==false)return false}}
if(this.showContextMenu)return this.showContextMenu(_1)}
,isc.A.showContextMenu=function(){var _1=this.contextMenu;if(_1){_1.target=this;if(!isc.isA.Canvas(_1)){_1.autoDraw=false;this.contextMenu=_1=isc.Menu.create(_1)}
_1.showContextMenu()}
return(_1==null)}
,isc.A.hideContextMenu=function(){if(this.contextMenu)this.contextMenu.hideContextMenu()}
,isc.A.$kr=function(_1){return this.canSelectText}
,isc.A.handleMouseMove=function(_1,_2){if(_1.target==this&&this.useEventParts){var _3=this.getEventPart(_1),_4=this.$nw;if(_4&&_4.part&&(_4.part!=_3.part||_4.ID!=_3.ID))
{this.$wd(_4.part,isc.EH.MOUSE_OUT,_4.element,_4.ID,_1)}
if(_3.part){var _5=!_4||(_4.ID!=_3.ID),_6=(_5?isc.EH.MOUSE_OVER:isc.EH.MOUSE_MOVE);this.$wd(_3.part,_6,_3.element,_3.ID,_1);if(_5){isc.Hover.setAction(this,this.$we,[_3.element,_3.ID],this.hoverDelay)}}
this.$nw=_3}
if(this.mouseMove)return this.mouseMove(_1,_2)}
,isc.A.$we=function(_1,_2){if(this.$nw)this.$wd(this.$nw.part,"hover",_1,_2)}
,isc.A.handleMouseOut=function(_1,_2){if(_1.target==this&&this.useEventParts){var _3=this.$nw;if(_3&&_3.part){this.$wd(_3.part,isc.EH.MOUSE_OUT,_3.element,_3.ID,_1)}}
if(this.mouseOut)return this.mouseOut(_1,_2)}
,isc.A.handleMouseDown=function(_1,_2){if(_1.target==this&&this.useEventParts)this.firePartEvent(_1,isc.EH.MOUSE_DOWN);if(this.mouseDown)return this.mouseDown(_1,_2)}
,isc.A.handleMouseUp=function(_1,_2){if(_1.target==this&&this.useEventParts)this.firePartEvent(_1,isc.EH.MOUSE_UP);if(this.mouseUp)return this.mouseUp(_1,_2)}
,isc.A.handleClick=function(_1,_2){if(_1.target==this&&this.useEventParts)this.firePartEvent(_1,isc.EH.CLICK);if(this.click)return this.click(_1,_2)}
,isc.A.handleDoubleClick=function(_1,_2){if(_1.target==this&&this.useEventParts)this.firePartEvent(_1,isc.EH.DOUBLE_CLICK);if(this.doubleClick)return this.doubleClick(_1,_2)}
,isc.A.getEventPart=function(_1){if(!_1)_1=isc.EH.lastEvent;var _2=_1.nativeTarget;return this.getElementPart(_2)}
,isc.A.getElementPart=function(_1){var _2,_3;if(_1&&_1.getAttribute)_2=_1.getAttribute(this.$pk);if(_2&&_2!=isc.emptyString){var _4=_1.id;if(_4&&_4!=isc.emptyString){_3=_4.substring(this.getID().length+_2.length+2)}}
return{part:_2,ID:_3,element:_1}}
,isc.A.getPartElement=function(_1){var _2=_1.part,_3=_1.partID,_4=this.getID+"_"+_2;if(_3)_4+=_3;var _5=isc.Element.get(_4);if(_5)return _5;return isc.Element.findAttribute(this.getHandle(),this.$pk,_2)}
,isc.A.firePartEvent=function(_1,_2){if(!this.useEventParts||!_1)return;var _3=this.getEventPart(_1);if(!_3.part)return;if(!_2)_2=_1.eventType;return this.$wd(_3.part,_2,_3.element,_3.ID,_1)}
,isc.A.$wd=function(_1,_2,_3,_4,_5){var _6=this.getPartEventHandler(_1,_2);if(this[_6]){return this[_6](_3,_4,_5)}}
,isc.A.getPartEventHandler=function(_1,_2){if(!isc.Canvas.$np[_1])isc.Canvas.$np[_1]={};if(!isc.Canvas.$np[_1][_2]){var _3=_2.substring(0,1).toUpperCase()+_2.substring(1);isc.Canvas.$np[_1][_2]=_1+_3}
return isc.Canvas.$np[_1][_2]}
,isc.A.getDragType=function(){return this.dragType}
,isc.A.willAcceptDrop=function(){if(this.ns.EH.dragTarget==null)return false;if(this.dropTypes==isc.Canvas.ANYTHING||this.dropTypes==null||isc.is.emptyString(this.dropTypes))
{return true}
var _1=this.ns.EH.dragTarget.getDragType();if(_1==null||isc.is.emptyString(_1))return false;if(isc.isA.String(_1)){return this.dropTypes.contains(_1)}else if(isc.isAn.Array(_1)){for(var i=0,_3=true,_4=_1.length;i<_4&&_3;i++){_3=_3&&(this.dropTypes.contains(_1))}
return _3}
return false}
,isc.A.$mb=function(){if(this._eventMask.visibility==isc.Canvas.HIDDEN)this._eventMask.show()}
,isc.A.$mc=function(){if(this._eventMask.visibility!=isc.Canvas.HIDDEN)this._eventMask.hide()}
,isc.A.getHSnapPosition=function(_1,_2){if(!_2){_2=this.snapHDirection}
if(_2!=isc.Canvas.BEFORE&&_2!=isc.Canvas.AFTER&&_2!=isc.Canvas.NEAREST){return _1}
var _3=Math.floor(_1/ this.snapHGap)*this.snapHGap;var _4=_3+this.snapHGap;var _5=_3+this.snapHGap/ 2;if(_2==isc.Canvas.BEFORE){return _3}else if(_2==isc.Canvas.AFTER){return _4}else{if(_1<=_5)return _3;else return _4}}
,isc.A.getVSnapPosition=function(_1,_2){if(!_2){_2=this.snapVDirection}
if(_2!=isc.Canvas.BEFORE&&_2!=isc.Canvas.AFTER&&_2!=isc.Canvas.NEAREST){return _1}
var _3=Math.floor(_1/ this.snapVGap)*this.snapVGap;var _4=_3+this.snapVGap;var _5=_3+this.snapVGap/ 2;if(_2==isc.Canvas.BEFORE){return _3}else if(_2==isc.Canvas.AFTER){return _4}else{if(_1<=_5)return _3;else return _4}}
,isc.A.shouldSnapOnDrop=function(_1){return true}
,isc.A.noSnapDragOffset=function(_1){return false}
,isc.A.setAppImgDir=function(_1){if(_1)this.appImgDir=_1}
,isc.A.getAppImgDir=function(){return isc.Page.getImgURL("",this.appImgDir)}
,isc.A.setSkinImgDir=function(_1){if(_1)this.skinImgDir=_1}
,isc.A.getSkinImgDir=function(){return isc.Page.getSkinImgDir(this.skinImgDir)}
,isc.A.getImgURL=function(_1,_2){return isc.Canvas.getImgURL(_1,_2,this)}
,isc.A.imgHTML=function(_1,_2,_3,_4,_5,_6,_7){return isc.Canvas.imgHTML(_1,_2,_3,_4,_5,_6,_7,this)}
,isc.A.$wf=function(_1,_2,_3,_4,_5,_6,_7){return isc.Canvas.imgHTML(_1,_2,_3,_4,_5,_6,_7,this,true)}
,isc.A.getImage=function(_1){if(isc.isA.String(_1))_1=this.getCanvasName()+_1;var _2=this.getHandle();if(_2){if(isc.Page.isXHTML()){return document.getElementById(_1)}else{if(_2.document){return _2.document.images[_1]}else{return document.images[_1]}}}
return null}
,isc.A.setImage=function(_1,_2,_3){var _4=this.getImage(_1);if(_4==null){this.logWarn("setImage: image '"+_1+"' couldn't be found");return}
isc.Canvas.$wg(_4,_2,_3,this)}
,isc.A.linkHTML=function(_1,_2,_3,_4,_5,_6,_7){return isc.Canvas.linkHTML(_1,_2,_3,_4,_5,_6,_7)}
,isc.A.inWhichPosition=function(_1,_2,_3){if(!_1||_2<0)return-1;if(_3==isc.Page.RTL){var _4=_1.sum();for(var c=0,_6=_1.length;c<_6;c++){if(_2>=_4-_1[c])return c;_4-=_1[c]}}else{for(var c=0,_6=_1.length;c<_6;c++){if(_2<=_1[c]){return c}
_2-=_1[c]}}
return-2}
,isc.A._canvasList=function(_1){var _2=isc.Canvas._canvasList;if(_1)_2.add(this);else _2.remove(this);if(this.$ih){isc.Canvas._iscInternalCount+=(_1?1:-1)}else{isc.Log.updateStats(this.$f8)}}
,isc.A.$p6=function(_1){if(!this.$ih){isc.Canvas._stats[_1]++;isc.Log.updateStats(_1)}}
,isc.A.$wh=function(_1){var _2=this.$sc;if(!_2)return null;if(_1)return _2[_1]}
,isc.A.$wi=function(_1,_2,_3){if(_1==null||_2==null)return;if(!this.$sc)this.$sc={};if(!this.$sc[_2])this.$sc[_2]=[];this.$sc[_2].add(_1);if(_3!=null)_1.$55s=_3
delete this.$s7;delete this.$s8}
,isc.A.$wj=function(_1,_2,_3){if(_1==null||_2==null)return;if(!this.$sc||!this.$sc[_2])return;this.$sc[_2].remove(_1);delete _1.$55s;delete this.$s7;delete this.$s8}
,isc.A.$ps=function(){this.$uc={};for(var i=0;i<this.clippedCorners.length;i++){this.$wk(this.clippedCorners[i])}}
,isc.A.$wk=function(_1){var _2=this.$uc,_3=this.left,_4=this.top,_5=this.cornerClipWidth||this.cornerClipSize,_6=this.cornerClipHeight||this.cornerClipSize;if(_1=="TR"||_1=="BR"){_3=_3+this.getWidth()-_5}
if(_1=="BL"||_1=="BR"){_4=_4+this.getHeight()-_6}
if(this.noCornerClipImages&&!(isc.Browser.isIE&&isc.Browser.minorVersion>=5.5)){this.noCornerClipImages=false}
var _7=_2[_1]=isc.ClassFactory.newInstance({_constructor:(this.noCornerClipImages?"Canvas":"Img"),left:_3,top:_4,width:_5,height:_6,eventProxy:this,src:(this.noCornerClipImages?null:this.$wl(_1)),contents:(this.noCornerClipImages?this.$wm(_5,_6,_1):null)},this.$nv);this.addPeer(_7);_7.moveAbove(this)}
,isc.A.$qg=function(){if(!this.noCornerClipImages)return;for(var _1 in this.$uc){var _2=this.$uc[_1],_3=_2.getHandle().firstChild,_4=_3.style;_3.filters[0].apply();_4.visibility="hidden";_3.filters[0].percent=71}}
,isc.A.$wl=function(_1){return isc.Img.urlForState(this.cornerClipImage,null,null,this.cornerClipColor,_1)}
,isc.A.$wm=function(_1,_2,_3){var _4=isc.SB.create();_4.append("<DIV STYLE='width:",2*_1,"px;height:",2*_2,"px;filter:progid:DXImageTransform.Microsoft.iris(irisStyle=circle,motion=out);");if(_3.contains("R"))_4.append("margin-left:",-_1,"px;");if(_3.contains("B"))_4.append("margin-top:",-_2,"px;");_4.append("'><DIV STYLE='overflow:hidden;width:",_1,"px;height:",_2,"px;background-color:",this.cornerClipColor,";");if(_3.contains("R"))_4.append("margin-left:",_1,"px;");if(_3.contains("B"))_4.append("margin-top:",_2,"px;");_4.append("'></DIV></DIV>");return _4.toString()}
,isc.A.$sb=function(){return this.showEdges&&!this.edgesAsChild}
,isc.A.$pq=function(){if(!this.showEdges||isc.isA.EdgedCanvas(this)||this.$l0!=null){return this.$l0}
var _1=this.$l0=this.$wn();if(this.edgesAsChild){_1.resizeTo("100%","100%");_1.sendToBack();this.addChild(_1)}else{this.addPeer(_1)}
return _1}
,isc.A.setEdgeOpacity=function(_1){var _2=this.edgeOpacity=_1;if(this.opacity>0&&this.opacity<100){_2=this.opacity*(this.edgeOpacity/ 100)}
this.$l0.setOpacity(_2)}
,isc.A.$wn=function(){var _1=this.$pl,_2=isc.EdgedCanvas.createRaw();_2.autoDraw=false;_2._generated=true;_2.dragTarget=this;_2.visibility=this.visibility;_2.opacity=this.opacity;if(this.edgeOpacity!=null){_2.opacity=this.edgeOpacity;_2.$nt=false}
_2.smoothFade=this.smoothFade;if(this.edgeOverflow!=null)_2.overflow=this.edgeOverflow;_2.eventProxy=this;for(var i=0;i<_1.length;i++){var _4=_1[i];if(this[_4]!=null)_2[_4]=this[_4]}
if(this.edgeBackgroundColor)_2.backgroundColor=this.edgeBackgroundColor;if(this.edgeCenterBackgroundColor){_2.centerBackgroundColor=this.edgeCenterBackgroundColor}
if(this.edgeShowCenter!=null)_2.showCenter=this.edgeShowCenter;if(!this.edgesAsChild)_2.zIndex=this.getZIndex(true)-1;_2.completeCreation();return _2}
,isc.A.setShowShadow=function(_1){this.showShadow=_1;if(_1){if(!this._shadow)this.$pr();else if(this.isDrawn())this._shadow.show()}else{if(this._shadow)this._shadow.hide()}}
,isc.A.$pr=function(){var _1=this._shadow=this.createAutoChild("shadow",{visibility:this.visibility,zIndex:this.getZIndex(true)-3},isc.DropShadow);this.updateShadow(true);this.addPeer(_1);_1.moveBelow(this)}
,isc.A.updateShadow=function(_1){if(!_1)this.setShowShadow(this.showShadow);var _2=this._shadow;if(!_2)return;_2.offset=this.shadowOffset;_2.offsetX=this.shadowOffsetX;_2.offsetY=this.shadowOffsetY;_2.softness=this.shadowSoftness;if(this.shadowImage)_2.setEdgeImage(this.shadowImage);_2.setDepth(this.shadowDepth);if(this.dragResizeFromShadow&&this.canDragResize){_2.canDragResize=this.canDragResize;_2.resizeFrom=this.resizeFrom;_2.dragTarget=this}}
,isc.A.propertyChanged=function(_1,_2){if(isc.contains(_1,this.$pm)&&this.updateShadow)this.updateShadow()}
,isc.A.setIsGroup=function(_1){if(_1==this.isGroup)return;var _2=this.shouldShowGroupLabel()&&this.isDrawn();if(_2)this.clear();if(_1){this.$55t=this.border;this.setBorder(this.groupBorderCSS);if(this.shouldShowGroupLabel())this.$55u()}else{this.setBorder(this.$55t||"");if(this.shouldShowGroupLabel())this.$55v()}
this.isGroup=_1;if(_2)this.draw()}
,isc.A.shouldShowGroupLabel=function(){return this.showGroupLabel}
,isc.A.makeGroupLabel=function(){if(!this.groupLabel){var _1={autoDraw:false,$jo:false,$ns:true,backgroundColor:this.getGroupLabelBackgroundColor(),eventProxy:this}
if(this.groupTitle!=null)_1.contents=this.groupTitle;this.groupLabel=this.createAutoChild("groupLabel",_1)}else{if(this.groupTitle!=null)this.groupLabel.setContents(this.groupTitle);this.groupLabel.setBackgroundColor(this.getGroupLabelBackgroundColor())}}
,isc.A.getGroupLabelBackgroundColor=function(){if(this.groupLabelBackgroundColor)return this.groupLabelBackgroundColor;if(this.backgroundColor!=null)return this.backgroundColor;return"white"}
,isc.A.$55u=function(){this.makeGroupLabel();var _1=this.groupLabel;var _2;if(_1.overflow==isc.Canvas.VISIBLE){if(_1.parentElement!=null)_1.deparent();_1.setTop(-1000);_1.draw();_2=_1.getVisibleHeight()}else{_2=_1.getVisibleHeight()}
var _3=Math.round(_2/ 2);this.$wi(_1,isc.Canvas.TOP,_3);var _4=_2-_3;if(this.padding)_4+=this.padding;this.setTopPadding(_4);_1.setLeft(this.getLeft()+this.groupLabelPadding);_1.setTop(this.getTop());if(_1.masterElement!=this)this.addPeer(_1);if(this.isDrawn()){if(!_1.isDrawn())_1.draw()}
this.getTopMargin();_1.moveAbove(this);if(_1.isDrawn()&&!this.isDrawn())_1.clear()}
,isc.A.$55v=function(){if(!this.groupLabel)return;var _1=this.groupLabel;this.$wj(_1,isc.Canvas.TOP);this.setTopPadding(null);_1.clear();_1.depeer()}
,isc.A.setGroupTitle=function(_1){this.groupTitle=_1;if(this.groupLabel){this.groupLabel.setContents(this.groupTitle)}else{this.$55u()}}
);isc.B._maxIndex=isc.C+510;isc.A=isc.Canvas;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$hm="[SKIN]";isc.A.printOmitControls=["Button","StretchImgButton","ImgButton","MenuButton","Toolbar","ToolStrip","ButtonItem","ToolbarItem"];isc.A.printIncludeControls=["Label"];isc.A.$ws=0;isc.A.$wt="ID='";isc.A.$ob="'";isc.A.$wu="absmiddle";isc.A.$wv=[,,," eventpart='valueicon' style='vertical-align:middle;margin-left:",,"px;margin-right:",,"px;'"];isc.A.$ww={};isc.A.$wx={png:true,PNG:true,Png:true};isc.A.$wy=["<a",," href='",,"' target='",,"'",,,,">",,"</a>"];isc.A.$wz="[SKINIMG]/blank.gif";isc.A.$w0="0";isc.A.$w1="clearRedrawQueue";isc.A.$65j=[];isc.A.$65k=0;isc.A.$65l="clearDestroyQueue";isc.A.$tw=[];isc.B.push(isc.A.stripScriptTags=function(_1){return _1.replace(/<script([^>]*)?>(.|\n|\r)*?<\/script>/ig,isc.emptyString)}
,isc.A.stripLinkTags=function(_1){return _1.replace(/<link([^>]*)?>/ig,isc.emptyString)}
,isc.A.getById=function(_1){var _2=window[_1]||null;return _2?(isc.isA.Canvas(_2)?_2:null):null}
,isc.A.getNextZIndex=function(){return(isc.Canvas.$ng+=18)}
,isc.A.getFocusProxyString=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16){if(this.$w8==null){this.$w9="' ONFOCUS=";this.$xa="' ";this.$xb=" ONBLUR=";this.$w8=["<div"," id='",null,"$xc'"+" style='overflow:hidden;width:0px;height:0px;position:",,";left:",null,"px;top:",null,"px;'>",(isc.Browser.isSafari?"<textarea":(isc.Browser.isMoz&&isc.Browser.geckoVersion>=20051111?"<div":"<button onclick='event.cancelBubble=true;return false;'"))," id='",null,"__focusProxy'"," style='VISIBILITY:",null,"left:1px;top:1px;"+"width:",(isc.Browser.isSafari?"1":null),"px;height:",(isc.Browser.isSafari?"1":null),"px;",null,this.$w9,null,this.$xb,null,null,null,null," tabindex='",null,null,"' focusProxy='true' handleNativeEvents='",null,"'>",(isc.Browser.isSafari?"</textarea>":(isc.Browser.isMoz&&isc.Browser.geckoVersion>=20051111?"</div>":"</button>")),"</div>"]}
var _17=this.$w8;_17[2]=_1;_17[4]=(_2?"absolute":"inline");_17[6]=_3;_17[8]=_4;_17[12]=_1;_17[15]=(_7?"visible;":"hidden;");_17[17]=_5;_17[19]=_6;if(isc.Browser.isMoz){if(!_8||_9==-1)_17[21]="-moz-user-focus:ignore;";else _17[21]="-moz-user-focus:normal;"}
if(_12&&_12!=isc.emptyString){_17[22]=this.$w9;_17[23]=_12}else{_17[22]=this.$xa;_17[23]=null}
if(_13&&_13!=isc.emptyString){_17[24]=this.$xb;_17[25]=_13}else{_17[24]=null;_17[25]=null}
_17[26]=(_14!=null?" onkeydown="+_14:null);_17[27]=(_15!=null?" onkeypress="+_15:null);_17[28]=(_16!=null?" onkeyup="+_16:null);_17[30]=(_8?_9:-1);_17[31]=(_8&&_10?"' accesskey='"+_10:null);_17[33]=(_11?true:false);return _17.join(isc.$ad)}
,isc.A.clearCSSCaches=function(){isc.Element.$50f();var _1=isc.Canvas._canvasList;for(var i=0;i<_1.length;i++){var _3=_1[i];if(_3==null||_3.destroyed)continue;_3.$s8=_3.$s7=_3.$tk=_3.$tp=null}}
,isc.A.setAppImgDir=function(_1){this.getPrototype().appImgDir=_1}
,isc.A.getAppImgDir=function(){return isc.Page.getImgURL(isc.emptyString,this.getPrototype().appImgDir)}
,isc.A.setSkinImgDir=function(_1){this.getPrototype().skinImgDir=_1}
,isc.A.getSkinImgDir=function(){return isc.Page.getSkinImgDir(this.getPrototype().skinImgDir)}
,isc.A.getImgURL=function(_1,_2,_3){if(_1==null||isc.isAn.emptyString(_1))return isc.$ad;_3=_3||this.getPrototype();if(_1.imgDir!=null&&_2==null)_2=_1.imgDir;if(_1.src!=null)_1=_1.src;if(_2==null){_2=(isc.startsWith(_1,this.$hm)?_3.skinImgDir:_3.appImgDir)}
var _4=isc.Page.getImgURL(_1,_2);return _4}
,isc.A.getPrintHTML=function(_1,_2,_3,_4,_5,_6){if(!isc.isAn.Array(_1))_1=[_1];if(_5==null)_5=[];if(_6==null)_6=0;var _7,_8={target:this,methodName:"gotComponentPrintHTML",components:_1,printProperties:_2,callback:_3,HTML:_5,index:_6,separator:_4};for(;_6<_1.length;_6++){_8.index+=1;var _9=_1[_6];var _10;if(isc.isA.String(_9))_10=_9;else _10=_9.getPrintHTML(_2,_8);if(_10!=null){_5.add(_10)}else{_7=true;break}}
if(_7){if(!_3){this.logWarn("getPrintHTML(): HTML generated asynchronously, but no callback passed in")}
return null}
if(_3){this.fireCallback(_3,"HTML,callback",[_5.join(_4||isc.emptyString),_3])}
return _5.join(_4||isc.emptyString)}
,isc.A.gotComponentPrintHTML=function(_1,_2){_2.HTML.add(_1);this.getPrintHTML(_2.components,_2.printProperties,_2.callback,_2.separator,_2.HTML,_2.index)}
,isc.A.getImgHTML=function(_1,_2,_3,_4,_5,_6,_7,_8,_9){return this.imgHTML(_1,_2,_3,_4,_5,_6,_7,_8,_9)}
,isc.A.$wf=function(_1,_2,_3,_4,_5,_6,_7){return isc.Canvas.imgHTML(_1,_2,_3,_4,_5,_6,_7,null,true)}
,isc.A.imgHTML=function(_1,_2,_3,_4,_5,_6,_7,_8,_9){var _10;if(isc.isAn.Object(_1)){if(_1.width!=null)_2=_1.width;if(_1.height!=null)_3=_1.height;if(_1.name!=null)_4=_1.name;if(_1.extraStuff!=null)_5=_1.extraStuff;if(_1.imgDir!=null)_6=_1.imgDir;if(_1.align!=null)_10=_1.align;if(_1.activeAreaHTML!=null)_7=_1.activeAreaHTML;_1=_1.src}
if(_1==null||isc.isAn.emptyString(_1)){return(_9?[isc.$ad]:isc.$ad)}
var _11=this.$xd;if(!_11){this.$xe="<img src='";this.$xf="' width='";this.$xg="' height='";this.$xh="' align='";this.$xi=(isc.Page.isXHTML()?"' id='":"' name='");this.$xj="' ";this.$xk=isc.Browser.isOpera?"middle":"TEXTTOP";this.$xl=" border='0' suppress='TRUE'/>";this.$xd=_11=[this.$xe];if(isc.Browser.isIE8Strict){this.$xm="' style='filter:\"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=";this.$xn=",sizingMethod=scale)\";"}else{this.$xm="' style='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"";this.$xn="\",sizingMethod=\"scale\");"}}
if(_10==null)_10=this.$xk;if(!this.$hu)this.$hu=this.getImgURL("[SKIN]/blank.gif");if(isc.Browser.isSafari&&(_2>32000||_3>32000)){this.logWarn("Attempting to draw an image of size "+_2+" x "+_3+".  Images larger than 32000 pixels in either direction are not reliably "+" rendered in this browser.")}
var _12=this.getImgURL(_1,_6,_8);if(_9)_11=[this.$xe];if(isc.Page.isXHTML())_12=isc.makeXMLSafe(_12);if(!this.$xo(_8)||!this.$xp(_1)){_11[1]=_12}else{_11[1]=this.$hu;_11[3]=this.$xm;_11[4]=_12;_11[5]=this.$xn;if(_2==null)_2=16;if(_3==null)_3=16}
if(_2){_11[6]=this.$xf;_11[7]=_2}
if(_3){_11[8]=this.$xg;_11[9]=_3}
_11[10]=this.$xh;_11[11]=_10;if(_4){_11[12]=this.$xi;if(_8)_11[13]=_8.getCanvasName();_11[14]=_4}
var _13;if(_7){_13="ISC_IMGMAP_"+this.$ws++;_11[15]="' usemap=#"+_13}
_11[16]=this.$xj;if(_5){_11[17]=_5}
_11[18]=this.$xl;if(_7){_11[19]="<map name='"+_13+"'>"+_7+"</map>"}
if(_9)return _11;var _14=_11.join(isc.$ad);_11.length=3;return _14}
,isc.A.$xq=function(_1,_2,_3,_4,_5,_6,_7,_8){var _9=this.$wv;if(_7!=null){_9[0]=this.$wt;_9[1]=_7;_9[2]=this.$ob}else{_9[0]=_9[1]=_9[2]=null}
_9[4]=_5||0;_9[6]=_6||0;var _1=isc.Canvas.getImgURL(_1,_2,_8),_10=_9.join(isc.emptyString),_11=this.$ww;_11.src=_1;_11.width=_3
_11.height=_4
if(_4!=null&&_4<16&&(isc.Browser.isMoz||isc.Browser.isSafari)){_11.align=null}else{_11.align=this.$wu}
_11.imgDir=_2;_11.extraStuff=_10;return isc.Canvas.imgHTML(_11)}
,isc.A.$xo=function(_1){var _2=isc.Browser.isIE&&isc.Browser.minorVersion>=5.5&&isc.Browser.isWin&&this.neverUsePNGWorkaround!=true;if(_2&&_1&&_1.$xo&&!_1.$xo()){_2=false}
return _2}
,isc.A.$xp=function(_1){return(_1&&this.$wx[_1.substring(_1.lastIndexOf(isc.dot)+1)])}
,isc.A.$wg=function(_1,_2,_3,_4){var _5=this.getImgURL(_2,_3,_4);if(!this.$xo(_4)){_1.src=_5}else{var _6=_1.src,_7=this.$xp(_6),_8=this.$xp(_2);if(_8){_1.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+_5+"\",sizingMethod=\"scale\")";if(!_7)_1.src=this.$hu}else{if(_7)_1.style.filter="";_1.src=_5}}}
,isc.A.linkHTML=function(_1,_2,_3,_4,_5,_6,_7){_1=_1.replaceAll("'","\\'");if(_2==null)_2=_1;_3=_3?_3.replaceAll("'","\\'"):"_blank";var _8=this.$wy;if(_4!=null)_8[1]=" ID='"+_4+"'";else _8[1]=null;_8[3]=_1;_8[5]=_3;if(_5!=null)_8[7]=" tabIndex="+_5;else _8[7]=null;if(_6!=null)_8[8]=" accessKey='"+_6+"'";else _8[8]=null;if(_7)_8[9]=" "+_7;_8[11]=_2;return _8.join(isc.emptyString)}
,isc.A.blankImgHTML=function(_1,_2){var _3=this.$ht;if(!_3){_3=this.$ht=this.$wf(this.$wz,1,1)}
_3[7]=_1||this.$w0;_3[9]=_2||this.$w0;return _3.join(isc.$ad)}
,isc.A.spacerHTML=function(_1,_2,_3){if(_1==0&&_2==0)return isc.$ad;if(isc.Browser.isMoz||isc.Browser.isSafari||isc.Browser.isOpera||isc.Browser.isStrict||(_2<3&&isc.Browser.isIE&&(isc.Browser.minorVersion==5.5||isc.Browser.isMac)))
{if((isc.Browser.isSafari&&(_2>32000||_1>32000))||(isc.Browser.isIE&&isc.Browser.isStrict&&(_2>16000||_1>16000))){var _4=isc.SB.create(),_5=isc.Browser.isMoz?1048000:isc.Browser.isIE?16000:32000,_6=parseInt(_2/ _5),_7=parseInt(_1/ _5);_4.append("<TABLE CELLPADDING=0 CELLSPACING=0 BORDER=0 MARGIN=0>");for(var i=0;i<=_6;i++){_4.append("<TR>");for(var j=0;j<=_7;j++){_4.append("<TD>");var _10=((i==j)||(i>_7&&j==0)||(j>_6&&i==0));if(_10){var _11=(i<_6?_5:_2-(i*_5)),_12=(j<_7?_5:_1-(j*_5));_4.append(this.blankImgHTML(_12,_11))}
_4.append("</TD>")}
_4.append("</TR>")}
_4.append("</TABLE>");return _4.toString()}
return this.blankImgHTML(_1,_2)}
var _13=this.$xs;if(_13==null){_13=this.$xs=["<SPAN STYLE='WIDTH:",null,"px;HEIGHT:",null,"px;overflow:hidden;'>",null,"</SPAN>"]}
_13[1]=_1;_13[3]=_2;_13[5]=_3?_3:isc.nbsp;return _13.join(isc.$ad)}
,isc.A.hiliteCharacter=function(_1,_2,_3,_4){if(!isc.isA.String(_1)||!isc.isA.String(_2)||_2.length!=1)
return _1;if(_2==" ")return _1;if(_3==null||_4==null){_3="<span style='text-decoration:underline;'>";_4="</span>"}
var _5=_1.indexOf(_2.toUpperCase());if(_5==-1)_5=_1.indexOf(_2.toLowerCase());if(_5!=-1){var _6=_1.slice(0,_5),_7=_1.slice(_5,_5+1),_8=_1.slice(_5+1);_7=_3+_7+_4;_1=_6.concat(_7,_8)}
return _1}
,isc.A.scheduleRedraw=function(_1){if(_1&&_1.priorityRedraw){this.$nm.addAt(_1,0)}else{this.$nm.add(_1)}
if(!this.$xu){this.$xu=isc.Timer.setTimeout({target:isc.Canvas,methodName:this.$w1},this._redrawQueueDelay)}}
,isc.A.clearRedrawQueue=function(){isc.EH.$h1("RDQ");var _1=isc.timeStamp();this.$xu=null;var _2=this.$nm;this.$nm=[];if(this.logIsDebugEnabled()){var _3="";for(var i=0;i<_2.length;i++){_3+=_2[i];if(i!=_2.length-1)_3+=", "}
this.logDebug("clearRedrawQueue: "+_3,"drawing")}
var _5,_6;for(var i=0;i<_2.length;i++){_5=_2[i];if(_5&&_5.priorityRedraw){_5.priorityRedraw=false;if(_6==null)_6=[];_6.add(_5);_2[i]=null}}
if(_6!=null){this.logInfo("Priority redraw: postponing non-priority items","drawing");this.$nm=_2;this.scheduleRedraw(_2[0]);_2=_6}
var _7=0,_5;for(var i=0;i<_2.length;i++){_5=_2[i];if(_5==null||_5.destroyed)continue;if(_5&&_5.isDirty()){_5.redraw(false);_7++}}
if(this.logIsDebugEnabled("redraws")){this.logDebug("clearRedrawQueue: "+_7+" redraws ("+_2.length+" items), "+(isc.timeStamp()-_1)+"ms","redraws")}
isc.EH.$h2()}
,isc.A.$uv=function(_1){if(!isc.Canvas.$xv)isc.Canvas.$xv=[];isc.Canvas.$xv.add(_1);if(!isc.Canvas.$xw){isc.Canvas.$xw=isc.Timer.setTimeout({target:isc.Canvas,methodName:"$xx"},isc.Canvas.$nn)}}
,isc.A.$xx=function(){var _1=isc.Canvas.$xv;isc.Canvas.$xv=[];isc.Canvas.$xw=null;if(!_1||_1.length==0)return;for(var i=0;i<_1.length;i++){var _3=window[_1[i]];if(isc.isA.Canvas(_3))_3.adjustOverflow("delayed")}}
,isc.A.scheduleDestroy=function(_1){if(!_1||_1.destroyed||_1.destroying||!_1.destroy)return;this.$65j.add(_1);if(!this.$65m){this.$65m=isc.Timer.setTimeout({target:isc.Canvas,methodName:this.$65l},this.$65k)}}
,isc.A.clearDestroyQueue=function(){isc.EH.$h1("DSQ");var _1=isc.timeStamp();this.$65m=null;var _2=this.$65j;this.$65j=[];if(this.logIsDebugEnabled("destroys")){var _3="";for(var i=0;i<_2.length;i++){_3+=_2[i];if(i!=_2.length-1)_3+=", "}
this.logDebug("clearDestroyQueue: "+_3,"destroys")}
var _5=0,_6;for(var i=0;i<_2.length;i++){_6=_2[i];if(_6==null||_6.destroyed||_6.destroying)continue;_6.destroy(false);_5++}
if(this.logIsDebugEnabled("destroys")){this.logDebug("clearDestroyQueue: "+_5+" direct destroy() calls ("+_2.length+" items), "+(isc.timeStamp()-_1)+"ms","destroys")}
isc.EH.$h2()}
,isc.A.outsetRect=function(_1,_2){if(!_2)return _1;if(isc.isAn.Array(_1)){_1[0]-=_2;_1[1]-=_2;_1[2]+=2*_2;_1[3]+=2*_2;return _1}
_1.left-=_2;_1.top-=_2;_1.width+=2*_2;_1.height+=2*_2;return _1}
,isc.A.rectsIntersect=function(_1,_2){var _3=_1[0],_4=_1[1],_5=_1[2],_6=_1[3],_7=_2[0],_8=_2[1],_9=_2[2],_10=_2[3];return!((_3>_7+_9)||(_3+_5<_7))&&!((_4>_8+_10)||(_4+_6<_8))}
,isc.A.$vs=function(){if(!this.$xy){this.ns.Element.createAbsoluteElement("<DIV ID='$xz'"+" style='position:absolute;left:0px;top:-100px'>&nbsp;</DIV>");this.$xy=document.all["$xz"]}else{this.$xy.innerHTML="&nbsp;"}}
,isc.A.$q8=function(_1){if(!isc.isA.Canvas(_1)||_1.$x0!=null)return;this.$tw.add(_1);_1.$x0=this.$tw.length-1}
,isc.A.$ro=function(_1){if(!isc.isA.Canvas(_1)||_1.$x0==null)return;this.$tw[_1.$x0]=null;_1.$x0=null}
,isc.A.showClickMask=function(_1,_2,_3){return this.ns.EH.showClickMask(_1,_2,_3)}
,isc.A.hideClickMask=function(_1){this.ns.EH.hideClickMask(_1)}
,isc.A.$t7=function(_1,_2,_3,_4,_5,_6){if(isc.isAn.Array(_3)){_3={left:_3[0],top:_3[1],width:_3[2],height:_3[3]}}else if(_3==null){_3={left:this.ns.EH.getX(),top:this.ns.EH.getY()}}
if(_3.width==null)_3.width=0;if(_3.height==null)_3.height=0;if(_4==null)_4="bottom";if(_5==null)_5=true;var _7=(_4=="bottom"||_4=="top");if(_7){if(_6=="inside-right")_6="right";if(_6!="right"&&_6!="outside-right"&&_6!="outside-left")_6="left"}else{if(_6=="inside-bottom")_6="bottom";if(_6!="bottom"&&_6!="outside-bottom"&&_6!="outside-top")_6="top"}
var _8=_3.left;if(_7){if(_6=="right")_8+=(_3.width-_1);else if(_6=="outside-right")_8+=_3.width;else if(_6=="outside-left")_8-=_1}else{if(_4=="left")_8-=_1;else _8+=_3.width}
var _9=_3.top;if(_7){if(_4=="top")_9-=_2;else _9+=_3.height}else{if(_6=="bottom")_9+=(_3.height-_2);else if(_6=="outside-bottom")_9+=_3.height;else if(_6=="outside-top")_9-=_2}
var _10=isc.Page.getWidth(),_11=isc.Page.getHeight(),_12=isc.Page.getScrollLeft(),_13=isc.Page.getScrollTop();var _14=_12-_8,_15=_8+_1-(_10+_12),_16=_13-_9,_17=_9+_2-(_11+_13);;if(_14<=0&&_15<=0&&_16<=0&&_17<=0){return[_8,_9]}
if(_14>0){if(_4=="left"&&!_5){if(_3.left+_3.width<_12){_8=_12}else{_8=_3.left+_3.width}}else{_8=_12}}else if(_15>0){if(_4=="right"&&!_5){if((_3.left-_1)>=_12){if(_3.left>(_12+_10))
_8=(_12+_10)-_1;else _8=_3.left-_1}}else{if(_10<_1){_8=_12}else{_8=_12+_10-_1}}}
if(_16>0){if(_4=="top"&&!_5){if(_3.top+_3.height<_13){_9=_13}else{_9=_3.top+_3.height}}else{_9=_13}}else if(_17>0){if(_4=="bottom"&&!_5){if((_3.top-_2)>=_13){if(_3.top>(_13+_11))
_9=(_13+_11)-_2;else _9=_3.top-_2}}else{if(_11<_2){_9=_13}else{_9=_13+_11-_2}}}
return[_8,_9]}
,isc.A.$iy=function(){if(isc.Browser.isIE)this.$xt();var _1=isc.Log.logViewer;if(_1&&_1.logWindowLoaded()){_1._logWindow.openerUnloading();_1._logWindow=null}}
,isc.A.$xt=function(){var _1=this._canvasList;for(var i=0;i<_1.length;i++){var _3=_1[i];if(_3){if(_3.$q3){_3.$q3.eventProxy=null;_3.$q3=null}}}
return true}
);isc.B._maxIndex=isc.C+40;isc.Canvas.registerStringMethods({resized:"",showIf:"canvas",childRemoved:"child,name",peerRemoved:"peer,name",deparented:"oldParent,name",depeered:"oldMaster,name",focusChanged:"hasFocus",scrolled:null,hover:""});isc.Canvas.$yx=function(){var _1=isc.EH,_2={};for(var _3 in _1.eventTypes){this.registerStringMethods(_1.eventTypes[_3],_1.$i3);var _4=_1.eventTypes[_3];if(this.getInstanceProperty(_4)==null){_2[_4]=isc.Class.NO_OP}}
this.addMethods(_2)}
isc.Canvas.$yx();isc.defineClass("BackMask","Canvas");isc.A=isc.BackMask.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.autoDraw=false;isc.A.$lo=true;isc.A._generated=true;isc.A.useClipDiv=false;isc.A.hideUsingDisplayNone=isc.Browser.isMoz;isc.A.overflow=isc.Canvas.HIDDEN;isc.A.contents="<iframe width='100%' height='100%' border='0' frameborder='0' src=\""+isc.Page.getBlankFrameURL()+"\" marginwidth='0' marginheight='0' scrolling='no' tabIndex='-1' tabStop='false'></iframe>";isc.A.$ns=false;isc.A.$jo=false;isc.A.$jp=false;isc.A.$nu=false;isc.B.push(isc.A.masterMoved=function(){this.masterElement.$qi()}
,isc.A.masterResized=function(){this.masterElement.$qi()}
,isc.A.draw=function(_1,_2,_3){if(this.suppressed)return this;if(!this.readyToDraw())return this;this.invokeSuper(isc.BackMask,this.$ny,_1,_2,_3);if(this.masterElement.overflow==isc.Canvas.VISIBLE)this.masterElement.$qi();return this}
,isc.A.show=function(){if(!this.suppressed)this.invokeSuper(isc.BackMask,"show")}
);isc.B._maxIndex=isc.C+4;isc.defineClass("ScreenSpan","Canvas");isc.A=isc.ScreenSpan.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A._generated=true;isc.A.redrawOnResize=false;isc.A.overflow="hidden";isc.B.push(isc.A.getInnerHTML=function(){if(!this.$yy){this.$yy=isc.Browser.isIE&&isc.Browser.version>6?isc.Canvas.blankImgHTML(1600,1200):isc.Canvas.spacerHTML(1600,1200)}
return this.$yy}
,isc.A.hide=function(_1,_2,_3,_4){this.resizeTo(1,1);this.moveTo(null,-this.getHeight());return this.invokeSuper(isc.ScreenSpan,"hide",_1,_2,_3,_4)}
,isc.A.show=function(_1,_2,_3,_4){this.fitToScreen();isc.Page.setEvent("resize",this,isc.Page.FIRE_ONCE,"pageResized");return this.invokeSuper(isc.ScreenSpan,"show",_1,_2,_3,_4)}
,isc.A.pageResized=function(){if(!this.isVisible())return;this.resizeTo(isc.Page.getWidth(),isc.Page.getHeight());this.fitToScreen();isc.Page.setEvent("resize",this,isc.Page.FIRE_ONCE,"pageResized")}
,isc.A.fitToScreen=function(){var _1=Math.max(isc.Page.getWidth(),isc.Page.getScrollWidth()),_2=Math.max(isc.Page.getHeight(),isc.Page.getScrollHeight());this.resizeTo(_1,_2);this.moveTo(0,0)}
);isc.B._maxIndex=isc.C+5;isc.$yz={getForm:function(_1){if(_1&&typeof _1=="object")return _1;var _2;if(_1!=null&&isc.Browser.isDOM){_2=document.getElementById(_1)}
if(_2!=null)return _2;if(_1==null)_1=0;if(_2==null)return document.forms[_1];return _2},getFormElementValue:function(_1,_2){var _3=this.getFormElement(_1,_2);if(!_3)return;switch(_3.type){case"radio":return(_3.checked?_3.value:null)
case"checkbox":return _3.checked;case"select-one":if(!_3.options||_3.options.length==0)return null;var _4=_3.options[_3.selectedIndex];return _4.value;case"select-multiple":var _5=[];for(var i=0,_7=_3.options.length;i<_7;i++){var _4=_3.options[i];if(_4.selected)
_5.add(_4.value)}
return _5;case"button":case"reset":case"submit":return null;default:return _3.value}},getFormValues:function(_1){var _2=this.getForm(_1);if(!_2)return null;var _3={};if(!_2.elements){this.logWarn("Form '"+_1+"' contains no elements - returning empty map for data.");return{}}
for(var i=0;i<_2.elements.length;i++){var _5=_2.elements[i];if(_5.name!=null){var _6=this.getFormElementValue(_2,_2.elements[i]);if(_6!=null)_3[_5.name]=_6}}
return _3},getFormElement:function(_1,_2){if(typeof _2=="object")return _2;var _3=this.getForm(_1);if(_3)return _3.elements[_2];return null}};isc.Canvas.addClassMethods(isc.$yz)
isc.Canvas.addMethods(isc.$yz)
isc.setAutoDraw=function(_1){if(_1==null)_1=true;isc.Canvas.addProperties({autoDraw:_1})};isc.defineClass("PrintCanvas","Canvas");isc.A=isc.PrintCanvas.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.redrawOnResize=false;isc.A.overflow="hidden";isc.A.printFrameURL="[HELPERS]printFrame.html";isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments)}
,isc.A.getInnerHTML=function(){return"<iframe height='100%' width='100%' scrolling='auto' id='"+this.getIFrameID()+"' frameborder='0' src=\""+this.getPrintFrameURL(this.title)+"\"></iframe>"}
,isc.A.getIFrameID=function(){return this.getID()+"$55y"}
,isc.A.getPrintFrameURL=function(_1){return isc.Page.getURL(this.printFrameURL+"?id="+this.getID()+"&title="+(_1||""))}
,isc.A.getIFrameHandle=function(){return document.getElementById(this.getIFrameID())}
,isc.A.getIFrameWindow=function(){return this.getIFrameHandle().contentWindow}
,isc.A.iframeLoad=function(){this.iframeLoaded=true}
,isc.A.setHTML=function(_1,_2){if(!this.iframeLoaded){this.delayCall("setHTML",[_1,_2],100);return}
var _3=this.getIFrameWindow();_3.assignHTML(_1);this.fireCallback(_2,["printPreview","callback"],[this,_2])}
,isc.A.setTitle=function(_1){this.title=_1;if(!this.iframeLoaded)return}
,isc.A.printHTML=function(_1,_2,_3){var _4=this;this.setTitle(_2);this.setHTML(_1,function(){_4.print()})}
,isc.A.print=function(){this.getIFrameWindow().doPrint()}
,isc.A.printComplete=function(){}
);isc.B._maxIndex=isc.C+12;isc.A=isc.Canvas;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.printComponents=function(_1,_2,_3,_4){isc.Canvas.getPrintHTML(_1,_2,{target:this,methodName:"$57f",title:_3,debugOnly:_4})}
,isc.A.$57f=function(_1,_2){var _3=_2.title,_4=_2.debugOnly;if(!this.$55z)this.$55z=isc.PrintCanvas.create({width:"100%",height:"100%",autoDraw:false,backgroundColor:"white"});this.$55z.moveTo(null,-isc.Page.getHeight());if(!this.$55z.isDrawn())this.$55z.draw();this.$55z.printHTML(_1,_3,_4)}
,isc.A.getPrintPreview=function(_1,_2,_3,_4){isc.Canvas.getPrintHTML(_1,_2,{target:this,methodName:"$57g",origCallback:_4,previewProperties:_3})}
,isc.A.$57g=function(_1,_2){var _3=isc.PrintCanvas.create(_2.previewProperties);_3.setHTML(_1,{target:this,methodName:"$57h",origCallback:_2.origCallback})}
,isc.A.$57h=function(_1,_2){if(_2.origCallback){this.fireCallback(_2.origCallback,["printPreview"],_1)}}
,isc.A.showPrintPreview=function(_1,_2,_3,_4,_5){if(!isc.PrintWindow){isc.definePrintWindow()}
if(!isc.PrintWindow)return;_3=isc.addProperties({width:"100%",height:"100%",autoDraw:false},_3);if(!this.$57i){this.$57i=isc.PrintWindow.create(_3)}
this.$57i.showPrintPreview(_1,_2,_4,_5)}
);isc.B._maxIndex=isc.C+6;isc.definePrintWindow=function(){if(!isc.Window){isc.logWarn("Attempting to create PrintWindow class with no defined Window class. "+"Ensure the required 'Containers' module is laoded");return}
isc.defineClass("PrintWindow","Window");isc.PrintWindow.addProperties({isModal:true,headerControls:["headerIcon","headerLabel","printButton","closeButton"],printButtonDefaults:{_constructor:"IButton",title:"Print",height:20,click:"this.creator.printClicked()"},showMinimizeButton:false,title:"Print Preview",showPrintPreview:function(_3,_4,_5,_6){if(!isc.isAn.Array(_3))_3=[_3];isc.Canvas.getPrintHTML(_3,_4,{target:this,methodName:"$57j",origCallback:_5},_6)},$57j:function(_3,_4){if(!this.previewPane){this.previewPane=this.createPreviewPane();this.addItem(this.previewPane)}
this.previewPane.addProperties({title:this.title});this.setVisibility("hidden");if(!this.isDrawn())this.draw();this.previewPane.setHTML(_3,{target:this,methodName:"$57h",origCallback:_4.origCallback})},$57h:function(_3,_4){if(!this.isVisible())this.show();this.bringToFront();if(_4.origCallback){this.fireCallback(_4.origCallback,["printPreview"],_3)}},printClicked:function(){var _1=this.getPrintCanvas();if(!_1)return;_1.print()},createPreviewPane:function(_3){var _2=isc.PrintCanvas.create({width:"100%",height:"100%"});return _2},getPrintCanvas:function(){return this.previewPane}})}
isc.A=isc.Canvas.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.drawRect=function(_1,_2,_3,_4,_5,_6,_7,_8){if(!this.$pz)this.$pz=[];this.$pz.add(isc.DrawRegion.getRectHTML(this,_1,_2,_3,_4,_6,_7,_8,_5))}
,isc.A.$py=function(){delete this.$qh;delete this.$pz}
);isc.B._maxIndex=isc.C+2;isc.A=isc.Canvas;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.getRectHTML=function(_1,_2,_3,_4,_5,_6,_7,_8,_9){if(_2==null)_2=0;if(_3==null)_3=0;if(_4==null)_4=1;if(_5==null)_5=1;if(!_6||_6==isc.emptyString)_6=isc.nbsp;if(!this.$xr){this.$xr=["<DIV class='",,"' style='",,";position:absolute;overflow:hidden;left:",,,,,,,"px;top:",,,,,,,"px;width:",,,,,,"px;height:",,,,,,"px;' ID='",,"_rect_",,,,,,"' eventpart='rect'>",,"</DIV>"]}
if(!_1.$qh)_1.$qh=0;var _10=this.$xr;_10[1]=_7;_10[3]=_8;isc.$bk(_10,_2,5,6);isc.$bk(_10,_3,12,6);isc.$bk(_10,_4,19,5);isc.$bk(_10,_5,25,5);_10[31]=_1.getID();if(!_9)_9=_1.$qh++;if(isc.isA.Number(_9)&&_9<100000)
isc.$bk(_10,_9,33,5);else
_10[33]=_9;_10[39]=_6;return _10.join(isc.emptyString)}
);isc.B._maxIndex=isc.C+1;isc.Canvas.registerStringMethods({rectMouseOver:"element,ID,event",rectMouseOut:"element,ID,event",rectMouseMove:"element,ID,event",rectMouseDown:"element,ID,event",rectMouseUp:"element,ID,event",rectClick:"element,ID,event",rectDoubleClick:"element,ID,event",rectShowContextMenu:"element,ID,event",rectHover:"element,ID"});isc.ClassFactory.defineClass("DrawRegion","Canvas");isc.A=isc.DrawRegion.getPrototype();isc.A.useEventParts=true;isc.A=isc.Canvas;isc.A.COPY="copy";isc.A.MOVE="move";isc.A.CLONE="clone";isc.A=isc.Canvas.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.showComplexFields=true;isc.A.ignoreEmptyCriteria=true;isc.A.dragRecategorize=true;isc.A.duplicateDragMessage="Duplicates not allowed";isc.A.addDropValues=true;isc.A.fieldIdProperty="name";isc.A.$301="false;";isc.A.$18r="false";isc.A.styleOpposite="cellHiliteOpposite";isc.A.hiliteProperty="_hilite";isc.A.hiliteMarker="$63i";isc.A.$578=0;isc.A.$579=[];isc.A.dragDataAction=isc.Canvas.MOVE;isc.B.push(isc.A.bindToDataSource=function(_1,_2){if(this.dataSource==null&&this.data!=null)this.dataSource=this.data.dataSource;var _3=this.getDataSource();if(_3!=null&&isc.isA.String(_3)){this.logWarn("unable to look up DataSource: "+_3+", databinding will not be used");return _1}
var _4=(_1==null||_1.length==0),_5;if(_3){var _6=this.useFlatFields;if(_6==null)_6=_3.useFlatFields;_5=_6?_3.getFlattenedFields():_3.getFields()}
if(_3==null||_5==null){if(_1!=null&&isc.SimpleType){for(var i=0;i<_1.length;i++){isc.SimpleType.addTypeDefaults(_1[i])}}
return _1}
if(_3!=null&&_4){_1=[];for(var _8 in _5){var _9=_5[_8];if(!this.shouldUseField(_9,_3))continue;_1.add(isc.addProperties({},_9))}
return _1}
if(_3!=null&&!_4){if(this.useAllDataSourceFields){var _10=this;return _3.combineFieldOrders(_5,_1,function(_9,_3){return _10.shouldUseField(_9,_3)})}else{for(var i=0;i<_1.length;i++){var _9=_1[i];if(!_9)continue;var _8=_9[this.fieldIdProperty];isc.SimpleType.addTypeDefaults(_9);if(!_3.getField(_8))continue;_9=_3.combineFieldData(_9)}
return _1}}}
,isc.A.shouldUseField=function(_1,_2){if(_1.hidden&&!this.showHiddenFields)return false;if(_1.detail&&!this.showDetailFields)return false;if(!this.showComplexFields&&_2.fieldIsComplexType(_1.name))return false;return true}
,isc.A.getField=function(_1){if(!this.fields)return null;return isc.Class.getArrayItem(_1,this.fields,this.fieldIdProperty)}
,isc.A.getFieldNum=function(_1){if(!this.fields)return-1;return isc.Class.getArrayItemIndex(_1,this.fields,this.fieldIdProperty)}
,isc.A.$31y=function(_1){if(_1==null)return;var _2=this.getAllFields();var _3=_2.getProperty(this.fieldIdProperty),_4=[];for(var i=0;i<_1.length;i++){var _6=_1[i],_7=_2.find(this.fieldIdProperty,_6.name);if(_7==null)continue;_3.remove(_6.name);if(_6.visible==false)_7.showIf=this.$18r;else _7.showIf=null;if(_6.width!=null&&!isNaN(_6.width))_7.width=_6.width;_4.add(_7)}
for(var i=0;i<_3.length;i++){var _8=_3[i],_9=_2.findIndex(this.fieldIdProperty,_8),_7=_2[_9],_10=_2[_9-1];if(_10!=null){var _11=_4.indexOf(_10);if(_11!=-1){_4.addAt(_7,_11+1);continue}}
if(this.fieldShouldBeVisible(_7,_9)){_4.addAt(_7,this.$31z(_4)+1)}else{_4.add(_7)}}
return _4}
,isc.A.$31z=function(_1){if(_1==null)_1=this.completeFields;var _2=this.getVisibleFields(_1);if(_2.length==0)return-1;return _1.lastIndexOf(_2.last())}
,isc.A.getVisibleFields=function(_1){var _2=[];for(var i=0;i<_1.length;i++){var _4=_1[i];if(_4==null)continue;if(this.fieldShouldBeVisible(_4,i))_2.add(_4)}
return _2}
,isc.A.fieldShouldBeVisible=function(_1,_2){if(_1.showIf!=null){if(_1.showIf==this.$18r||_1.showIf==this.$301)return false;isc.Func.replaceWithMethod(_1,"showIf","list,field,fieldNum");if(!_1.showIf(this,_1,_2))return false}
return true}
,isc.A.setValueMap=function(_1,_2){if(!isc.isAn.Object(_1))_1=this.getField(_1);if(!_1)return;_1.valueMap=_2}
,isc.A.setDataSource=function(_1,_2){if(isc.$cv)arguments.$cw=this;this.dataSource=_1||this.dataSource;if(this.setFields)this.setFields(_2);if(this.dataSource){if(this.isA("DynamicForm"))this.setData({});else this.setData([])}
this.markForRedraw("bind")}
,isc.A.bind=function(_1,_2){this.setDataSource(_1,_2)}
,isc.A.getDataSource=function(){if(isc.isA.String(this.dataSource)){var _1=isc.DS.get(this.dataSource);if(_1!=null)return _1;_1=this.getWindow()[this.dataSource];if(_1&&isc.isA.DataSource(_1))return(this.dataSource=_1)}
return this.dataSource}
,isc.A.fieldValuesAreEqual=function(_1,_2,_3){if(_2==_3)return true;if(_1==null)return false;if(_1.type=="date"){if(isc.isA.Date(_2)&&isc.isA.Date(_3)){return(Date.compareDates(_2,_3)==0)}}else if(_1.type=="valueMap"){if(isc.isAnArray(_2)&&isc.isAn.Array(_3)){return _2.equals(_3)}else if(isc.isAn.Object(_2)&&isc.isAn.Object(_3)){for(var i in _2){if(_3[i]!=_2[i])return false}
for(var j in _3){if(_2[j]!=_3[j])return false}
return true}}
return false}
,isc.A.setFields=function(_1){_1=this.bindToDataSource(_1);this.fields=_1}
,isc.A.getSerializeableFields=function(_1,_2){_1.addList(["zIndex","data"]);if(this.ID&&this.ID.startsWith("isc_"))_1.add("ID");if(this.dataSource)_1.addList(["fields","items"]);if(this.getClassName()!="Canvas"&&this.getClassName()!="Layout"){_1.add("children")}
return this.Super("getSerializeableFields",arguments)}
,isc.A.addField=function(_1,_2){var _3=(this.fields||this.items||isc.$ac).duplicate();_3.addAt(_1,_2);this.setFields(_3)}
,isc.A.removeField=function(_1){var _2=(this.fields||this.items||isc.$ac).duplicate();_2.remove(_2.find("name",_1));this.setFields(_2)}
,isc.A.filterData=function(_1,_2,_3){this.$wo("filter",_1,_2,_3)}
,isc.A.fetchData=function(_1,_2,_3){this.$wo("fetch",_1,_2,_3)}
,isc.A.exportData=function(_1){if(!_1)_1={};if(this.sortField)_1.sortBy=(!this.sortDirection?"-":"")+this.sortField;if(!this.exportAll){var _2=this.exportFields;if(!_2){_2=[];for(var i=0;i<this.fields.length;i++){var _4=this.fields.get(i);if(!_4.hidden)_2.add(_4.name)}}
if(_2&&_2.length>0)_1.exportFields=_2}
this.getDataSource().exportData(this.getCriteria(),_1)}
,isc.A.setCriteria=function(_1){if(this.data&&this.data.setCriteria)this.data.setCriteria(_1)}
,isc.A.getCriteria=function(){return this.data&&this.data.getCriteria?this.data.getCriteria():null}
,isc.A.fetchRelatedData=function(_1,_2,_3,_4){var _5=isc.isA.DataSource(_2)?_2:isc.isA.String(_2)?isc.DS.get(_2):isc.isA.Canvas(_2)?_2.dataSource:null;if(!_5){this.logWarn("schema not understood: "+this.echoLeaf(_2));return}
var _6=this.getDataSource().getTreeRelationship(_5);var _7={};_7[_6.parentIdField]=_1[_6.idField];this.fetchData(_7,_3,_4)}
,isc.A.clearCriteria=function(_1,_2){this.$wo("filter",null,_1,_2)}
,isc.A.$wo=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;if(_4==null&&isc.isAn.Object(_3)&&_3.methodName==null)
{_4=_3;_3=null}
_4=this.buildRequest(_4,_1,_3);if(_2==null){_2={}}else if(isc.isA.Class(_2)){_2=isc.DynamicForm.getFilterCriteria(_2)}
this.filterWithCriteria(_2,_4.operation,_4)}
,isc.A.filterWithCriteria=function(_1,_2,_3){_3.prompt=(_3.prompt||isc.RPCManager.fetchDataPrompt);var _4=_1;if(this.ignoreEmptyCriteria){_4=isc.DataSource.filterCriteriaForFormValues(_1)}
var _5=this.getData();if(this.useExistingDataModel(_1,_2,_3)){this.updateDataModel(_4,_2,_3)}else{_5=this.createDataModel(_4,_2,_3)}
this.setData(_5);if(!_3.$326&&this.requestVisibleRows!=null){var _6=this.data,_7=_6.fetchDelay;_6.fetchDelay=0;this.requestVisibleRows();_6.fetchDelay=_7}}
,isc.A.useExistingDataModel=function(_1,_2,_3){var _4=this.getData();if(!isc.isA.ResultSet(_4))return false;var _5=_4.getOperationId("fetch");return _5==null||_5==_2.ID}
,isc.A.createDataModel=function(_1,_2,_3){if(this.logIsInfoEnabled("ResultSet")){this.logInfo("Creating new isc.ResultSet for operation '"+_2.ID+"' with filterValues: "+isc.Comm.serialize(_1),"ResultSet")}
var _4=this.getDataSource();if(!_4){this.logWarn("No DataSource or invalid DataSource specified, can't create data model"+this.getStackTrace());return null}
var _5=this.dataProperties||{};if(this.dataFetchDelay)_5.fetchDelay=this.dataFetchDelay;isc.addProperties(_5,{operation:_2,filter:_1,context:_3,componentId:this.ID});return _4.getResultSet(_5)}
,isc.A.updateDataModel=function(_1,_2,_3){this.logDebug("Setting filter to: "+isc.Comm.serialize(_1));var _4=this.getData();_4.setContext(_3);_4.setCriteria(_1)}
,isc.A.requestVisibleRows=function(){return this.data.get(0)}
,isc.A.invalidateCache=function(){if(this.data&&this.data.invalidateCache!=null)return this.data.invalidateCache()}
,isc.A.willFetchData=function(_1,_2){if(this.data&&this.data.willFetchData!=null){return this.data.willFetchData(_1,_2)}
return true}
,isc.A.addData=function(_1,_2,_3){return this.$wp("add",_1,_2,_3)}
,isc.A.updateData=function(_1,_2,_3){return this.$wp("update",_1,_2,_3)}
,isc.A.removeData=function(_1,_2,_3){return this.$wp("remove",_1,_2,_3)}
,isc.A.$wp=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;if(_4==null&&isc.isAn.Object(_3)&&_3.methodName==null)
{_4=_3;_3=null}
if(this.saveLocally||this.getDataSource()==null){if(_1=="update"){var _5=this.getDataSource();if(!_5){isc.logWarn("Update by primary key cannot be performed without a DataSource."+"Modify the record directly instead");return}
var _6=this.data.get(_5.findByKeys(_2,this.data));isc.addProperties(_6,_2);return this.data.dataChanged()}else if(_1=="add"){this.data.add(_2);return}}
return this.getDataSource().performDSOperation(_1,_2,_3,_4)}
,isc.A.removeSelectedData=function(_1,_2){if(_2==null&&isc.isAn.Object(_1)&&_1.methodName==null)
{_2=_1;_1=null}
var _3=this.getSelection();if(isc.isA.ListGrid(this)&&this.canEdit&&this.selectOnEdit&&(_3==null||_3.length==0)&&this.getEditRow()!=null&&this.getRecord(this.getEditRow())==null)
{this.discardEdits(this.getEditRow());return}
if(this.dataSource==null||this.saveLocally){if(this.data){this.data.removeList(this.getSelection());if(_1)this.fireCallback(_1)}
return}
var _4=this.buildRequest(_2,"remove",_1),_5=this.getDataSource();if(_3.length>0)this.deleteRecords(_3,_4.operation,_4,_5)}
,isc.A.deleteRecords=function(_1,_2,_3,_4){isc.addProperties(_3,{prompt:(_3.prompt||isc.RPCManager.removeDataPrompt)});var _5=isc.RPCManager.startQueue();if(!isc.isAn.Array(_1))_1=[_1];for(var i=0;i<_1.length;i++){if(_1[i].$52e)continue;_4.performDSOperation(_2.type,_1[i],null,_3)}
if(!_5)isc.RPCManager.sendQueue()}
,isc.A.createSelectionModel=function(){if(this.selection)this.destroySelectionModel();if(this.canSelectCells){var _1=[];if(this.numRows!=null){for(var i=0;i<this.numRows;i++){_1[i]={}}}}else{var _1=this.data}
var _3,_4={ID:this.getID()+"_selection",data:_1,target:this,selectionProperty:this.selectionProperty,simpleDeselect:this.simpleDeselect,dragSelection:this.canDragSelect};if(this.canSelectCells&&this.fields!=null)_4.numCols=this.fields.length;if(this.data.getNewSelection){_3=this.data.getNewSelection(_4)}
if(_3==null){if(this.canSelectCells){_3=isc.CellSelection.create(_4)}else{_3=isc.Selection.create(_4)}}
this.selection=_3}
,isc.A.destroySelectionModel=function(){if(!this.selection)return;if(this.selection.destroy)this.selection.destroy();delete this.selection}
,isc.A.getSelection=function(){if(!this.selection)return null;if(this.canSelectCells){var _1=this.selection.getSelectedCells();if(_1==null)return null;var _2=[];for(var i=0;i<_1.length;i++){var _4=_1[i],_5=this.getCellRecord(_4[0],_4[1]);if(_5==null)continue;_2.add(_5)}
return _2}else{return this.selection.getSelection()}}
,isc.A.getSelectedRecord=function(){if(!this.selection)return null;return this.selection.getSelectedRecord()}
,isc.A.getSelectionObject=function(){return this.selection}
,isc.A.selectRecord=function(_1,_2,_3){this.selectRecords(_1,_2,_3)}
,isc.A.deselectRecord=function(_1,_2){this.selectRecord(_1,false,_2)}
,isc.A.selectRecords=function(_1,_2,_3){if(_2==null)_2=true;if(!isc.isAn.Array(_1))_1=[_1];for(var i=0;i<_1.length;i++){if(_1[i]==null)continue;if(isc.isA.Number(_1[i]))_1[i]=this.getRecord(_1[i],_3)}
var _5=this.getSelectionObject(_3);if(_5)_5.selectList(_1,_2,_3)}
,isc.A.deselectRecords=function(_1,_2){this.selectRecords(_1,false)}
,isc.A.selectAllRecords=function(){this.selection.selectAll()}
,isc.A.deselectAllRecords=function(){this.selection.deselectAll()}
,isc.A.anySelected=function(){return this.selection&&this.selection.anySelected()}
,isc.A.getRecord=function(_1,_2){if(this.data)return this.data.get(_1);return null}
,isc.A.getHilites=function(){return this.hilites}
,isc.A.setHilites=function(_1){this.hilites=_1;if(_1==null)return;this.$63j(this.hilites)}
,isc.A.$63j=function(_1,_2){for(var i=0;i<_1.length;i++){if(_1[i].id==null){this.$63k=this.$63k||0;_1[i].id=this.$63k}}
this.$58b=_1.makeIndex("id");if(!_2)this.applyHilites()}
,isc.A.applyHilites=function(){var _1=this.hilites,_2=this.data;if(!_1)return;if(_1&&!this.$58b)this.$63j(_1,true);if(isc.isA.ResultSet(_2))_2=_2.getAllLoadedRows()
_2.setProperty(this.hiliteMarker,null);for(var i=0;i<_1.length;i++){this.applyHilite(_1[i],_2)}
this.redrawHilites()}
,isc.A.getHilite=function(_1){if(isc.isAn.Object(_1))return _1;if(this.hilites==null)return null;if(!this.$58b&&this.hilites){this.$63j(this.hilites)}
var _2=this.$58b[_1];if(_2==null)_2=this.hilites[_1];return _2}
,isc.A.applyHilite=function(_1,_2,_3){_1=this.getHilite(_1);if(!_1.criteria)return;if(_1.disabled)return;var _3=_3||_1.fieldName;if(_3==null)_3=this.fields.getProperty("name");var _4=this.getDataSource().applyFilter(_2,_1.criteria);var _5=isc.isAn.Array(_3)?_3:[_3];if(this.logIsDebugEnabled("hiliting")){this.logDebug("applying filter: "+isc.Comm.serialize(_1.criteria)+", produced matches: "+isc.echoLeaf(_4)+", on fields: "+_5,"hiliting")}
for(var j=0;j<_5.length;j++){var _7=this.getField(_5[j]);for(var i=0;i<_4.length;i++){var _9=_4[i];this.hiliteRecord(_9,_7,_1)}}}
,isc.A.hiliteRecord=function(_1,_2,_3){var _4=_1[this.hiliteMarker];if(_4==null)_4=_1[this.hiliteMarker]=this.$578++;var _5=_2.$58c=_2.$58c||{},_6=_5[_4];if(_6==null)_5[_4]=_3.id;else _5[_4]=[_6,_3.id]}
,isc.A.getHiliteCSSText=function(_1){var _1=this.getHilite(_1);if(!_1)return;return _1.cssText||_1.style}
,isc.A.addHiliteCSSText=function(_1,_2,_3){var _4=_1[this.hiliteMarker],_5=this.getField(_2);if(!_5.$58c)return;var _6=_5.$58c[_4];if(_6==null)return;if(!isc.isAn.Array(_6)){this.$579[0]=_6;_6=this.$579}
for(var i=0;i<_6.length;i++){var _8=this.getHiliteCSSText(_6[i]);if(_8!=null){_3=_3?_3+isc.semi+_8:_8}}
return _3}
,isc.A.addObjectHilites=function(_1,_2,_3){if(!this.hilites)return _2;var _4;if(!isc.isAn.Array(_1)){this.$579[0]=_1;_4=this.$579}
for(var i=0;i<_4.length;i++){var _6,_7,_8,_9=_4[i];if(isc.isA.String(_9))_6=_9;else _6=(_9!=null?_9[this.hiliteProperty]:null);_7=this.getHilite(_6);if(_7!=null&&!_7.disabled){_8=_7.cssText||_7.style;var _10=(!_7.fieldName||!_3||_7.fieldName==_3.name);if(_8!=null&&_8!=isc.emptyString&&_10){if(_2==null)_2=_8;else _2+=this.$24m+_8}}}
return _2}
,isc.A.getFieldHilites=function(_1,_2){if(_1[this.hiliteProperty]!=null){var _3=this.getHilite(_1[this.hiliteProperty]);if(_3.fieldName==_2.name)return[_3];else return null}
if(_1[this.hiliteMarker]!=null){var _4=_1[this.hiliteMarker];if(!_2.$58c)return null;else return _2.$58c[_4]}}
,isc.A.applyHiliteHTML=function(_1,_2){if(!this.hilites)return _2;var _3,_4,_5;if(!isc.isAn.Array(_1)){this.$579[0]=_1;_1=this.$579}
for(var i=0;i<_1.length;i++){_5=_1[i];_3=this.getHilite(_5);if(_3.htmlValue!=null)_2=_3.htmlValue;if(_3!=null&&!_3.disabled){_4=_3.htmlBefore;if(_4!=null&&_4.length>0){_2=_4+_2}
_4=_3.htmlAfter;if(_4!=null&&_4.length>0){_2=_2+_4}
var _7=_3.htmlOpposite,_8=_3.styleOpposite||this.styleOpposite;if(_7){if(!isc.Browser.isIE){_2="<nobr><div class='"+_8+"' style='float:left'>&nbsp;"+_7+"&nbsp;</div>"+_2+"</nobr>"}else{_2="<nobr><table align=left><tr><td class='"+_8+"'>"+_7+"</td></tr></table>"+_2+"</nobr>"}}}}
return _2}
,isc.A.enableHilite=function(_1,_2){if(_2==null)_2=true;var _3=this.getHilite(_1);if(_3==null)return;_3.disabled=!_2;this.redrawHilites()}
,isc.A.disableHilite=function(_1){this.enableHilite(_1,false)}
,isc.A.enableHiliting=function(_1){if(_1==null)_1=true;if(this.hilites)this.hilites.setProperty("disabled",!_1);this.redrawHilites()}
,isc.A.disableHiliting=function(){this.enableHiliting(false)}
,isc.A.redrawHilites=function(){this.markForRedraw()}
,isc.A.editHilites=function(){if(this.hiliteWindow){this.hiliteEditor.setHilites(this.getHilites());this.hiliteWindow.show();return}
var _1=this,_2=this.hiliteEditor=isc.HiliteEditor.create({autoDraw:false,dataSource:this.getDataSource(),hilites:this.getHilites(),callback:function(_4){_1.setHilites(_4);_1.hiliteWindow.hide()}}),_3=this.hiliteWindow=isc.Window.create({autoDraw:true,items:[_2],autoSize:true,autoCenter:true,isModal:true,showModalMask:true,closeClick:function(){this.hide()},title:"Edit Highlights",bodyProperties:{layoutMargin:8,membersMargin:8}});return _3}
,isc.A.transferRecords=function(_1,_2,_3,_4){if(isc.isAn.Array(this.data)&&this.data.length==0&&this.dataSource&&!this.saveLocally)
{this.fetchData(null,null,{$326:true});this.data.setFullLength(0)}
if(_4==this){if(_3!=null&&!this.isGrouped)this.data.slideList(_1,_3)}else{var _5=this.getDataSource();var _6=_4.getDataSource();if(_5&&_5==_6&&_4.dragDataAction==isc.Canvas.MOVE){for(var i=0;i<_1.length;i++){var _8=_1[i];isc.addProperties(_8,this.getDropValues(_8,_6,_2,_3,_4));this.$61f(_8,_6)}}else{if(!isc.isAn.Array(_1))_1=[_1];if(this.selectionType==isc.Selection.MULTIPLE||this.selectionType==isc.Selection.SIMPLE)
{this.selection.deselectAll();this.selection.selectList(_1)}else if(this.selectionType==isc.Selection.SINGLE){this.selection.selectSingle(_1[0])}
if(_5){var _9=isc.rpc.startQueue();for(var i=0;i<_1.length;i++){if(_1[i].$52e)continue;var _8=isc.clone(_1[i]);isc.addProperties(_8,this.getDropValues(_8,_6,_2,_3,_4));if(_5!=_6){if(this.dragRecategorize){var _10=_5.getForeignKeysByRelation(_8,_6);var _11=false;var _12=[];if(_6)_12=_6.getPrimaryKeyFields();var _13;for(var _14 in _12){if(_10[_14]!==_13){this.logWarn("ListGrid dragRecategorize: source has dataSource:"+_6.getID()+". foreignKey relationship with "+"target dataSource "+_5.getID()+" is based on primary key which cannot be modified.");_11=true}}
if(!_11){isc.addProperties(_8,_10)}}
if(_5.titleField&&_6&&_6.titleField&&_5.titleField!=_6.titleField){var _13;if(_8[_5.titleField]===_13){_8[_5.titleField]=_8[_6.titleField]}}}
this.$61d(_8,_6,_10,null)}
if(!_9)isc.rpc.sendQueue()}else{if(this.isGrouped){for(var i=0;i<_1.length;i++){if(!this.$61e(_1[i])){this.$52u(_1[i],true);if(_3!=null)this.originalData.addAt(_1,_3);else this.originalData.add(_1)}}
if(_3!=null)this.originalData.addListAt(_1,_3);else this.originalData.addList(_1)}else{for(var i=0;i<_1.length;i++){if(_3!=null){this.$61d(_1[i],null,null,_3);_3++}else{this.$61d(_1[i])}}}}}}
if(this.canReorderRecords&&this.$60z()!=null){this.unsort()}}
,isc.A.$61f=function(_1,_2,_3){if(!this.preventDuplicates){_2.updateData(_1,null,_3);return}
var _4=this.getCleanRecordData(_1);if(this.data.find(_4)){}else{if(this.data.allMatchingRowsCached()){_2.updateData(_1,null,_3)}else{_2.fetchData(_4,function(_5,_6,_7){if(_6&&_6.length>0){}else{_2.updateData(_1,null,_3)}},{sendNoQueue:true})}}}
,isc.A.$61d=function(_1,_2,_3,_4,_5){var _6=this.getDataSource(),_7;if(_6)_7=_6.getPrimaryKeyFields();if(_6&&_6==_2){var _8;if(_7&&isc.firstKey(_7)!=null){for(var _9 in _7){if(_7[_9].type=="sequence"){_8=true;break}}}
if(_8){var _10;for(var _9 in _7){_1[_9]=_10}
_6.addData(_1);return}}
if(!this.preventDuplicates){if(_6){_6.addData(_1)}else{if(isc.Tree&&isc.isA.Tree(this.data)){this.data.add(_1,_5,_4)}else{if(_4!=null)this.data.addAt(_1,_4);else this.data.add(_1)}}
return}
if(this.$61e(_1,_2,_3)){isc.warn(this.duplicateDragMessage)}else{if(!_6){if(isc.Tree&&isc.isA.Tree(this.data)){this.data.add(_1,_5,_4)}else{if(_4!=null)this.data.addAt(_1,_4);else this.data.add(_1)}}else{if(!isc.ResultSet||!isc.isA.ResultSet(this.data)){_6.addData(_1);return}else{if(this.data.allRowsCached()||(_3&&this.data.allMatchingRowsCached())){_6.addData(_1);return}
if(_6&&_2==_6){if(_7&&isc.firstKey(_7)!=null){var _11=isc.applyMask(_1,_7)}else{_11=this.getCleanRecordData(_1)}}else if(_3){_11=isc.addProperties({},this.data.getCriteria());isc.addProperties(_11,_3)}else{_11=this.getCleanRecordData(_1)}
var _12=this;_6.fetchData(_11,function(_13,_14,_15){if(_14&&_14.length>0){isc.warn(_12.duplicateDragMessage)}else{_6.addData(_1)}},{sendNoQueue:true})}}}}
,isc.A.$61e=function(_1,_2,_3){var _4=this.getDataSource(),_5;if(!this.preventDuplicates)return false;if(_4)_5=_4.getPrimaryKeyFields();if(_4&&_4==_2){if(_5&&isc.firstKey(_5)!=null){for(var _6 in _5){if(_5[_6].type=="sequence"){return false}}}}
if(!_4){var _7=this.getCleanRecordData(_1)}else if(_4&&_2==_4){if(_5&&isc.firstKey(_5)!=null){_7=isc.applyMask(_1,_5)}else{_7=this.getCleanRecordData(_1)}}else if(_3){_7={};var _8=this.data.getCriteria();if(_8&&_8._constructor!="AdvancedCriteria"){var _9=this.data.context;if(_9&&(_9.textMatchStyle==null||_9.textMatchStyle=="exact")){isc.addProperties(_7,_8)}}
isc.addProperties(_7,_3)}else{_7=this.getCleanRecordData(_1)}
if(this.data.find(_7))return true;else return false}
,isc.A.getCleanRecordData=function(_1){if(isc.ResultTree&&isc.isA.ResultTree(this.data)){return this.data.$61g(_1,false)}
var _2={};for(var _3 in _1){if(_3.startsWith("_selection_"))continue;_2[_3]=_1[_3]}
return _2}
,isc.A.getDropValues=function(_1,_2,_3,_4,_5,_6){if(!this.addDropValues)return;var _7={},_8;if(this.data&&this.data.getNodeDataSource){_8=this.data.getNodeDataSource(_3);if(!_8){_8=this.getDataSource()}}
if(this.data&&this.data.getCriteria)_7=this.data.getCriteria(_8);var _9;if(_7&&_7._constructor!="AdvancedCriteria"){var _10=this.data.context;if(_10&&(_10.textMatchStyle==null||_10.textMatchStyle=="exact")){_9=isc.addProperties({},_7);if(this.dropValues){_9=isc.addProperties(_9,this.dropValues)}
return _9}}
return this.dropValues}
,isc.A.transferDragData=function(){var _1=this.getDragData();var _2=this.dragDataAction==isc.Canvas.COPY||this.dragDataAction==isc.Canvas.CLONE;if(_2){for(var i=0;i<_1.length;i++){var _4=_1[i];if(_4.$29a!=null){for(var _5=0;_5<_4.$29a.length;_5++){this.removeEmbeddedComponent(_4,_4.$29a[_5])}}
delete _4.$29a}
_1=isc.clone(_1)}else if(this.dragDataAction==isc.Canvas.MOVE){this.selection.deselectList(_1);if(this.dataSource){var _6=isc.rpc.startQueue();for(var i=0;i<_1.length;i++){this.getDataSource().removeData(_1[i])}
if(!_6)isc.rpc.sendQueue()}else{this.data.removeList(_1)}}
return _1}
,isc.A.getDragData=function(){var _1=this.selection.getSelection();return _1}
,isc.A.transferSelectedData=function(_1,_2){if(!this.isValidTransferSource(_1))return;if(_2==null)_2=this.data.getLength()
else _2=Math.min(_2,this.data.getLength());var _3=this.getDataSource(),_4=_1.getDataSource();if(_3&&_3==_4){var _5=_1.getDragData()}else{_5=_1.transferDragData()}
var _6=this.data.get(_2);this.transferRecords(_5,_6,_2,_1)}
,isc.A.isValidTransferSource=function(_1){if(!_1||!_1.transferDragData){this.logWarn("transferSelectedData(): "+(_1?"Invalid ":"No ")+"source widget passed in - "+(_1||"")+" taking no action.");return false}
if(_1==this){this.logWarn("transferSelectedData(): target parameter contains a pointer back to this grid - ignoring");return false}
return true}
);isc.B._maxIndex=isc.C+79;isc.defineClass("EdgedCanvas","Canvas");isc.A=isc.EdgedCanvas.getPrototype();isc.A.redrawOnResize=false;isc.A.$nu=false;isc.A.$jp=false;isc.A.$jo=false;isc.A.useClipDiv=false;isc.A.overflow=isc.Browser.isMoz?isc.Canvas.VISIBLE:isc.Canvas.HIDDEN;isc.A.$ks=false;isc.A.$tb=0;isc.A.$td=0;isc.A.$tc=0;isc.A.$te=0;isc.A.$y0=["TL","T","TR","L","center","R","BL","B","BR"];isc.A.skinImgDir="images/edges/";isc.A.edgeImage="[SKIN]/rounded/frame/FFFFFF/6.png";isc.A.shownEdges={TL:true,T:true,TR:true,L:true,R:true,BL:true,B:true,BR:true};isc.A.edgeSize=6;isc.A=isc.EdgedCanvas.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$61h="<TD class='";isc.A.$61i="' ></TD>";isc.A.$y2="<TABLE CELLPADDING=0 CELLSPACING=0 "+"STYLE='height:100%;width:100%;table-layout:fixed'>"+"<COL WIDTH=";isc.A.$y3="><COL><COL WIDTH=";isc.A.$4n=" class=";isc.A.addEdgeStyleSuffix=false;isc.A.forceMozRowHeight=true;isc.B.push(isc.A.initWidget=function(){this.invokeSuper(isc.EdgedCanvas,this.$oc);var _1=this.customEdges;if(_1){var _2=this.shownEdges={};if(_1.contains("T")){_2.T=_2.TL=_2.TR=true}
if(_1.contains("B")){_2.B=_2.BL=_2.BR=true}
if(_1.contains("L")){_2.L=_2.TL=_2.BL=true}
if(_1.contains("R")){_2.R=_2.TR=_2.BR=true}}
this.updateEdgeSizes()}
,isc.A.updateEdgeSizes=function(){var _1=this.edgeSize;this.$y4=this.$du(this.edgeLeft,_1);this.$y5=this.$du(this.edgeRight,_1);this.$y6=this.$du(this.edgeTop,_1);this.$y7=this.$du(this.edgeBottom,_1);var _2=this.shownEdges,_3=this.edgeOffset;if(_2.L)this.$tb=this.$du(this.edgeOffsetLeft,_3,this.$y4);if(_2.R)this.$tc=this.$du(this.edgeOffsetRight,_3,this.$y5);if(_2.T)this.$td=this.$du(this.edgeOffsetTop,_3,this.$y6);if(_2.B)this.$te=this.$du(this.edgeOffsetBottom,_3,this.$y7);this.markForRedraw()}
,isc.A.getInnerWidth=function(_1,_2,_3){var _4=this.invokeSuper(isc.EdgedCanvas,"getInnerWidth",_1,_2,_3);return _4-this.$tb-this.$tc}
,isc.A.getInnerHeight=function(_1,_2,_3){var _4=this.invokeSuper(isc.EdgedCanvas,"getInnerHeight",_1,_2,_3);return _4-this.$td-this.$te}
,isc.A.getInnerHTML=function(){var _1=isc.SB.create(),_2=this.edgeImage,_3=_2.lastIndexOf(isc.dot),_4=_2.substring(0,_3),_5=_2.substring(_3),_6=this.getImgURL(_4),_7="<TD HEIGHT=",_8="<TD",_9,_10;if(!(isc.Browser.isStrict&&isc.Browser.isIE&&isc.Browser.version>=8)){var _11=isc.EdgedCanvas.$y8;if(!_11){_11=isc.EdgedCanvas.$y8={width:"100%",height:"100%"};if(isc.Browser.isSafari)_11.align="middle";if(isc.Browser.isStrict&&!isc.Browser.isTransitional)
_11.extraStuff="style='display:block;'"}
_11.src=_2;var _12=this.imgHTML(_11);if(isc.Browser.isSafari){_12="<DIV style='overflow:hidden;width:100%;height:100%'>"+_12+"</DIV>"}
var _13=_12.lastIndexOf(isc.dot);_9=this.$oa+_12.substring(0,_13);_10=_12.substring(_13)+"</TD>"}else{_9=" STYLE='background:url("+_6;_10=_5+")'></TD>"}
if(this.edgeColor)_9+=isc.$ag+this.edgeColor;var _14=this.shownEdges;_1.append(this.$y2,this.$y4,this.$y3,this.$y5,this.$oa,"<TR HEIGHT=",this.$y6,this.$oa);this.$y9(_7,this.$y6,_9,_10,0,2,_14,_1);if(isc.Browser.isIE&&isc.Browser.isStrict){_1.append("</TR><TR HEIGHT=",this.getHeight()-this.$y6-this.$y7,">")}else{_1.append("</TR><TR>")}
if(isc.Browser.isMoz){this.$y9(_7,"100%",_9,_10,3,5,_14,_1)}else{this.$y9(_8,null,_9,_10,3,5,_14,_1)}
_1.append("</TR><TR HEIGHT=",this.$y7,">");this.$y9(_7,this.$y7,_9,_10,6,8,_14,_1);_1.append("</TR></TABLE>");return _1.toString()}
,isc.A.$y9=function(_1,_2,_3,_4,_5,_6,_7,_8){for(var i=_5;i<=_6;i++){var _10=this.$y0[i];var _11=this.getEdgeStyleName(_10),_12=_11?this.$4n:null;if(_7[_10]||(this.showCenter&&_10==isc.Canvas.CENTER)){_8.append(_1,_2,_12,_11,_3,this.getEdgePrefix(_10),isc.$ag,_10,_4)}else{if(this.centerBackgroundColor&&_10==isc.Canvas.CENTER){_8.append("<TD ",_12,_11," style='background-color:",this.centerBackgroundColor,"'></TD>")}else{_8.append(this.$61h,_12,_11,this.$61i)}}}}
,isc.A.getEdgeStyleName=function(_1){if(this.edgeStyleName==null)return;if(!this.addEdgeStyleSuffix)return this.edgeStyleName;if(!this.$61j||this.$61j.base!=this.edgeStyleName){var _2=this.edgeStyleName;this.$61j={base:_2,TL:_2+"$61o",T:_2+"$61p",TR:_2+"$61q",L:_2+"$61r",C:_2+"$61s",R:_2+"$61t",BL:_2+"$61u",B:_2+"$61v",BR:_2+"$61w"}}
return this.$61j[_1]}
,isc.A.getEdgePrefix=function(_1){}
,isc.A.$ub=function(){if(!this.isDrawn()||this.$za)return;if(isc.Browser.isOpera){this.masterElement.bringToFront();return}
if(isc.Browser.isIE&&isc.Browser.isStrict){var _1=this.getHandle().firstChild.rows[1];this.$u9(_1.style,this.$o5,this.getHeight()-this.$y6-this.$y7);return}
if(!isc.Browser.isMoz)return;var _2=this.getHandle().firstChild.rows[1].cells[1],_3=this.getHeight()-this.$y6-this.$y7;if(_3<0)_3=0;this.$u9(_2.style,this.$o5,_3);if(this.forceMozRowHeight){var _4=_2.parentNode.cells;this.$u9(_4[0].style,this.$o5,_3);this.$u9(_4[2].style,this.$o5,_3)}}
,isc.A.layoutChildren=function(_1,_2,_3){var _4=this.children;if(!_4)return;isc.Canvas.$b4.layoutChildren.call(this,_1,_2,_3);if(_4.length==0)return;var _5=_4[0];_5.setRect(this.$tb,this.$td,this.getInnerWidth(),this.getInnerHeight())}
,isc.A.addChild=function(_1,_2,_3){isc.Canvas.$b4.addChild.call(this,_1,_2,_3);this.layoutChildren("addChild")}
,isc.A.draw=function(_1,_2,_3,_4){if(!this.readyToDraw())return this;if(this.masterElement){var _5=this.masterElement,_6=false;while(_5){if(_5.position==this.$411){_6=true;break}
_5=_5.parentElement}
if(!_6||isc.Page.isLoaded())this.fitToMaster();else isc.Page.setEvent("load",this,isc.Page.FIRE_ONCE,"fitToMaster")}
this.invokeSuper(isc.EdgedCanvas,"draw",_1,_2,_3,_4);this.$ub();return this}
,isc.A.fitToMaster=function(){if(this.destroyed)return;var _1=this.masterElement;if(_1.$uu){isc.Timer.setTimeout({target:this,methodName:"fitToMaster"},200);return}else if(_1.$rm){_1.adjustOverflow()}
var _2=_1.$ta();this.setRect(_1.getOffsetLeft()+_2.left,_1.getOffsetTop()+_2.top,Math.max(1,(_1.getVisibleWidth()-_2.left-_2.right)),Math.max(1,(_1.getVisibleHeight()-_2.top-_2.bottom)))}
,isc.A.redraw=function(){this.Super("redraw",arguments);this.$ub();return this}
,isc.A.masterResized=function(){var _1=this.masterElement;if(this.masterElement.isAnimating([this.$do,this.$zb]))return;var _2=_1.$ta();this.resizeTo(Math.max(1,_1.getVisibleWidth()-_2.left-_2.right),Math.max(1,_1.getVisibleHeight()-_2.top-_2.bottom))}
,isc.A.setEdgeImage=function(_1){if(this.edgeImage==_1)return;this.edgeImage=_1;this.markForRedraw("setEdgeImage")}
);isc.B._maxIndex=isc.C+16;isc.defineClass("DropShadow","EdgedCanvas");isc.A=isc.DropShadow.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.skinImgDir="images/shared/shadows/";isc.A.edgeImage="[SKIN]ds.png";isc.A.isMouseTransparent=true;isc.A.shownEdges={center:true,TL:true,T:true,TR:true,L:true,R:true,BL:true,B:true,BR:true};isc.A.depth=4;isc.A.showShadow=false;isc.B.push(isc.A.initWidget=function(){this.setDepth(this.depth);this.Super(this.$oc)}
,isc.A.setDepth=function(_1){if(_1!=null)this.depth=_1;var _2=(this.softness||this.depth),_3=this.$zc!=_2;this.$zc=_2;this.edgeSize=2*this.$zc;var _4=this.$du(this.offset,Math.round(this.depth/ 2));this.$zd=this.$du(this.offsetX,_4);this.$ze=this.$du(this.offsetY,_4);this.updateEdgeSizes();if(this.isDrawn()){this.masterMoved();if(_3||this.isDirty())this.redraw();this.masterResized()}}
,isc.A.getEdgePrefix=function(_1){if(_1!=isc.Canvas.CENTER)return this.$zc}
,isc.A.masterMoved=function(){var _1=this.visibility==isc.Canvas.HIDDEN,_2=this.masterElement,_3=_2.getOffsetLeft(),_4=_2.getOffsetTop();if(!_1){_3+=this.$zd-this.$zc;_4+=this.$ze-this.$zc}
this.moveTo(_3,_4)}
,isc.A.masterResized=function(){if(this.visibility==isc.Canvas.HIDDEN)return;var _1=this.masterElement;this.resizeTo(_1.getVisibleWidth()+2*this.$zc,_1.getVisibleHeight()+2*this.$zc)}
,isc.A.fitToMaster=function(){this.masterMoved();this.masterResized()}
,isc.A.setVisibility=function(_1,_2,_3,_4,_5){var _6=(_1!=this.visibility);this.invokeSuper(isc.DropShadow,"setVisibility",_1,_2,_3,_4,_5);if(_6){if(_1==isc.Canvas.HIDDEN){this.resizeTo(1,1);var _7=this.masterElement;this.moveTo(_7.getOffsetLeft(),_7.getOffsetTop())}else{this.fitToMaster()}}}
,isc.A.getCurrentCursor=function(_1,_2,_3,_4){var _5=this.masterElement;if(_5&&_5.dragResizeFromShadow)this.canDragResize=_5.canDragResize;return this.invokeSuper(isc.DropShadow,"getCurrentCursor",_1,_2,_3,_4)}
,isc.A.prepareForDragging=function(_1,_2,_3,_4){var _5=this.masterElement;if(_5&&_5.dragResizeFromShadow)this.canDragResize=_5.canDragResize;return this.invokeSuper(isc.DropShadow,"prepareForDragging",_1,_2,_3,_4)}
);isc.B._maxIndex=isc.C+9;isc.ClassFactory.defineClass("Hover");isc.A=isc.Hover;isc.A.delay=500;isc.A.leftOffset=15;isc.A.topOffset=15;isc.A.hoverCanvasDefaults={defaultWidth:100,defaultHeight:1,baseStyle:"canvasHover",align:isc.Canvas.LEFT,valign:isc.Canvas.TOP,wrap:true,autoDraw:false};isc.A=isc.Hover;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.show=function(_1,_2,_3,_4){if(!this.hoverCanvas)this.$zf();var _5=this.hoverCanvas;if(_1==null||_1==""){_5.hide();return}
this.lastHoverCanvas=_4;_5.setContents(_1);if(_2==null)_2={};var _6=this.hoverCanvasDefaults;_5.setAlign(_2.align||_6.align);_5.setVAlign(_2.valign||_6.valign);_5.setBaseStyle(_2.baseStyle||_6.baseStyle);_5.setOpacity(_2.opacity||_6.opacity);_5.setWrap(_2.wrap!=null?_2.wrap:_6.wrap);if(_2.moveWithMouse!=null)this.$zg=_2.moveWithMouse
else this.$zg=this.moveWithMouse;var _7=isc.EH.getX(),_8=isc.EH.getY(),_9=_2.left,_10=_2.top,_11=_2.width||_6.defaultWidth,_12=_2.height||_6.defaultHeight;if(_9!=null||_10!=null){_9=_9?_9:_7+this.leftOffset;_10=_10?_10:_8+this.topOffset}else{_5.setRect(null,-9999,_11,_12);if(!_5.isDrawn())_5.draw();if(!_5.isVisible())_5.show();else _5.redrawIfDirty("placing hover");var _13=_3?_3:[_7-this.leftOffset,_8-this.topOffset,2*this.leftOffset,2*this.topOffset];var _14=_5.getPeerRect();var _15=isc.Canvas.$t7(_14[2],_14[3],_13,"bottom",false,"outside-right");_9=_15[0];_10=_15[1]}
_5.setRect(_9,_10,_11,_12);_5.bringToFront();if(!_5.isDrawn()||!_5.isVisible())_5.show();if(this.$zg){this.$zh=isc.Page.setEvent("mouseMove",function(){isc.Hover.$zi()})}
return}
,isc.A.hoverCanvasHidden=function(){var _1=this.lastHoverCanvas;delete this.lastHoverCanvas;if(_1!=null){_1.hoverHidden()}}
,isc.A.hide=function(){var _1=isc.Hover.hoverCanvas;if(_1!=null){if(this.$zh){isc.Page.clearEvent("mouseMove",this.$zh);delete this.$zh}
_1.hide();var _2=this.hoverCanvasDefaults;_1.setRect(_1.isRTL()?10000:-10000,-1000)}}
,isc.A.$zf=function(){var _1=isc.addProperties({hide:function(){this.Super("hide",arguments);isc.Hover.hoverCanvasHidden()}},this.hoverCanvasDefaults);this.hoverCanvas=isc.Label.create(_1)}
,isc.A.$zi=function(){var _1=this.hoverCanvas.getPeerRect();var _2=isc.Canvas.$t7(_1[2],_1[3],this.getMousePointerRect(),"bottom",false,"outside-right");this.hoverCanvas.moveTo(_2[0],_2[1])}
,isc.A.getMousePointerRect=function(){return[isc.EH.getX()-this.leftOffset,isc.EH.getY()-this.topOffset,2*this.leftOffset,2*this.topOffset]}
,isc.A.setAction=function(_1,_2,_3,_4){if(_4==null)_4=this.delay;if(this.isActive||_4==0){_2.apply((_1?_1:this),_3?_3:[]);this.isActive=true}
else{if(this.timer!=null)this.timer=isc.Timer.clear(this.timer);this.actionTarget=(_1?_1:this);this.action=_2;this.actionArgs=_3?_3:[];this.timer=isc.Timer.setTimeout({target:isc.Hover,methodName:"$zj"},_4)}}
,isc.A.$zj=function(){if(this.action&&!this.actionTarget.destroyed){this.action.apply(this.actionTarget,this.actionArgs)}
this.actionTarget=this.action=this.actionArgs=null;this.isActive=true}
,isc.A.clear=function(){this.hide();if(this.timer!=null)this.timer=isc.Timer.clear(this.timer);this.actionTarget=this.action=this.actionArgs=null;this.isActive=false}
);isc.B._maxIndex=isc.C+9;if(!isc.Comm)isc.ClassFactory.defineClass("Comm");isc.A=isc.Comm;isc.A.$zk=/^[\$_a-zA-Z][\$\w]*$/;isc.A.BACKREF_PREFIX="$$BACKREF$$:";isc.A.indent="    ";isc.A.serializeBackRefs=true;isc.A=isc.Comm;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.serialize=function(_1,_2){return isc.Comm.$eu(_1,_2?"":null)}
,isc.A.$eu=function(_1,_2,_3){if(!_3){_3={};_3.objRefs={obj:[],path:[]};if(!_3.objPath){if(_1&&_1.getID)_3.objPath=_1.getID();else _3.objPath=""}}
if(_1==null)return null;if(isc.isA.String(_1))return(_1.asSource!=null?_1.asSource():String.asSource(_1));if(isc.isA.Function(_1))return null;if(isc.isA.Number(_1)||isc.isA.SpecialNumber(_1))return _1;if(isc.isA.Boolean(_1))return _1;var _4=isc.Comm.$zl(_3.objRefs,_1);if(_4!=null&&_3.objPath.contains(_4)){var _5=_3.objPath.substring(_4.length,_4.length+1);if(_5=="."||_5=="["||_5=="]"){if(this.serializeBackRefs)return"'"+isc.Comm.BACKREF_PREFIX+_4+"'";return isc.emptyString}}
if(isc.isA.Class(_1)){this.logWarn("Attempt to serialize class of type: "+_1.getClassName()+" at path: "+_3.objPath+" - returning null for this slot.");return null}
if(_1==window){this.logWarn("Serializer encountered the window object at path: "+_3.objPath+" - returning null for this slot.");return null}
isc.Comm.$zm(_3.objRefs,_1,_3.objPath);if(isc.isA.Function(_1.$eu))return _1.$eu(_2,_3.objRefs,_3.objPath);if(isc.isAn.Array(_1))return isc.Comm.$zn(_1,_3.objPath,_3.objRefs,_2);var _6;if(_1.getSerializeableFields){_6=_1.getSerializeableFields([],[])}else{_6=_1}
return isc.Comm.$zo(_6,_3.objPath,_3.objRefs,_2)}
,isc.A.$zn=function(_1,_2,_3,_4){var _5=isc.SB.create();_5.append("[");for(var i=0,_7=_1.length;i<_7;i++){var _8=_1[i];if(_4!=null)_5.append("\r",_4,isc.Comm.indent);var _9={objRefs:_3,objPath:isc.Comm.$zp(_2,i)};var _10=isc.Comm.$eu(_8,(_4!=null?_4+isc.Comm.indent:null),_9);_5.append(_10+",");if(_4!=null)_5.append(" ")}
_5=_5.toString();var _11=_5.lastIndexOf(",");if(_11>-1)_5=_5.substring(0,_11);if(_4!=null)_5+="\r"+_4;_5+="]";return _5}
,isc.A.$zo=function(_1,_2,_3,_4){var _5=isc.SB.create(),_6;_1=this.$42b(_1);_5.append("{");for(var _7 in _1){if(_7==null)continue;var _8=_1[_7];if(isc.isA.Function(_8))continue;var _9=_7.toString();if(!isc.Comm.$zk.test(_9))_9='"'+_9+'"';var _10={objRefs:_3,objPath:isc.Comm.$zp(_2,_7)};var _11=isc.Comm.$eu(_8,(_4!=null?_4+isc.Comm.indent:null),_10);if(_11===_6)continue;if(_4!=null)_5.append("\r",_4,isc.Comm.indent);_5.append(_9,":"+_11,",");if(_4!=null)_5.append(" ")}
_5=_5.toString();var _12=_5.lastIndexOf(",");if(_12>-1)_5=_5.substring(0,_12);if(_4!=null)_5+="\r"+_4;_5+="}";return _5}
,isc.A.$zm=function(_1,_2,_3){_1.obj.add(_2);_1.path.add(_3)}
,isc.A.$42b=function(_1){var _2=_1["$42c"];if(_2!=null){var _3=window[_2];if(_3&&_3.parentProperty&&_1[_3.parentProperty]){_1=_3.getCleanNodeData(_1)}}
return _1}
,isc.A.$zl=function(_1,_2){var _3=_1.obj.indexOf(_2);if(_3==-1)return null;return _1.path[_3]}
,isc.A.$zp=function(_1,_2){if(isc.isA.Number(_2)){return _1+"["+_2+"]"}else if(!isc.Comm.$zk.test(_2)){return _1+'["'+_2+'"]'}else{return _1+"."+_2}}
);isc.B._maxIndex=isc.C+8;isc.defineClass("AutoTest");isc.A=isc.AutoTest;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.getLocator=function(_1){var _2;if(isc.isA.Canvas(_1))_2=_1;else{_2=isc.AutoTest.locateCanvasFromDOMElement(_1)}
return _2?_2.getLocator(_1):""}
,isc.A.locateCanvasFromDOMElement=function(_1){return isc.EH.getEventTargetCanvas(null,_1)}
,isc.A.getElement=function(_1){if(!_1)return null;var _2=_1.split("/"),_3;var _4=_2[2];var _5=_2.length;for(var i=3;i<_5;i++){_2[i-3]=_2[i]}
_2.length=_5-3;if(!_4)return null;var _7=this.getComponentFromLocatorSubstring(_4);return _7?_7.getElementFromSplitLocator(_2):null}
,isc.A.getComponentFromLocatorSubstring=function(_1){var _2=_1.match("(.*)\\[")[1],_3=_1.match('ID=\\"(.*)\\"')[1];var _4=window[_3];if(!_4)return null;if(_4&&(!isc.isA[_2]||!isc.isA[_2](_4))){this.logWarn("AutoTest.getElement(): Component:"+_4+" expected to be of class:"+_2)}
return _4}
);isc.B._maxIndex=isc.C+4;isc.ApplyAutoTestMethods=function(){isc.Canvas.addMethods({getLocator:function(_15){var _1,_2;if(this._generated||this.locatorParent||this.creator||this.$541){_2=this.getLocatorParent()}
if(!_2){_1=this.getLocatorRoot()}else{_1=_2.getLocator()+"/"+_2.getChildLocator(this)}
if(_15)return[_1,this.getInteriorLocator(_15)].join("/");return _1},$549:["//",,'[ID="',,'"]'],getLocatorRoot:function(){if(!this.locatorRoot){this.$549[1]=this.getClassName();this.$549[3]=this.getID();this.locatorRoot=this.$549.join(isc.emptyString)}
return this.locatorRoot},containsLocatorChild:function(_53){return false},getLocatorParent:function(){if(this.locatorParent&&this.locatorParent.containsLocatorChild(this)){return this.locatorParent}
if(this.creator&&isc.isA.Canvas(this.creator)){var _3=this.creator.getAutoChildLocator(this);if(_3==null){this.logWarn("Locator code failed to find relationship between parent:"+this.creator.getID()+" and autoChild:"+this.getID());return null}}
return this.masterElement||this.parentElement},$55a:[,"[",,'][Class="',,'"]'],getChildLocator:function(_53){if(_53==this.hscrollbar){return"hscrollbar"}
if(_53==this.vscrollbar){return"vscrollbar"}
if(_53.creator==this){var _4=this.getAutoChildLocator(_53);if(_4)return _4}
return this.getStandardChildLocator(_53)},getAutoChildLocator:function(_53){if(this.$542){for(var _5 in this.$542){if(_53==this[_5])return _5}}
return null},getStandardChildLocator:function(_53){var _6=this.$55a;if(_53.masterElement==this){_6[0]="peer";_6[2]=this.peers.indexOf(_53)}else if(_53.parentElement==this){_6[0]="child";_6[2]=this.children.indexOf(_53)}else{this.logWarn("unexpected error - failed to find relationship between parent:"+this.getID()+" and child:"+_53.getID());return _53.getLocatorRoot()}
_6[4]=_53.getClassName();return _6.join(isc.emptyString)},getInteriorLocator:function(_15){if(_15&&this.useEventParts){var _7=this.getElementPart(_15);if(_7!=null&&_7.part!=null){return(_7.partID&&_7.partID!=isc.emptyString)?_7.part+"_"+_7.partID:_7.part}}
return isc.emptyString},getElementFromSplitLocator:function(_53){var _8=this.getChildFromLocatorSubstring(_53[0]);if(_8){_53.removeAt(0);return _8.getElementFromSplitLocator(_53)}
return this.getInnerElementFromSplitLocator(_53)},getChildFromLocatorSubstring:function(_53){if(isc.isA.Canvas(this[_53]))return this[_53]
var _8;for(var _9 in this.$558){_8=this.$559(_53,_9,this.$558[_9]);if(_8)break}
return _8},$558:{peer:"peers",child:"children"},$559:function(_53,_9,_54){if(_53.startsWith(_9+"[")){var _10=_53.match(_9+"\\[(\\d+)\\]\\[Class=\"(.+)\"\\]"),_11=_10?_10[1]:null,_12=_10?_10[2]:null;_11=parseInt(_11);if(!isc.isA.Number(_11)){this.logWarn("AutoTest.getElement() - didn't understand locator substring:"+_53);return null}
if(!this[_54]||!this[_54][_11]){this.logWarn("AutoTest.getElement(): unable to find "+_9+":"+_53);return null}
if(!isc.isA[_12]||!isc.isA[_12](this[_54][_11])){this.logWarn("AutoTest.getElement(): locator substring:"+_53+" gave component of class:"+this[_54][_11].getClassName())}
return this[_54][_11]}
return null},getInnerElementFromSplitLocator:function(_53){if(_53){if(_53.length==1){var _13=_53[0].split("_");var _14={part:_13[0],partID:_13[1]};var _15=this.getPartElement(_14);if(_15)return _15}}
return this.getHandle()}});if(isc.Layout){isc.Layout.addProperties({getStandardChildLocator:function(_53){var _16=this.members?this.members.indexOf(_53):-1;if(_16!=-1){var _6=this.$55a;_6[0]="member";_6[2]=_16;_6[4]=_53.getClassName();return _6.join(isc.emptyString)}
return this.invokeSuper(isc.Layout,"getStandardChildLocator",_53)},$558:{member:"members",peer:"peers",child:"children"}})}
if(isc.Window){isc.Window.addProperties({containsLocatorChild:function(_53){return(this.items&&this.items.contains(_53))},getStandardChildLocator:function(_53){if(this.items&&this.items.contains(_53)){var _6=this.$55a;_6[0]="item";_6[2]=this.items.indexOf(_53);_6[4]=_53.getClassName();return _6.join(isc.emptyString)}
return this.invokeSuper(isc.Window,"getStandardChildLocator",_53)},$558:{item:"items",member:"members",peer:"peers",child:"children"}})}
if(isc.SectionStack){$55b:["section[",,"]/item[",,'][Class="',,'"]'],isc.SectionStack.addProperties({getStandardChildLocator:function(_53){var _17=this.sections?this.sections.indexOf(_53):-1;if(_17!=-1){var _6=this.$55a;_6[0]="section";_6[2]=_17
_6[4]=_53.getClassName();return _6.join(isc.emptyString)}
var _18=this.sections||[];for(var i=0;i<_18.length;i++){var _20=_18[i].items,_21=_20?_20.indexOf(_53):-1;if(_21!=-1){var _6=this.$55b;_6[2]=i;_6[3]=_21;_6[5]=_53.getClassName();return _6.join(isc.emptyString)}}
return this.invokeSuper(isc.Window,"getStandardChildLocator",_53)},$558:{section:"sections",member:"members",peer:"peers",child:"children"},getChildFromLocatorSubstring:function(_53){if(isc.isA.Canvas(this[_53]))return this[_53]
var _10=_53.match("section\\[(\\d+)\\]/item\\[(\\d+)\\]\\[Class=\"(.+)\"\\]");if(_10){var _17=_10[1],_21=_10[2],_12=_10[3];_17=parseInt(_17);_21=parseInt(_21);if(!isc.isA.Number(_17)||!isc.isA.Number(_21)){this.logWarn("AutoTest.getElement() - didn't understand locator substring:"+_53);return null}
if(!this.sections||!this.sections[_17]||!this.sections[_17].items||!this.sections[_17].items[_21])
{this.logWarn("AutoTest.getElement(): unable to find section "+_17+", item:"+_21+" requested by locator:"+_53);return null}
var _22=this.sections[_17].items[_21];if(!isc.isA[_12]||!isc.isA[_12](_22)){this.logWarn("AutoTest.getElement(): locator substring:"+_53+" gave component of class:"+_22.getClassName())}
return _22}
var _8;for(var _9 in this.$558){_8=this.$559(_53,_9,this.$558[_9]);if(_8)break}
return _8}})}
if(isc.StretchImg){isc.StretchImg.addProperties({getInteriorLocator:function(_15){var _23=_15,_24=this.getHandle(),_25=this.getCanvasName();while(_15&&_15!=_24&&_15.getAttribute){var _26=_15.getAttribute("name");if(_26&&_26.startsWith(_25)){return _26.substring(_25.length)}
_15=_15.parentNode}
return this.Super("getInteriorLocator",[_23])},getInnerElementFromSplitLocator:function(_53){if(_53&&_53.length==1){var _27=this.getImage(_53[0]);if(_27)return _27}
return this.Super("getInnerElementFromSplitLocator",arguments)}})}
if(isc.DynamicForm){isc.DynamicForm.addProperties({getInteriorLocator:function(_15){var _28=isc.DynamicForm.$mu(_15,this);if(!_28.item)return this.Super("getInteriorLocator",arguments);var _22=_28.item,_29=["item[",(_22.name?"name='"+_22.name+"'":"index='"+this.items.indexOf(_22)+"'"),'][Class="',_22.getClassName(),'"]/'];if(_28.overElement)_29[_29.length]="element";else if(_28.overTitle)_29[_29.length]="title";else if(_28.overTextBox)_29[_29.length]="textbox";else if(_28.overControlTable)_29[_29.length]="controltable";else if(_28.overIcon)_29[_29.length]="[icon='"+_28.overIcon+"']"
return _29.join(isc.emptyString)},getChildLocator:function(_53){if(_53.canvasItem){var _22=_53.canvasItem;return["item[",(_22.name?"name='"+_22.name+"'":"index='"+this.items.indexOf(_22)+"'"),'][Class="',_22.getClassName(),'"]/',"canvas"].join(isc.emptyString)}
return this.Super("getChildLocator",arguments)},getInnerElementFromSplitLocator:function(_53){if(!_53||_53.length==0){return this.getHandle()}
var _30=_53[0],_31=_30.contains("name="),_10=_30.match("item\\["+(_31?"name='":"index='")+"(.+)'\\]\\[Class=\"(.+)\"\\]");if(_10){var _32=_10[1],_33=_10[2];var _22=this.getItem(_32);if(!_22){this.logWarn("AutoTest.getElement(): Unable to find item with identifier"+_32+", from locator:"+_30);return this.getHandle()}
if(!isc.isA[_33]||!isc.isA[_33](_22)){this.logWarn("AutoTest.getElement(): identifier:"+_30+" returned and item of class:"+_22.getClassName())}
_53.removeAt(0);return _22.getInnerElementFromSplitLocator(_53)}
return this.getHandle()}});isc.FormItem.addProperties({getInnerElementFromSplitLocator:function(_53){if(_53&&_53.length>0){var _14=_53[0];if(_14=="element")return this.getDataElement();if(_14=="title")return this.form.getTitleCell(this);if(_14=="textbox")return this.$15h();if(_14=="controltable")return this.$56a();if(_14=="canvas"){if(this.canvas){_53.removeAt(0);return this.canvas.getElementFromSplitLocator(_53)}}
var _34=_14.match("\\[icon='(.+)'\\]"),_35=_14?_14[1]:null;if(_35){return this.$16v(_35)}}}})}
if(isc.GridRenderer){isc.GridRenderer.addProperties({getInteriorLocator:function(_15){var _23=_15,_24=this.getHandle(),_36=this.getTableElement();if(!_36)return isc.emptyString;var _37=_36.rows,_38,_39,_40,_41="tr",_42="TR",_43="td",_44="TD";while(_15&&_15!=_36&&_15!=_24){_38=_15.tagName;if(_38==_43||_38==_44){_40=_15}
if(_38==_41||_38==_42){_39=_15}
_15=_15.parentNode}
if(!_39||!_40)return this.Super("getInteriorLocator",[_23]);var _37=_36.rows,_45,_46;for(var i=0;i<_37.length;i++){if(_37[i]==_39){_45=i;break}}
var _47=_39.cells,_48,_49;for(var i=0;i<_47.length;i++){if(_47[i]==_40){_48=i;break}}
_46=_45+(this.$252||0)
_49=_48+(this.$254||0);return"row"+_46+"/col"+_49},getInnerElementFromSplitLocator:function(_53){if(!_53||_53.length==0)return this.getHandle();if(_53.length==2){var _45=parseInt(_53[0].substring(3)),_48=parseInt(_53[1].substring(3));if(isc.isA.Number(_45)&&isc.isA.Number(_48)){if(this.$29p())return null;return this.getTableElement(_45,_48)}}
return this.Super("getInnerElementFromSplitLocator",arguments)}})}
if(isc.ListGrid){isc.ListGrid.addProperties({containsLocatorChild:function(_53){if(_53==this.body||_53==this.frozenBody||_53==this.$286)
{return true}
return this.Super("containsLocatorChild",arguments)},getStandardChildLocator:function(_53){if(_53==this.body)return"body";if(_53==this.frozenBody)return"frozenBody";if(_53==this.$286)return"$286";return this.Super("getStandardChildLocator",arguments)}})}
if(isc.TreeGrid){isc.TreeGridBody.addProperties({getInteriorLocator:function(_15){var _23=_15;var _24=this.getHandle(),_50=this.getTableElement();if(!_15||!_24||!_50)return isc.emptyString;var _51=this.grid.getCanvasName()+this.grid.$34l,_45,_48;while(_15!=this.tableElement&&_15!=_24&&_15.getAttribute){var _26=_15.getAttribute("name");if(_26&&_26.startsWith(_51)){_45=_26.substring(_51.length);_48=this.grid.getTreeFieldNum();return"row"+_45+"/col"+_48+"/open"}
_15=_15.parentNode}
return this.Super("getInteriorLocator",[_23])},getInnerElementFromSplitLocator:function(_53){if(!_53||_53.length==0)return this.getHandle();if(_53.length==3&&_53[2]=="open"){if(this.$29p())return null;var _45=parseInt(_53[0].substring(3)),_48=parseInt(_53[1].substring(3));var _52=this.grid.$34l+_45,_27=this.grid.getImage(_52);if(_27)return _27}
return this.Super("getInnerElementFromSplitLocator",arguments)}})}
if(isc.StatefulCanvas){isc.StatefulCanvas.addProperties({getInnerElementFromSplitLocator:function(_53){if(_53&&this.label){return this.label.getInnerElementFromSplitLocator(_53)}
return this.Super("getInnerElementFromSplitLocator",arguments)}})}}
isc.Page.setEvent("load","isc.ApplyAutoTestMethods()");isc.Page.logInfo("SmartClient Core ("+isc.version+" "+isc.buildDate+") initialized: "+(isc.timeStamp()-isc.$d)+"ms");isc.Page.logInfo("document.compatMode: "+document.compatMode);if(isc.Log.hasFireBug()){isc.Log.logWarn("NOTE: Firebug is enabled. Firebug greatly slows the performance of "+"applications that make heavy use of JavaScript. Isomorphic highly recommends Firebug "+"for troubleshooting, but Firebug and other development tools should be disabled when "+"assessing the real-world performance of SmartClient applications.")}
isc._moduleEnd=isc._Core_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('Core module init time: ' + (isc._moduleEnd-isc._moduleStart) + 'ms','loadTime');}else{if(window.isc && isc.Log && isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'Core'.");}

/*

  SmartClient Ajax RIA system
  Version 7.0beta4/LGPL Development Only (2009-02-24)

  Copyright 2000-2007 Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE EVALUATION LICENSE AGREEMENT. If you have received this file
     without an Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/isc_eval_license_050316.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  EVALUATION ONLY
     This software is provided for limited evaluation purposes only. You must
     acquire a deployment license from Isomorphic Software in order to use
     the SmartClient system, or any portion thereof, in any non-evaluation
     application, including internal or non-commercial applications.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

