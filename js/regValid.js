(function($){
    var rules = {
        "require" : function(ele,value){
            var res = {result:true};
            if(!value){
                res.result = false;
                res.message = "必须填写";
            }
            return res;
        },
        "regex" : function(ele,value){
            var res = {result:true};
            var regex = ele.data("regex");
            if(!(new RegExp(regex).test(value))){
                res.result = false;
                res.message = ele.data("regex-msg")||"验证不通过";
            }
            return res;
        }
    };
    $.fn.regValidation = function(ops){
        this.options = ops;
        var $eles = $('input[type=text]',this);
        $eles.on('blur',function(){
            var $this = $(this);//当前被验证的表单元素
            var val = this.value;//当前值
            var res = true;//验证结果默认为true
            $.each(rules,function(key,func){
                if($this.data(key)){
                    res = func($this,val);
                    return res.result;
                }
            });
            if(!res.result){
                alert('元素验证失败:'+res.message);
            }
        })
    }
})($);
$("#register").regValidation({});
/*返回上一页*/
function return_prepage()
{
    if(window.document.referrer==""||window.document.referrer==window.location.href)
    {
        window.location.href="{dede:type}[field:typelink /]{/dede:type}";
    }else
    {
        window.location.href=window.document.referrer;
    }
}
