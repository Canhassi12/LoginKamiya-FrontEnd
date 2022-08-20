import {FormLogin, Kamiya1, CodeBlock, Name} from "../../components";

export default function() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center mt-32 gap-1'>
        <Kamiya1 />
        <FormLogin/>
      </div>
      
      <div className='flex justify-center mt-12 p-2'>
        <CodeBlock />
      </div>
    </div>
  );
}
