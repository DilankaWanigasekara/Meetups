import MeetupList from '../Components/meetups/MeetupList';
import {useState,useEffect} from 'react'

function Allmeetups(){
const [isLoading,setLoading]=useState(true);
const [loadedMeetups,setLoadedMeetups]=useState([]);
  useEffect(()=>{
    setLoading(true)
    fetch('https://react1-d6f07-default-rtdb.firebaseio.com/meetups.json')
    .then((response)=>{return response.json()})
    .then((data)=>{
      const meetups=[];
      for (const key in data){
        const meetup={
          id:key,
        ...data[key]}

        meetups.push(meetup)
      }
      
     setLoading(false)
     setLoadedMeetups(meetups)
   
   });
  },[]);
 
 
if (isLoading){
  return (<div> Loading...</div>)
}

 

    return <section>
        <h1>Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>
}
export default Allmeetups;

/*<ul>
{DUMMY_DATA.map((meetup)=>{
    return <li key={meetup.id}>{meetup.description}</li>;
})
}
</ul>*/