import { useNavigate } from 'react-router';
import { Route , Routes } from 'react-router';
import Home from './Home_Page/Home';
import News from './News_Page/News';
import New from './News_Page/New';
import News_edit from './News_Page/News_edit';
import Events from './Events_Page/Events';
import Event from './Events_Page/Event';
import Events_edit from './Events_Page/Events_edit';
import Projects from './Project_Page/Project';
import ProjectSingle from './Project_Page/Project_single';
import Projects_edit from './Project_Page/Projects_edit';
import Gallery from './Gallery_Page/Gallery';
import Staffs from './Staff_Page/Staff';
import Staff from './Staff_Page/Staff_single';
import Staff_edit from './Staff_Page/Staff_edit';
import Phds from './Phd_Page/Phd';
import PhD from './Phd_Page/Phd_single';
import PhDs_edit from './Phd_Page/PhDs_edit';
import Resources from './Resources_Page/Resources';
import ContactUs from './ContactUs_Page/ContactUs';
import Login from './Login_Page/login'

function App() {
    const navigate = useNavigate();
    return (
        <div>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<ContactUs/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="/news/:id" element={<New />} />
          <Route path="/news/update/:id" element={<News_edit />} />
          <Route path="events" element={<Events/>}/>
          <Route path="/events/:id" element={<Event />} />
          <Route path="/events/update/:id" element={<Events_edit/>} />
          <Route path="phd" element={<Phds/>}/>
          <Route path="/phd/:id" element={<PhD />} />
          <Route path="/phd/update/:id" element={<PhDs_edit/>} />
          <Route path="projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectSingle/>} />
          <Route path="/projects/update/:id" element={<Projects_edit/>} />
          <Route path="resources" element={<Resources/>}/>
          <Route path="staff" element={<Staffs/>}/>
          <Route path="/staff/:id" element={<Staff />} />
          <Route path="/staff/update/:id" element={<Staff_edit/>} />
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="login" element={<Login/>}/>
          
          </Routes>
        </div>
    );
  }
export default App;