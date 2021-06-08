import  classes from './MeetUpForm.module.css'
import Card from '../Ui/Card'
import {useRef} from 'react'
function NewMeetUpForm(props){
  const titleInputRef=useRef();
  const imageInputRef=useRef();
  const addressInputRef=useRef();
  const descriptionInputRef=useRef();
    function SubmitHandler(event){
    event.preventDefault()
    const enteredTitleInputRef=titleInputRef.current.value;
    const enteredImageInputRef=imageInputRef.current.value;
    const enteredAddressInputRef=addressInputRef.current.value;
    const enteredDescriptionInputRef=descriptionInputRef.current.value;
    const meetupdata= {
       title:enteredTitleInputRef,
       image:enteredImageInputRef,
       address:enteredAddressInputRef,
       description:enteredDescriptionInputRef}

    props.onAddmeetup(meetupdata);
    }
return <Card>
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}> 
      <label htmlFor="title">Meet up Title</label>
      <input type="text" required id="title" ref={titleInputRef}/>
      </div>
      <div className={classes.control}> 
      <label htmlFor="image">Meet up image</label>
      <input type="url" required id="image" ref={imageInputRef}/>
      </div>
      <div className={classes.control}> 
      <label htmlFor="address">Meet up address</label>
      <input type="text" required id="address" ref={addressInputRef}/>
      </div>
      <div className={classes.control}> 
      <label htmlFor="description">Meet up description</label>
      <textarea required id="description" rows='5' ref={descriptionInputRef} ></textarea>
      </div>
      <div className={classes.actions}>
          <button>Add meetup</button>
      </div>

      </form>
</Card>
}
export default NewMeetUpForm;