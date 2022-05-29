
function Linear()
{
    c_delay=0;
    let m = div_sizes[10];

    for(var i=0;i<array_size-1;i++)
    { 
        div_update(divs[i] ,"yellow");//Color update
        
            div_update(divs[i],div_sizes[i],"yellow");//Color update

            if(div_sizes[i] == m)
            {
                div_update(divs[i],div_sizes[i], "green");//Color update
               break;
            }
            
        div_update(divs[i],div_sizes[i], "darkblue");//Color update
    }
    

    enable_buttons();
}

