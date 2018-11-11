// Created by iWeb 3.0.4 local-build-20121226

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.newstarproperties.ca/Before_%26_After_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.newstarproperties.ca',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.newstarproperties.ca',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(138,138),new IWSize(138,54),new IWSize(158,207),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-3,3,6,131),url:'Before_%26_After_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'Before_%26_After_files/stroke_1.png'},{rect:new IWRect(3,-3,131,6),url:'Before_%26_After_files/stroke_2.png'},{rect:new IWRect(134,-3,6,6),url:'Before_%26_After_files/stroke_3.png'},{rect:new IWRect(134,3,6,131),url:'Before_%26_After_files/stroke_4.png'},{rect:new IWRect(134,134,6,6),url:'Before_%26_After_files/stroke_5.png'},{rect:new IWRect(3,134,131,6),url:'Before_%26_After_files/stroke_6.png'},{rect:new IWRect(-3,134,6,6),url:'Before_%26_After_files/stroke_7.png'}],new IWSize(137,137)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Before_&_After_files/Before_&_AfterMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();Widget.onload();fixupIECSS3Opacity('id5');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
