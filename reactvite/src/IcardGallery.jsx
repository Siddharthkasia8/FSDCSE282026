import react from 'react'
import ICard from './Icard.jsx'


function ICardGallery(){
    const student={
        pic:{studentimage},
        roll:"23434",
        name:"Rahul Kumar",
        branch:"CSE",
        section: "CSE28",
        collegeName: "ABES EC"
    }
    return(
        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
            {/*<ICard collegeName="ABES EC" rollNo="1000" name="Sidd" branch="CSE" section="28"/>
            <ICard collegeName="ABES EC" rollNo="1199" name="Nicole" branch="CSE" section="28"/>
            <ICard collegeName="ABES EC" rollNo="1099" name="Jonah" branch="CSE" section="28"/>*/}
        <ICard data={student}/>    
        </div>
    )
}

export default ICardGallery