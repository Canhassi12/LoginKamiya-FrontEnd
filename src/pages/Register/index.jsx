import {FormRegister, Kamiya1, CodeBlock, Name} from "../../components";

export default function Register() {
  return (
    <div className='flex flex-col '> 
      <div className='flex justify-center mt-32 gap-1'>
        <Kamiya1 />
        <FormRegister />
      </div>
      
      <div className='flex justify-center mt-12'>
        <CodeBlock/>
      </div>
    </div>
  );
}
