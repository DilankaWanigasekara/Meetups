import NewMeetUpForm from '../Components/meetups/NewMeetUpForm'
import {useHistory} from 'react-router-dom'
function Newmeetup(){
    const history=useHistory()
    function dbconnection(meetupdat){
        fetch('https://react1-d6f07-default-rtdb.firebaseio.com/meetups.json',
        {method:'POST',
        body:JSON.stringify(meetupdat),
        headers:{
        'content-type':"Application/json"},
        }
        ).then(()=> {history.replace('/')});
    }
    return <section>
        <h1>New meet up</h1>
        <NewMeetUpForm onAddmeetup={dbconnection}/>
        </section>

}
export default Newmeetup;