import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modelOpened}
      onClose={()=>setModelOpened(false)}
    >
      {/* Modal content */}
    <form action="" className="infoform">
        <h3>Your Info</h3>
        <div>
            <input className="infoinput" placeholder='First name'
            name='firstname'/>
            <input className="infoinput" placeholder='Last name'
            name='Lastname'/>
        </div>
        <div>
            <input className="infoinput" placeholder='Works At'
            name='Worksat'/>
        </div>
        <div>
            <input className="infoinput" placeholder='Lives In'
            name='Livesin'/>
            <input className="infoinput" placeholder='Country'
            name='Countrh'/>
        </div>
        <div>
            <input className="infoinput" placeholder='Relationship Status'
            name='firstname'/>
        </div>
        <div>
            Profile Image
            <input type='file' name='profileimg'/>
            Cover Image
            <input type='file' name='coverimage'/>
        </div>
        <button className="button infobutton">Update</button>
    </form>
    </Modal>
    
  );
}
export default ProfileModel;