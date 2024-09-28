import PatientSidebar from '@/components/PatientSidebar'
import Footer from './Footer';

const PatientLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen place-items-start">
      <PatientSidebar/>
      <div className='relative flex flex-col relative h-screen w-full overflow-y-auto'>
        <main className='p-5 w-full'>{children}</main>
        <Footer />
      </div>
      
    </div>
  );
};

export default PatientLayout;