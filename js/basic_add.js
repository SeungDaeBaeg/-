$(function() {
    $(".box01 img").hide();
    $(".box01_01").show();
    $(".popboxWrap").hide();
    $(".box03").show();
    $(".box04").show();
    $(".box05").show();
    $(".box06").show();
    $(".box07").hide();
    $(".box04_edit").show();
    $(".box05_edit").show();
    $(".box06_edit").show();
    $(".box07_edit").show();
    $(".box08_edit").hide();
    $(".dataWrap").hide();
    $(".dataWrap_none").show();

    $("#SavePart").removeClass("img_list02");
    $("#SavePart").removeClass("img_list03");
    $("#SavePart").addClass("img_list01");

    $(".lp03_text01_color").val("b7213e");
    $(".lp03_text04_color").val("303030");
    $(".img_list01 .box06 div .color").css("color","b7213e");
    $(".ui-button-text").css("background","fff");
    $(".data01").on("click",function(){
        $(".box01_05a").show();
        $(".box01_05b").hide();
        $(".data01").css("background","#2f2e2e");
        $(".data02").css("background","#454545");
    });
    $(".data02").on("click",function(){
        $(".box01_05a").hide();
        $(".box01_05b").show();
        $(".data01").css("background","#454545");
        $(".data02").css("background","#2f2e2e");
    });
    $(".text_edit_btn01").on("click", function() {
        $(".text_edit_btn01").addClass("text_edit_btn_on");
        $(".text_edit_btn02").removeClass("text_edit_btn_on");
        $(".text_contents01").addClass("text_contents01_on");
        $(".text_edit_btnWrap").addClass("text_edit_btnWrap_on");
        $(".lp03_text04_box").addClass("lp03_text04_box_off");
        $(".prettyprint_02").addClass("prettyprint_02_off");
    });
    $(".text_edit_btn02").on("click", function() {
        $(".text_edit_btn01").removeClass("text_edit_btn_on");
        $(".text_edit_btn02").addClass("text_edit_btn_on");
        $(".text_contents01").removeClass("text_contents01_on");
        $(".text_edit_btnWrap").removeClass("text_edit_btnWrap_on");
        $(".lp03_text04_box").removeClass("lp03_text04_box_off");
        $(".prettyprint_02").removeClass("prettyprint_02_off");
    });

    $(".text_edit_btn03").on("click", function() {
        $(".text_edit_btn03").addClass("text_edit_btn_on");
        $(".text_edit_btn04").removeClass("text_edit_btn_on");
        $(".lp03_text04_box_span03_data_w").css("display","none");
        $(".lp03_text04_box_span03_data_5").css("display","block");
    });
    $(".text_edit_btn04").on("click", function() {
        $(".text_edit_btn03").removeClass("text_edit_btn_on");
        $(".text_edit_btn04").addClass("text_edit_btn_on");
        $(".lp03_text04_box_span03_data_w").css("display","block");
        $(".lp03_text04_box_span03_data_5").css("display","none");
    });

    $(".text_edit_btn05").on("click", function() {
        $(".text_edit_btn05").addClass("text_edit_btn_on");
        $(".text_edit_btn06").removeClass("text_edit_btn_on");
        $(".lp03_text04_box_spanWrap").css("margin-left","0px");
        $(".alarm").css("display","block");
    });
    $(".text_edit_btn06").on("click", function() {
        $(".text_edit_btn05").removeClass("text_edit_btn_on");
        $(".text_edit_btn06").addClass("text_edit_btn_on");
        $(".lp03_text04_box_spanWrap").css("margin-left","10px");
        $(".alarm").css("display","none");
    });

    window.addEventListener("keyup", function(e) {
        var text_edit_btnWrap_text = $('.text_edit_btnWrap_text').html();
        if (text_edit_btnWrap_text == "") {
            setTimeout(function(){$('.text_contents01').text("문구를 입력하세요.");}, 10);
        }else{
            $('.text_contents01').html(text_edit_btnWrap_text);
        }
    });
    //초기 설정
    var lp01_text01_box_size=24;
    var lp01_text01_box=$(".lp01_text01_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_story_size_box01 li").on("click",function(){
        var lp_story_size_box01=$(".lp_story_size_box01 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_story_size_box01==0){ //"+"를 클릭했을 경우
            lp01_text01_box_size--; //size가 1씩 증가
            lp01_text01_box.css("font-size",lp01_text01_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_story_size_box01==2){ //"-"를 클릭했을 경우
            lp01_text01_box_size++; //size가 1씩 감소
            lp01_text01_box.css("font-size",lp01_text01_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp01_text01_box_size=24; //디폴트로 다시 세팅
            lp01_text01_box.css("font-size","24px"); //글자 크기 속성이 49px로 변경됨.
        }
        $(".lp_story_size_box01_value span").text(lp01_text01_box_size); //글자크기 출력
    });
    //초기 설정
    var lp01_text01_box_margin=0;
    var lp01_move01_box=$(".lp01_text01_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_story_move_box01 li").on("click",function(){
        var lp_story_move_box01=$(".lp_story_move_box01 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_story_move_box01==0){ //"+"를 클릭했을 경우
            lp01_text01_box_margin--; //size가 1씩 증가
            lp01_move01_box.css("margin-top",lp01_text01_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_story_move_box01==2){ //"-"를 클릭했을 경우
            lp01_text01_box_margin++; //size가 1씩 감소
            lp01_move01_box.css("margin-top",lp01_text01_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp01_text01_box_margin= 0; //디폴트로 다시 세팅
            lp01_move01_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_story_move_box01_value span").text(lp01_text01_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기 사이즈
    function lp01_text01_box_size_add(){
        lp01_text01_box_size += 1;
        $('.lp_story_size_box01_value span').html(lp01_text01_box_size);
    }
    $(document).ready(function(){
        $('.lp_story_size_box01 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp01_text01_box_size_add , 150)
        })
        $('.lp_story_size_box01 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_story_size_box01 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기 사이즈
    function lp01_text01_box_size_sub(){
        lp01_text01_box_size -= 1;
        $('.lp_story_size_box01_value span').html(lp01_text01_box_size);
    }
    $(document).ready(function(){
        $('.lp_story_size_box01 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp01_text01_box_size_sub , 150)
        })
        $('.lp_story_size_box01 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_story_size_box01 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기 위치
    function lp01_text01_box_margin_add(){
        lp01_text01_box_margin += 1;
        $('.lp_story_move_box01_value span').html(lp01_text01_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_story_move_box01 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp01_text01_box_margin_add , 150)
        })
        $('.lp_story_move_box01 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_story_move_box01 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기 위치
    function lp01_text01_box_margin_sub(){
        lp01_text01_box_margin -= 1;
        $('.lp_story_move_box01_value span').html(lp01_text01_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_story_move_box01 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp01_text01_box_margin_sub , 150)
        })
        $('.lp_story_move_box01 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_story_move_box01 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })

    /** LP hotissue **/
        //초기 설정
    var lp02_text01_box_size=24;
    var lp02_text01_box=$(".lp02_text01_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_hotissue_size_box01 li").on("click",function(){
        var lp_hotissue_size_box01=$(".lp_hotissue_size_box01 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_hotissue_size_box01==0){ //"+"를 클릭했을 경우
            lp02_text01_box_size--; //size가 1씩 증가
            lp02_text01_box.css("font-size",lp02_text01_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_hotissue_size_box01==2){ //"-"를 클릭했을 경우
            lp02_text01_box_size++; //size가 1씩 감소
            lp02_text01_box.css("font-size",lp02_text01_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp02_text01_box_size=24; //디폴트로 다시 세팅
            lp02_text01_box.css("font-size","24px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_hotissue_size_box01_value span").text(lp02_text01_box_size); //글자크기 출력
    });
    //초기 설정
    var lp02_text01_box_margin=0;
    var lp02_move01_box=$(".lp02_text01_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_hotissue_move_box01 li").on("click",function(){
        var lp_hotissue_move_box01=$(".lp_hotissue_move_box01 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_hotissue_move_box01==0){ //"+"를 클릭했을 경우
            lp02_text01_box_margin--; //size가 1씩 증가
            lp02_move01_box.css("margin-top",lp02_text01_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_hotissue_move_box01==2){ //"-"를 클릭했을 경우
            lp02_text01_box_margin++; //size가 1씩 감소
            lp02_move01_box.css("margin-top",lp02_text01_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp02_text01_box_margin= 0; //디폴트로 다시 세팅
            lp02_move01_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_hotissue_move_box01_value span").text(lp02_text01_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp02_text01_box_size_add(){
        lp02_text01_box_size += 1;
        $('.lp_hotissue_size_box01_value span').html(lp02_text01_box_size);
    }
    $(document).ready(function(){
        $('.lp_hotissue_size_box01 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp02_text01_box_size_add , 150)
        })
        $('.lp_hotissue_size_box01 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_size_box01 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp02_text01_box_size_sub(){
        lp02_text01_box_size -= 1;
        $('.lp_hotissue_size_box01_value span').html(lp02_text01_box_size);
    }
    $(document).ready(function(){
        $('.lp_hotissue_size_box01 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp02_text01_box_size_sub , 150)
        })
        $('.lp_hotissue_size_box01 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_size_box01 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp02_text01_box_margin_add(){
        lp02_text01_box_margin += 1;
        $('.lp_hotissue_move_box01_value span').html(lp02_text01_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_hotissue_move_box01 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp02_text01_box_margin_add , 150)
        })
        $('.lp_hotissue_move_box01 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_move_box01 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp02_text01_box_margin_sub(){
        lp02_text01_box_margin -= 1;
        $('.lp_hotissue_move_box01_value span').html(lp02_text01_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_hotissue_move_box01 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp02_text01_box_margin_sub , 150)
        })
        $('.lp_hotissue_move_box01 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_move_box01 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })



    //초기 설정
    var lp02_text02_box_size=24;
    var lp02_text02_box=$(".lp02_text02_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_hotissue_size_box02 li").on("click",function(){
        var lp_hotissue_size_box02=$(".lp_hotissue_size_box02 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_hotissue_size_box02==0){ //"+"를 클릭했을 경우
            lp02_text02_box_size--; //size가 1씩 증가
            lp02_text02_box.css("font-size",lp02_text02_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_hotissue_size_box02==2){ //"-"를 클릭했을 경우
            lp02_text02_box_size++; //size가 1씩 감소
            lp02_text02_box.css("font-size",lp02_text02_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp02_text02_box_size=24; //디폴트로 다시 세팅
            lp02_text02_box.css("font-size","24px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_hotissue_size_box02_value span").text(lp02_text02_box_size); //글자크기 출력
    });
    //초기 설정
    var lp02_text02_box_margin=0;
    var lp02_move02_box=$(".lp02_text02_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_hotissue_move_box02 li").on("click",function(){
        var lp_hotissue_move_box02=$(".lp_hotissue_move_box02 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_hotissue_move_box02==0){ //"+"를 클릭했을 경우
            lp02_text02_box_margin--; //size가 1씩 증가
            lp02_move02_box.css("margin-top",lp02_text02_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_hotissue_move_box02==2){ //"-"를 클릭했을 경우
            lp02_text02_box_margin++; //size가 1씩 감소
            lp02_move02_box.css("margin-top",lp02_text02_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp02_text02_box_margin= 0; //디폴트로 다시 세팅
            lp02_move02_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_hotissue_move_box02_value span").text(lp02_text02_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp02_text02_box_size_add(){
        lp02_text02_box_size += 1;
        $('.lp_hotissue_size_box02_value span').html(lp02_text02_box_size);
    }
    $(document).ready(function(){
        $('.lp_hotissue_size_box02 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp02_text02_box_size_add , 150)
        })
        $('.lp_hotissue_size_box02 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_size_box02 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp02_text02_box_size_sub(){
        lp02_text02_box_size -= 1;
        $('.lp_hotissue_size_box02_value span').html(lp02_text02_box_size);
    }
    $(document).ready(function(){
        $('.lp_hotissue_size_box02 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp02_text02_box_size_sub , 150)
        })
        $('.lp_hotissue_size_box02 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_size_box02 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp02_text02_box_margin_add(){
        lp02_text02_box_margin += 1;
        $('.lp_hotissue_move_box02_value span').html(lp02_text02_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_hotissue_move_box02 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp02_text02_box_margin_add , 150)
        })
        $('.lp_hotissue_move_box02 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_move_box02 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp02_text02_box_margin_sub(){
        lp02_text02_box_margin -= 1;
        $('.lp_hotissue_move_box02_value span').html(lp02_text02_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_hotissue_move_box02 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp02_text02_box_margin_sub , 150)
        })
        $('.lp_hotissue_move_box02 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_move_box02 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //초기 설정
    var lp02_text03_box_size=30;
    var lp02_text03_box=$(".lp02_text03_box");
    var inter;
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_hotissue_size_box03 li").on("click",function(){
        var lp_hotissue_size_box03=$(".lp_hotissue_size_box03 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_hotissue_size_box03==0){ //"+"를 클릭했을 경우
            lp02_text03_box_size--; //size가 1씩 증가
            lp02_text03_box.css("font-size",lp02_text03_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_hotissue_size_box03==2){ //"-"를 클릭했을 경우
            lp02_text03_box_size++; //size가 1씩 감소
            lp02_text03_box.css("font-size",lp02_text03_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp02_text03_box_size=30; //디폴트로 다시 세팅
            lp02_text03_box.css("font-size","30px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_hotissue_size_box03_value span").text(lp02_text03_box_size); //글자크기 출력
    });
    //초기 설정
    var lp02_text03_box_margin=0;
    var lp02_move03_box=$(".lp02_text03_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_hotissue_move_box03 li").on("click",function(){
        var lp_hotissue_move_box03=$(".lp_hotissue_move_box03 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_hotissue_move_box03==0){ //"+"를 클릭했을 경우
            lp02_text03_box_margin--; //size가 1씩 증가
            lp02_move03_box.css("margin-top",lp02_text03_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_hotissue_move_box03==2){ //"-"를 클릭했을 경우
            lp02_text03_box_margin++; //size가 1씩 감소
            lp02_move03_box.css("margin-top",lp02_text03_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp02_text03_box_margin= 0; //디폴트로 다시 세팅
            lp02_move03_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_hotissue_move_box03_value span").text(lp02_text03_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp02_text03_box_size_add(){
        lp02_text03_box_size += 1;
        $('.lp_hotissue_size_box03_value span').html(lp02_text03_box_size);
    }
    $(document).ready(function(){
        $('.lp_hotissue_size_box03 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp02_text03_box_size_add , 150)
        })
        $('.lp_hotissue_size_box03 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_size_box03 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp02_text03_box_size_sub(){
        lp02_text03_box_size -= 1;
        $('.lp_hotissue_size_box03_value span').html(lp02_text03_box_size);
    }
    $(document).ready(function(){
        $('.lp_hotissue_size_box03 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp02_text03_box_size_sub , 150)
        })
        $('.lp_hotissue_size_box03 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_size_box03 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp02_text03_box_margin_add(){
        lp02_text03_box_margin += 1;
        $('.lp_hotissue_move_box03_value span').html(lp02_text03_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_hotissue_move_box03 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp02_text03_box_margin_add , 150)
        })
        $('.lp_hotissue_move_box03 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_move_box03 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp02_text03_box_margin_sub(){
        lp02_text03_box_margin -= 1;
        $('.lp_hotissue_move_box03_value span').html(lp02_text03_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_hotissue_move_box03 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp02_text03_box_margin_sub , 150)
        })
        $('.lp_hotissue_move_box03 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_hotissue_move_box03 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })

    /** LP TIP **/
        //초기 설정
    var lp03_text01_box_size=55;
    var lp03_text01_box=$(".lp03_text01_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_size_box01 li").on("click",function(){
        var lp_tip_size_box01=$(".lp_tip_size_box01 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_size_box01==0){ //"+"를 클릭했을 경우
            lp03_text01_box_size--; //size가 1씩 증가
            lp03_text01_box.css("font-size",lp03_text01_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_size_box01==2){ //"-"를 클릭했을 경우
            lp03_text01_box_size++; //size가 1씩 감소
            lp03_text01_box.css("font-size",lp03_text01_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text01_box_size=55; //디폴트로 다시 세팅
            lp03_text01_box.css("font-size","55px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_tip_size_box01_value span").text(lp03_text01_box_size); //글자크기 출력
    });
    //초기 설정
    var lp03_text01_box_margin=0;
    var lp03_move01_box=$(".lp03_text01_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_move_box01 li").on("click",function(){
        var lp_tip_move_box01=$(".lp_tip_move_box01 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_move_box01==0){ //"+"를 클릭했을 경우
            lp03_text01_box_margin--; //size가 1씩 증가
            lp03_move01_box.css("margin-top",lp03_text01_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_move_box01==2){ //"-"를 클릭했을 경우
            lp03_text01_box_margin++; //size가 1씩 감소
            lp03_move01_box.css("margin-top",lp03_text01_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text01_box_margin= 0; //디폴트로 다시 세팅
            lp03_move01_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_tip_move_box01_value span").text(lp03_text01_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp03_text01_box_size_add(){
        lp03_text01_box_size += 1;
        $('.lp_tip_size_box01_value span').html(lp03_text01_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box01 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text01_box_size_add , 150)
        })
        $('.lp_tip_size_box01 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box01 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text01_box_size_sub(){
        lp03_text01_box_size -= 1;
        $('.lp_tip_size_box01_value span').html(lp03_text01_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box01 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text01_box_size_sub , 150)
        })
        $('.lp_tip_size_box01 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box01 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp03_text01_box_margin_add(){
        lp03_text01_box_margin += 1;
        $('.lp_tip_move_box01_value span').html(lp03_text01_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box01 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text01_box_margin_add , 150)
        })
        $('.lp_tip_move_box01 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box01 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text01_box_margin_sub(){
        lp03_text01_box_margin -= 1;
        $('.lp_tip_move_box01_value span').html(lp03_text01_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box01 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text01_box_margin_sub , 150)
        })
        $('.lp_tip_move_box01 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box01 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })



    //초기 설정
    var lp03_text02_box_size=18;
    var lp03_text02_box=$(".lp03_text02_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_size_box02 li").on("click",function(){
        var lp_tip_size_box02=$(".lp_tip_size_box02 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_size_box02==0){ //"+"를 클릭했을 경우
            lp03_text02_box_size--; //size가 1씩 증가
            lp03_text02_box.css("font-size",lp03_text02_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_size_box02==2){ //"-"를 클릭했을 경우
            lp03_text02_box_size++; //size가 1씩 감소
            lp03_text02_box.css("font-size",lp03_text02_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text02_box_size=18; //디폴트로 다시 세팅
            lp03_text02_box.css("font-size","18px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_tip_size_box02_value span").text(lp03_text02_box_size); //글자크기 출력
    });
    //초기 설정
    var lp03_text02_box_margin=0;
    var lp03_move02_box=$(".lp03_text02_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_move_box02 li").on("click",function(){
        var lp_tip_move_box02=$(".lp_tip_move_box02 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_move_box02==0){ //"+"를 클릭했을 경우
            lp03_text02_box_margin--; //size가 1씩 증가
            lp03_move02_box.css("margin-top",lp03_text02_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_move_box02==2){ //"-"를 클릭했을 경우
            lp03_text02_box_margin++; //size가 1씩 감소
            lp03_move02_box.css("margin-top",lp03_text02_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text02_box_margin= 0; //디폴트로 다시 세팅
            lp03_move02_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_tip_move_box02_value span").text(lp03_text02_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp03_text02_box_size_add(){
        lp03_text02_box_size += 1;
        $('.lp_tip_size_box02_value span').html(lp03_text02_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box02 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text02_box_size_add , 150)
        })
        $('.lp_tip_size_box02 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box02 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text02_box_size_sub(){
        lp03_text02_box_size -= 1;
        $('.lp_tip_size_box02_value span').html(lp03_text02_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box02 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text02_box_size_sub , 150)
        })
        $('.lp_tip_size_box02 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box02 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp03_text02_box_margin_add(){
        lp03_text02_box_margin += 1;
        $('.lp_tip_move_box02_value span').html(lp03_text02_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box02 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text02_box_margin_add , 150)
        })
        $('.lp_tip_move_box02 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box02 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text02_box_margin_sub(){
        lp03_text02_box_margin -= 1;
        $('.lp_tip_move_box02_value span').html(lp03_text02_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box02 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text02_box_margin_sub , 150)
        })
        $('.lp_tip_move_box02 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box02 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })


    //초기 설정
    var lp03_text03_box_size=14;
    var lp03_text03_box=$(".lp03_text03_box");
    var inter;
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_size_box03 li").on("click",function(){
        var lp_tip_size_box03=$(".lp_tip_size_box03 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_size_box03==0){ //"+"를 클릭했을 경우
            lp03_text03_box_size--; //size가 1씩 증가
            lp03_text03_box.css("font-size",lp03_text03_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_size_box03==2){ //"-"를 클릭했을 경우
            lp03_text03_box_size++; //size가 1씩 감소
            lp03_text03_box.css("font-size",lp03_text03_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text03_box_size=14; //디폴트로 다시 세팅
            lp03_text03_box.css("font-size","14px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_tip_size_box03_value span").text(lp03_text03_box_size); //글자크기 출력
    });
    //초기 설정
    var lp03_text03_box_margin=0;
    var lp03_move03_box=$(".lp03_text03_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_move_box03 li").on("click",function(){
        var lp_tip_move_box03=$(".lp_tip_move_box03 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_move_box03==0){ //"+"를 클릭했을 경우
            lp03_text03_box_margin--; //size가 1씩 증가
            lp03_move03_box.css("margin-top",lp03_text03_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_move_box03==2){ //"-"를 클릭했을 경우
            lp03_text03_box_margin++; //size가 1씩 감소
            lp03_move03_box.css("margin-top",lp03_text03_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text03_box_margin= 0; //디폴트로 다시 세팅
            lp03_move03_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_tip_move_box03_value span").text(lp03_text03_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp03_text03_box_size_add(){
        lp03_text03_box_size += 1;
        $('.lp_tip_size_box03_value span').html(lp03_text03_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box03 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text03_box_size_add , 150)
        })
        $('.lp_tip_size_box03 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box03 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text03_box_size_sub(){
        lp03_text03_box_size -= 1;
        $('.lp_tip_size_box03_value span').html(lp03_text03_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box03 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text03_box_size_sub , 150)
        })
        $('.lp_tip_size_box03 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box03 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp03_text03_box_margin_add(){
        lp03_text03_box_margin += 1;
        $('.lp_tip_move_box03_value span').html(lp03_text03_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box03 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text03_box_margin_add , 150)
        })
        $('.lp_tip_move_box03 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box03 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text03_box_margin_sub(){
        lp03_text03_box_margin -= 1;
        $('.lp_tip_move_box03_value span').html(lp03_text03_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box03 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text03_box_margin_sub , 150)
        })
        $('.lp_tip_move_box03 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box03 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })



    //초기 설정
    var lp03_text04_box_size=24;
    var lp03_text04_box=$(".lp03_text04_box");
    var inter;
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_size_box04 li").on("click",function(){
        var lp_tip_size_box04=$(".lp_tip_size_box04 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_size_box04==0){ //"+"를 클릭했을 경우
            lp03_text04_box_size--; //size가 1씩 증가
            lp03_text04_box.css("font-size",lp03_text04_box_size+"px"); //글자 크기 속성이 변경됨.
            $(".text_contents01").css("font-size",lp03_text04_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_size_box04==2){ //"-"를 클릭했을 경우
            lp03_text04_box_size++; //size가 1씩 감소
            lp03_text04_box.css("font-size",lp03_text04_box_size+"px"); //글자 크기 속성이 변경됨.
            $(".text_contents01").css("font-size",lp03_text04_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text04_box_size=24; //디폴트로 다시 세팅
            lp03_text04_box.css("font-size","24px"); //글자 크기 속성이 12px로 변경됨.
            $(".text_contents01").css("font-size","24px"); //글자 크기 속성이 변경됨.
        }
        $(".lp_tip_size_box04_value span").text(lp03_text04_box_size); //글자크기 출력
    });
    //초기 설정
    var lp03_text04_box_margin=0;
    var lp03_move04_box=$(".lp03_text04_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_move_box04 li").on("click",function(){
        var lp_tip_move_box04=$(".lp_tip_move_box04 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_move_box04==0){ //"+"를 클릭했을 경우
            lp03_text04_box_margin--; //size가 1씩 증가
            lp03_move04_box.css("margin-top",lp03_text04_box_margin+"px"); //글자 크기 속성이 변경됨.
            $(".text_contents01").css("margin-top",lp03_text04_box_margin+"px"); //마진이 다시 0px
        }else if(lp_tip_move_box04==2){ //"-"를 클릭했을 경우
            lp03_text04_box_margin++; //size가 1씩 감소
            lp03_move04_box.css("margin-top",lp03_text04_box_margin+"px"); //글자 크기 속성이 변경됨.
            $(".text_contents01").css("margin-top",lp03_text04_box_margin+"px"); //마진이 다시 0px
        }else{ //"0"를 클릭했을 경우
            lp03_text04_box_margin= 0; //디폴트로 다시 세팅
            lp03_move04_box.css("margin-top","0px"); //마진이 다시 0px
            $(".text_contents01").css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_tip_move_box04_value span").text(lp03_text04_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp03_text04_box_size_add(){
        lp03_text04_box_size += 1;
        $('.lp_tip_size_box04_value span').html(lp03_text04_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box04 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text04_box_size_add , 150)
        })
        $('.lp_tip_size_box04 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box04 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text04_box_size_sub(){
        lp03_text04_box_size -= 1;
        $('.lp_tip_size_box04_value span').html(lp03_text04_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box04 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text04_box_size_sub , 150)
        })
        $('.lp_tip_size_box04 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box04 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp03_text04_box_margin_add(){
        lp03_text04_box_margin += 1;
        $('.lp_tip_move_box04_value span').html(lp03_text04_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box04 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text04_box_margin_add , 150)
        })
        $('.lp_tip_move_box04 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box04 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text04_box_margin_sub(){
        lp03_text04_box_margin -= 1;
        $('.lp_tip_move_box04_value span').html(lp03_text04_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box04 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text04_box_margin_sub , 150)
        })
        $('.lp_tip_move_box04 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box04 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })




    //초기 설정
    var lp03_text05_box_size=21;
    var lp03_text05_box=$(".lp03_text05_box");
    var inter;
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_size_box05 li").on("click",function(){
        var lp_tip_size_box05=$(".lp_tip_size_box05 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_size_box05==0){ //"+"를 클릭했을 경우
            lp03_text05_box_size--; //size가 1씩 증가
            lp03_text05_box.css("font-size",lp03_text05_box_size+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_size_box05==2){ //"-"를 클릭했을 경우
            lp03_text05_box_size++; //size가 1씩 감소
            lp03_text05_box.css("font-size",lp03_text05_box_size+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text05_box_size=21; //디폴트로 다시 세팅
            lp03_text05_box.css("font-size","21px"); //글자 크기 속성이 12px로 변경됨.
        }
        $(".lp_tip_size_box05_value span").text(lp03_text05_box_size); //글자크기 출력
    });
    //초기 설정
    var lp03_text05_box_margin=0;
    var lp03_move05_box=$(".lp03_text05_box");
    //① 글자 크기의 버튼들을 클릭했을 때
    $(".lp_tip_move_box05 li").on("click",function(){
        var lp_tip_move_box05=$(".lp_tip_move_box05 li").index(this);  //클릭한 버튼의 인덱스 반환
        if(lp_tip_move_box05==0){ //"+"를 클릭했을 경우
            lp03_text05_box_margin--; //size가 1씩 증가
            lp03_move05_box.css("margin-top",lp03_text05_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else if(lp_tip_move_box05==2){ //"-"를 클릭했을 경우
            lp03_text05_box_margin++; //size가 1씩 감소
            lp03_move05_box.css("margin-top",lp03_text05_box_margin+"px"); //글자 크기 속성이 변경됨.
        }else{ //"0"를 클릭했을 경우
            lp03_text05_box_margin= 0; //디폴트로 다시 세팅
            lp03_move05_box.css("margin-top","0px"); //마진이 다시 0px
        }
        $(".lp_tip_move_box05_value span").text(lp03_text05_box_margin); //글자크기 출력
    });
    //누르고 있을때 더하기
    function lp03_text05_box_size_add(){
        lp03_text05_box_size += 1;
        $('.lp_tip_size_box05_value span').html(lp03_text05_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box05 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text05_box_size_add , 150)
        })
        $('.lp_tip_size_box05 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box05 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text05_box_size_sub(){
        lp03_text05_box_size -= 1;
        $('.lp_tip_size_box05_value span').html(lp03_text05_box_size);
    }
    $(document).ready(function(){
        $('.lp_tip_size_box05 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text05_box_size_sub , 150)
        })
        $('.lp_tip_size_box05 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_size_box05 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 더하기
    function lp03_text05_box_margin_add(){
        lp03_text05_box_margin += 1;
        $('.lp_tip_move_box05_value span').html(lp03_text05_box_margin); //값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box05 li:nth-child(3)').on('mousedown',function(){
            inter = setInterval(lp03_text05_box_margin_add , 150)
        })
        $('.lp_tip_move_box05 li:nth-child(3)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box05 li:nth-child(3)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })
    //누르고 있을때 빼기
    function lp03_text05_box_margin_sub(){
        lp03_text05_box_margin -= 1;
        $('.lp_tip_move_box05_value span').html(lp03_text05_box_margin);//값 갱신
    }
    $(document).ready(function(){
        $('.lp_tip_move_box05 li:nth-child(1)').on('mousedown',function(){
            inter = setInterval(lp03_text05_box_margin_sub , 150)
        })
        $('.lp_tip_move_box05 li:nth-child(1)').on('mouseup',function(){
            clearInterval(inter)
        })
        $('.lp_tip_move_box05 li:nth-child(1)').on('mouseleave',function(){
            clearInterval(inter)
        })
    })



    new TimelineMax().to('.box_edit_btn label', 3, {
        'background-position': '0 -42px',
        repeat: -1,
        ease: Linear.easeNone
    } );


    TweenLite.fromTo( $(".boxEdit"), 0.5, { opacity:0,x:-100}, {opacity:1,x:0,delay:0.2});
    TweenLite.fromTo( $(".boxImgWrap"), 0.5, { opacity:0,x:100}, {opacity:1,x:0,delay:0.7});

    $(".box_title").on("click",function() {
        var box_title_height = $(".box_title").outerHeight(true);
        if(box_title_height == 50) {
            TweenMax.to($(".box_title"), 0.2, {ease: Power0.easeNone,height: "180px"});
            $(".box_title li a").css('pointer-events', "auto");
            $(".box_title li a").css('width', "100%");
            $(".box_title li a").css('display', "block");
        }else{
            TweenMax.to($(".box_title"), 0.2, {ease: Power0.easeNone,height: "45px"});
            $(".box_title li a").css('pointer-events', "none");
            $(".box_title li a").css('width', "100%");
            $(".box_title li a").css('display', "block");
        }
    });


    $(".box_opacity01").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.0});
    });
    $(".box_opacity02").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.1});
    });
    $(".box_opacity03").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.2});
    });
    $(".box_opacity04").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.3});
    });
    $(".box_opacity05").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.4});
    });
    $(".box_opacity06").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.5});
    });
    $(".box_opacity07").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.6});
    });
    $(".box_opacity08").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.7});
    });
    $(".box_opacity09").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.8});
    });
    $(".box_opacity10").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 0.8});
    });
    $(".box_opacity11").on("click",function() {
        TweenMax.to($(".box01"), 0, {opacity: 1.0});
    });
    $(".box03 input").on('keydown', function(e){
        TweenMax.to($(".jbTableCell p"), 0, {display: "none"});
    });
    $(".box03_on input").on('keydown', function(e){
        var value = $(".box03 input").val().length;

        //실제 코드에는 상위돔에 집어넣어주세요.
        var inputWidth =  value * 50; // 글자 하나의 대략적인 크기
        $(".box03 input").css('width', inputWidth);

    });
    $(".lp01_text01").on('keydown', function(e){
        var lp01_text01 = $('.lp01_text01').val();
        $('.lp01_text01_box').text(lp01_text01);
    });
    $(".lp01_text02").on('keydown', function(e){
        var lp01_text02 = $('.lp01_text02').val();
        $('.lp01_text02_box').text(lp01_text02);
    });

    $(".lp02_text01").on('keydown', function(e){
        var lp02_text01 = $('.lp02_text01').val();
        $('.lp02_text01_box').text(lp02_text01);
    });
    $(".lp02_text02").on('keydown', function(e){
        var lp02_text02 = $('.lp02_text02').val();
        $('.lp02_text02_box').text(lp02_text02);
    });
    $(".lp02_text03").on('keydown', function(e){
        var lp02_text03 = $('.lp02_text03').val();
        $('.lp02_text03_box').text(lp02_text03);
    });

    $(".lp03_text01").on('keydown', function(e){
        var lp03_text01 = $('.lp03_text01').val();
        $('.lp03_text01_box').text(lp03_text01);
    });
    $(".lp03_text02").on('keydown', function(e){
        var lp03_text02 = $('.lp03_text02').val();
        $('.lp03_text02_box').text(lp03_text02);
    });
    $(".lp03_text03").on('keydown', function(e){
        var lp03_text03 = $('.lp03_text03').val();
        $('.lp03_text03_box').text(lp03_text03);
    });

    $(".lp03_text04").on('keydown', function(e){
        var lp03_text04 = $('.lp03_text04').val();
        $('.lp03_text04_box').text(lp03_text04);
    });

    $(".lp03_text05").on('keydown', function(e){
        var lp03_text05 = $('.lp03_text05').val();
        $('.lp03_text05_box').text(lp03_text05);
    });


    $(".lp03_text01").on('keydown', function(e){
        var lp03_text01 = $('.lp03_text01').val();
        $('.lp03_text01_box').text(lp03_text01);
    });
    $(".lp03_text02").on('keydown', function(e){
        var lp03_text02 = $('.lp03_text02').val();
        $('.lp03_text02_box').text(lp03_text02);
    });
    $(".lp03_text03").on('keydown', function(e){
        var lp03_text03 = $('.lp03_text03').val();
        $('.lp03_text03_box').text(lp03_text03);
    });
    $(".lp03_text04").on('keydown', function(e){
        var lp03_text04 = $('.lp03_text04').val();
        $('.lp03_text04_box').text(lp03_text03);
    });
    $(".lp03_text05").on('keydown', function(e){
        var lp03_text05 = $('.lp03_text05').val();
        $('.lp03_text05_box').text(lp03_text05);
    });

    setInterval(function() {
        var lp01_text01_color = $('.lp01_text01_color').val();
        TweenMax.to($(".lp01_text01_box"), 0, {color:"#lp01_text01_color"});
        $('.lp01_text01_box').css('color',lp01_text01_color);

        var lp02_text01_color = $('.lp02_text01_color').val(),lp02_text02_color = $('.lp02_text02_color').val(),lp02_text03_color = $('.lp02_text03_color').val();
        TweenMax.to($(".lp02_text01_box"), 0, {color:"#lp02_text01_color"});
        $('.lp02_text01_box').css('color',lp02_text01_color);
        $('.lp02_text01_box').css('border-color',lp02_text01_color);

        TweenMax.to($(".lp02_text02_box"), 0, {color:"#lp02_text02_color"});
        $('.lp02_text02_box').css('color',lp02_text02_color);

        TweenMax.to($(".lp02_text3_box"), 0, {color:"#lp02_text03_color"});
        $('.lp02_text03_box').css('color',lp02_text03_color);

        var lp03_text01_color = $('.lp03_text01_color').val(),lp03_text02_color = $('.lp03_text02_color').val(),lp03_text03_color = $('.lp03_text03_color').val();
        var lp03_text04_color = $('.lp03_text04_color').val();
        var lp03_text05_color = $('.lp03_text05_color').val();
        TweenMax.to($(".lp03_text01_box"), 0, {color:"#lp03_text01_color"});
        $('.lp03_text01_box').css('color',lp03_text01_color);
        $('.lp03_text01_box').css('border-color',lp03_text01_color);

        TweenMax.to($(".lp03_text02_box"), 0, {color:"#lp03_text02_color"});
        $('.lp03_text02_box').css('color',lp03_text02_color);

        TweenMax.to($(".lp03_text3_box"), 0, {color:"#lp03_text03_color"});
        $('.lp03_text03_box').css('color',lp03_text03_color);

        TweenMax.to($(".lp03_text4_box"), 0, {color:"#lp03_text04_color"});
        $('.text_contents01').css('color',lp03_text04_color);
        $('.text_contents01 div').css('color',lp03_text04_color);

        TweenMax.to($(".lp03_text5_box"), 0, {color:"#lp03_text05_color"});
    }, 100);


    $("#profile_pt02").on("click",function() {
        TweenMax.to($(".view_area02_logo"), 0, {display: "none"});
    });
    $(".box04_edit > ul li:nth-child(1)").on("click",function() {
        TweenMax.to($(".box04"), 0, {backgroundColor:"#50a654"});
    });
    $(".box04_edit > ul li:nth-child(2)").on("click",function() {
        TweenMax.to($(".box04"), 0, {backgroundColor:"#7184b7"});
    });
    $(".box04_edit > ul li:nth-child(3)").on("click",function() {
        TweenMax.to($(".box04"), 0, {backgroundColor:"#9d6cb7"});
    });
    $(".box04_edit > ul li:nth-child(4)").on("click",function() {
        TweenMax.to($(".box04"), 0, {backgroundColor:"#43c3a6"});
    });

    $(".lp02_box05_edit > ul li:nth-child(1)").on("click",function() {
       TweenMax.to($(".lp02_text02_box"), 0, {color:"#50a654"});
    });
    $(".lp02_box05_edit > ul li:nth-child(2)").on("click",function() {
        TweenMax.to($(".lp02_text02_box"), 0, {color:"#7184b7"});
    });
    $(".lp02_box05_edit > ul li:nth-child(3)").on("click",function() {
        TweenMax.to($(".lp02_text02_box"), 0, {color:"#9d6cb7"});
    });
    $(".lp02_box05_edit > ul li:nth-child(4)").on("click",function() {
        TweenMax.to($(".lp02_text02_box"), 0, {color:"#43c3a6"});
    });

    $(".lp_style li:nth-child(1)").on("click",function() {
        TweenMax.to($(".box02"), 0, {background:"#ffd200"});
    });
    $(".lp_style li:nth-child(2)").on("click",function() {
        TweenMax.to($(".box02"), 0, {background:"#fbcabc"});
    });
    $(".lp_style li:nth-child(3)").on("click",function() {
        TweenMax.to($(".box02"), 0, {background:"#b0e5d3"});
    });
    $(".lp_style li:nth-child(4)").on("click",function() {
        TweenMax.to($(".box02"), 0, {background:"#38abc0"});
    });
    $(".lp_style li:nth-child(5)").on("click",function() {
        TweenMax.to($(".box02"), 0, {background:"#6763d4"});
    });


    TweenMax.to($(".box_opacity011"), 2, {ease: Power0.easeNone,x:-5, repeat: -1, yoyo: true});
});




