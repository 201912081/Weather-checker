const submitbtn=document.getElementById('searchbtn');
const cityname=document.getElementById('cityname');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp_real_value');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');
const getInfo= async(event)=>{
    event.preventDefault();
    // alert('HOneyParthShah');

    if(cityname.value===""){
        city_name.innerText=`Please write the city name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            // let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f331d42b7596df9e57e391602ddda34f`;
            // console.log(cityname.value)
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value},CA&appid=f331d42b7596df9e57e391602ddda34f`
            const response=await fetch(url); 
            const data=await response.json();
           const arr=[data]
           console.log(arr)

           city_name.innerText=`${arr[0].name},${arr[0].sys.country}`
           temp.innerText=Math.round((arr[0].main.temp-273.15)*100)/100;
            
           const tempMood=arr[0].weather[0].main;

           //condition to check weather icon
           if(tempMood=="Clear"){
            temp_status.innerHTML="<i class='fa fa-sun' aria-hidden='true' style='color:#eccc68'></i>";
           }
           else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fa fa-cloud' aria-hidden='true' style='color:#f1f2f6'></i>";
           }
           else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' aria-hidden='true' style='color:#a4b0be'></i>";
           }
           else if(tempMood=="Wind"){
            temp_status.innerHTML="<i class='<i class='fa-solid fa-wind'></i>' aria-hidden='true' style='color:#fff'></i>";
           }
           else{
            temp_status.innerHTML="<i class='fa fa-cloud' aria-hidden='true' style='color:#f1f2f6'></i>";
           }
           datahide.classList.remove('data_hide');
        }
        catch(err){
            console.log(err)
            city_name.innerText=`Please enter the correct city name`;
            datahide.classList.add('data_hide');
        }
        

    }
}

submitbtn.addEventListener('click',getInfo)