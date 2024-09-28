import Sidebar from '@/components/Sidebar'

const PatientLayout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <Sidebar className="h-full"/>
      <main className='p-5 w-full'>{children}</main>
    </div>
  );
};

export default PatientLayout;