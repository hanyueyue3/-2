//category
$(function(){
    //点击a标签，让下面的ul显示，并且其他的ul滑出
   $('#category').on('click','.category-ul>li>a',function(){
       //$(this)指的是a标签
       $(this).parent().find('ul').toggle();
       $(this).parent().siblings().find('ul').slideUp();
       var titleId=$(this).attr('data-title-id');
       //console.log(titleId);
       var $that=$(this);
       categoryProduct(titleId,$that);
   });
    categoryTitle();
});

//后台获取a标签中的内容，并渲染页面
function categoryTitle(){
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcategorytitle',
        success:function(data){
           var html=template('categoryTitle',data);
            $('.category-ul').html(html);
        }
    })
}

//后台获取伸缩li中的数据，并渲染到页面
function categoryProduct(titleId,$that){
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcategory?titleid='+titleId,
        success:function(data){
            //console.log(data);
            var html=template('categoryProduct',data);
            $that.siblings('ul').html(html);
        }
    })
}



















