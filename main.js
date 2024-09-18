


// window.addEventListener("scroll",function(event){
//    var scroll=this.scrollY;
//    console.log(scroll);
//    var title=document.getElementsByClassName('mail');
//    if(scroll>2590)
//    {
//     title.classList.add('start');
//    }
// });
function toggleMobileMenu(menu)
{
  menu.classList.toggle('open');
}

const num=1;
document.getElementsByClassName('mail')[0].addEventListener("click",function start( )

{           if(num==1)
          {
             document.getElementsByClassName('mail')[0].style.animationIterationCount='0';
             num=0;
          }
          else{
            document.getElementsByClassName('mail')[0].style.animationIterationCount='infinite';
            num=1;
          }
});


const accordion=document.getElementsByClassName('content-container');

for(i=0;i<accordion.length;i++)
{
    accordion[i].addEventListener('click',function()
{
    this.classList.toggle('active');
})
}
document.getElementById("journey1").addEventListener('click',(e)=>{
    confetti({
        particleCount:1200,
        spread:500,
        origin:{
            x:0.5,
            y:0.7
        },
    })
});

document.getElementById("journey2").addEventListener('click',(e)=>{
    confetti({
        particleCount:1200,
        spread:500,
        origin:{
            x:0.5,
            y:0.7
        },
    })
});
document.getElementById("journey3").addEventListener('click',(e)=>{
    confetti({
        particleCount:1200,
        spread:500,
        origin:{
            x:0.5,
            y:0.7
        },
    })
});
document.getElementById("journey4").addEventListener('click',(e)=>{
    confetti({
        particleCount:1200,
        spread:500,
        origin:{
            x:0.5,
            y:0.7
        },
    })
});

document.getElementById('coding').addEventListener('click',codefunc);
function codefunc(){

    document.getElementById("changeref").href = "index.html";
    document.getElementById("changeref1").href = "index.html";
    document.getElementById("changeget").href = "#set2";
    var xhr=new XMLHttpRequest();
    xhr.open('GET','coding.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
            {
            document.getElementsByClassName('banner')[0].style.display="none";
            document.getElementById('main').innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};

document.getElementById('techni').addEventListener('click',codefunt);
function codefunt(){
   
    document.getElementById("changeref").href = "index.html";
    document.getElementById("changeref1").href = "index.html";
    document.getElementById("changeget").href = "#set2";
    var xhr=new XMLHttpRequest();
    xhr.open('GET','technical.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
           
            document.getElementsByClassName('banner')[0].style.display="none";
            document.getElementById('main').innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};
document.getElementById('quant').addEventListener('click',codefunq);
function codefunq(){
    document.getElementById("changeref").href = "index.html";
    document.getElementById("changeref1").href = "index.html";
    document.getElementById("changeget").href = "#set2";
    document.getElementById("changeget1").href="#set2";
    var xhr=new XMLHttpRequest();
    xhr.open('GET','quants.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
           
            document.getElementsByClassName('banner')[0].style.display="none";
            document.getElementById('main').innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};
document.getElementById('logic').addEventListener('click',codefunl);
function codefunl(){
    
    document.getElementById("changeref").href = "index.html";
    document.getElementById("changeref1").href = "index.html";
    document.getElementById("changeget").href = "#set2";
    var xhr=new XMLHttpRequest();
    xhr.open('GET','logical.html',true);
    xhr.onload=function()
    {
        if(this.status==200)
        {
            
            document.getElementsByClassName('banner')[0].style.display="none";
            document.getElementById('main').innerHTML=this.responseText;
        }
        else{
            console.log("error occured");
        }
    }
    xhr.send();
};





