import PatientSidebar from '@/components/PatientSidebar'

const PatientLayout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <PatientSidebar className="h-full"/>
      <main className='px-5 w-full'>{children}</main>
    </div>
  );
};

export default PatientLayout;