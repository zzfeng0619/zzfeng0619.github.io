function share_(){let url=window.location.origin+window.location.pathname;try{var title=document.title,subTitle=title.endsWith("| Fomalhaut🥝")?title.substring(0,title.length-14):title;navigator.clipboard.writeText("Fomalhaut🥝的站内分享\n标题："+subTitle+"\n链接："+url+"\n欢迎来访！🍭🍭🍭"),new Vue({data:function(){this.$notify({title:"成功复制分享信息🎉",message:"您现在可以通过粘贴直接跟小伙伴分享了！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})}catch(err){console.error("复制失败！",err)}}function share(){debounce(share_,300)}