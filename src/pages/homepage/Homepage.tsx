
import JobSection from './JobSection';
import LogoSilderSection from './LogoSilderSection';
import MainHomeCtnSection from './MainHomeCtnSection';
import NewTechSection from './NewTechSection';
import OurProjectSection from './OurProjectSection';
import TypeIndustry from './TypeIndustry';
import UserSoftwareSection from './UserSoftwareSection';

export default function App() {
    return (
        <div className='CustomContainer'>
            <MainHomeCtnSection />
            <JobSection />
            <LogoSilderSection />
            <div className='container'>
                <NewTechSection />
            </div>
            <OurProjectSection />
            <TypeIndustry />
            <UserSoftwareSection />
        </div >
    );
}
