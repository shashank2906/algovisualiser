
function Binary()
{
    c_delay=0;
    let m = div_sizes[10];

    for(var i=0;i<array_size-1;i++)
    {
        
            div_update(divs[i],div_sizes[i],"yellow");//Color update

            if(div_sizes[i] == m)
            {
                div_update(divs[i],div_sizes[i], "red");//Color update
               break;
            }
            
        div_update(divs[i],div_sizes[i], "darkblue");//Color update
    }
    div_update(divs[0],div_sizes[0], "darkblue");//Color update
    // these are colors after color update 

    enable_buttons();
}
