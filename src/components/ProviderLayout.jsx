import ProviderSidebar from "@/components/ProviderSidebar";
import Footer from "./Footer";

const ProviderLayout = ({ children }) => {
  return (
    <div className='flex flex-row h-screen place-items-start'>
      <ProviderSidebar />
      <div className='relative flex flex-col relative h-screen w-full overflow-y-auto'>
        <main className='p-5 w-full'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default ProviderLayout;
