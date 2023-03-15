function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
        {
            hh=12;
        }
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
    else if(mo==3)
    {
        mo="apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="jul"
    }
    else if(mo==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else 
    {
        mo="dec"
    }
    var fullTime=hh+":"+mm+":"+ss+" "+am_pm
    var fullDate=dd+"/"+mo+"/"+yy
    switch(day)
    {
        case 0:
            day="sunday"
            document.getElementById("a").style.backgroundImage="URL(./sun.jpg)"
            break;
            case 1:
            day="monday"
            document.getElementById("a").style.backgroundImage="URL(./monday.jpg)"
            break;
            case 2:
            day="tuesday"
            document.getElementById("a").style.backgroundImage="URL(./tue.jpg)"
            break;
            case 3:
            day="wednesday"
            document.getElementById("a").style.backgroundImage="URL(./wed.jpg)"
            break;
            case 4:
            day="thursday"
            document.getElementById("a").style.backgroundImage="URL(./thr.jpg)"
            break;
            case 5:
            day="friday"
            document.getElementById("a").style.backgroundImage="URL(./fri.jpg)"
            break;
            case 6:
            day="saturday"
            document.getElementById("a").style.backgroundImage="URL(./sat.jpg)"
            break;
    }
document.getElementById("Date").innerHTML=fullDate
document.getElementById("Time").innerHTML=fullTime
document.getElementById("Day").innerHTML=day
var refreshtheclock=setTimeout(function(){clock()},1000)
}
function greet()
{
    var greettime=new Date()
    var time=greettime.getTime()
    if(time>=6&&time<12)
    {
        Document.getElementById("textgreet").innerHTML="good morning"
    }
    else if(time>=12&&time<16)
    {
        Document.getElementById("textgreet").innerHTML="good afternoon"
    }
    else{
        Document.getElementById("textgreet").innerHTML="good evening"
    }
    document.getElementById("greet").removeAttribute("style")
}
var greettimeout=settimeout(greet,5000)
function closetab()
{
    document.getElementById("greet").setAttribute("style","display:none")
}
