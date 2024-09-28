import Sidebar from '@/components/Sidebar'

const PatientLayout = ({ children }) => {
  return (
    <div>
      <Sidebar/>
      <main>{children}</main>
    </div>
  );
};

export default PatientLayout;