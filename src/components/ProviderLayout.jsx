import ProviderSidebar from '@/components/ProviderSidebar'

const ProviderLayout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <ProviderSidebar className="h-full"/>
      <main className='p-5 w-full'>{children}</main>
    </div>
  );
};

export default ProviderLayout;