   
    // 1重置bg的大小与浏览器浏览器窗口一致
        var bg=document.getElementsByClassName('bg')[0];
        var w=window.innerWidth;
        var h=window.innerHeight;
        bg.style.width=w+'px';//设置bg大小与当前浏览器窗口大小一致
        bg.style.height=h+'px';
        //重置bg大小 bg随浏览器随浏览器窗口大小变化而变化
        window.onresize=function(){
            bg.width=w=window.innerWidth;
            bg.height=h=window.innerHeight;
            bg.style.width=w+'px';//设置bg大小与浏览器窗口大小一致
            bg.style.height=h+'px';
        }

    
        //2 移除每个key的样式
        var keys=document.querySelectorAll('.key');//获取所有的key
        
        // 3播放事件函数
        function play(e){
            var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);//获取d当前audio的keyCode
            var key=document.querySelector(`.key[data-key="${e.keyCode}"]`);//获取当前key的data-key的keyCode
            if(!audio){return false}
            audio.currentTime=0;//设置时间位置为0
            audio.play();//播放对应的data-key的audio A65对应的audio65
            // 移除所有的style
            Array.prototype.slice.call(keys,0).forEach(function(item) {
                item.removeAttribute('style');
             });
            // 添加style样式
            key.setAttribute("style",
            "transform:scale(1.2); border-color:rgba(255,165 ,0,0.8);box-shadow:0 0 5px rgba(255,140 ,0,0.8);");
        
        }
        // 4 暂停事件
        function pause(e){
            var key=document.querySelector(`.key[data-key="${e.keyCode}"]`);//获取当前key的data-key的keyCode
            key.removeAttribute('style');
        }
        // 3 绑定键盘事件
        window.addEventListener('keydown',play);
        // 4 绑定暂停事件
        window.addEventListener('keyup',pause);
        
        

       
    



    