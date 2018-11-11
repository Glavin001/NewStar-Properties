// Created by iWeb 3.0.1 local-build-20090620

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.newstarproperties.ca/Cole_Harbour_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.newstarproperties.ca',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.newstarproperties.ca',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,54),new IWSize(211,245),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-3,3,6,169),url:'Cole_Harbour_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'Cole_Harbour_files/stroke_1.png'},{rect:new IWRect(3,-3,169,6),url:'Cole_Harbour_files/stroke_2.png'},{rect:new IWRect(172,-3,6,6),url:'Cole_Harbour_files/stroke_3.png'},{rect:new IWRect(172,3,6,169),url:'Cole_Harbour_files/stroke_4.png'},{rect:new IWRect(172,172,6,6),url:'Cole_Harbour_files/stroke_5.png'},{rect:new IWRect(3,172,169,6),url:'Cole_Harbour_files/stroke_6.png'},{rect:new IWRect(-3,172,6,6),url:'Cole_Harbour_files/stroke_7.png'}],new IWSize(175,175)),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),reflection_1:new IWReflection({opacity:0.50,offset:1.00}),reflection_2:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Cole_Harbour_files/Cole_HarbourMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();Widget.onload();fixupIECSS3Opacity('id5');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
