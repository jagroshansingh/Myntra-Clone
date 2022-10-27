let redirect=document.querySelectorAll("#drop>div>div>p")
    redirect.forEach(function(el)
   {
        el.addEventListener("click",function()
        {
            location.href="../day-3/product_page.html"
        })
    }) 

    //for navbar major categories
    let div=document.querySelector("#drop")
    let cat=document.querySelectorAll("#nav_cat>div")
    cat.forEach(function(el)
    {
        el.addEventListener("mouseover",function()
        {
        el.style.borderBottom="solid red"
        div.style.display="block"
        })
        el.addEventListener("mouseout",function()
        {
        el.style.borderBottom="none";
        div.style.display="none"       
        })
    })
     
    div.addEventListener("mouseover",function()
    {
        div.style.display="block"
    })
    div.addEventListener("mouseout",function()
    {
        div.style.display="none"
    })
    
    //for profile tab
    let nav_profile=document.querySelector("#nav_profile")
    let profile_drop=document.querySelector("#profile_drop")
    nav_profile.addEventListener("mouseover",function()
    {
        profile_drop.style.display="block"
        nav_profile.style.borderBottom="solid red"

    })
    nav_profile.addEventListener("mouseout",function()
    {
        profile_drop.display="none"
        nav_profile.style.borderBottom="none"
        
    })
    
    profile_drop.addEventListener("mouseover",function()
    {
        profile_drop.style.display="block"
        nav_profile.style.borderBottom="solid red"

    })
    profile_drop.addEventListener("mouseout",function()
    {
        profile_drop.style.display="none"
        nav_profile.style.borderBottom="none"
    })
