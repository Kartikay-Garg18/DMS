import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useRef,useState } from 'react'

function FundRaiserForm(){

  const formRef = useRef(null);
  const [file, setFile] = useState(null);
  const [qrCodeFile, setQrCodeFile] = useState(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset(); // Reset the form fields
      setFile(null); // Clear the file state
      setQrCodeFile(null); // Clear the QR code file state
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(formRef.current); // 
    const formObject = Object.fromEntries(formData.entries()); 

    formObject.beneficiaryImage = file;
    formObject.qrImage = qrCodeFile;

    console.log(formObject); 
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); 
  };

  const handleQrCodeFileChange = (event) => {
    setQrCodeFile(event.target.files[0]); 
  };

    return (
        <div className='flex flex-col justify-center items-center mx-[15%] my-[5%] rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mt-3'> Raise a Fund</h2>
        <form ref={formRef} className='p-4 m-auto' onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-md/6 font-medium text-gray-900">
                    Benificiary Name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                     
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="First LastName"
                        autoComplete="username"
                        required
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="MainCause" className="block text-md/6 font-medium text-gray-900">
                    Title(Need)<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="MainCause"
                      name="MainCause"
                      rows={3} placeholder='Main Cause'
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      required
                      defaultValue={''}
                    />
                  </div>
                  
                </div>
    
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-md/6 font-medium text-gray-900">
                    About/ Cause of FundRaising<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={5} placeholder='Tell us about the cause in detail...'
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div>
                  
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="category" className="block text-md/6 font-medium text-gray-900">
                    Choose Category<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      required
                      autoComplete="category-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6" 
                    >
                      <option>HealthCare</option>
                      <option>Education Aid</option>
                      <option>Animal Welfare</option>
                      <option>Orphan Care</option>
                      <option>Food Banks</option>
                      <option selected>Other</option>
                      
                    </select>
                  </div>
                </div>
    
    
                
    
                <div className="col-span-full">
                  <label htmlFor="beneficiaryImage" className="block text-md/6 font-medium text-gray-900">
                    Add a photo of the benificiary/patient
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      
                      {!file && (<PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />)}
                      
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="beneficiaryImage"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          {!file && (
                            <div>
                          <span>Upload a file</span>
                          <input id="beneficiaryImage" name="beneficiaryImage" type="file" className="sr-only" onChange={handleFileChange}
                          accept="image/png, image/jpeg, image/gif"  />
                        <p className="pl-1">or drag and drop</p>
                        </div>
                          )}
                        </label>
                        {file && (
                        <div className="mt-2">
                          <img src={URL.createObjectURL(file)} alt="Uploaded"  />
                          <button type="button" onClick={() => setFile(null)} className="text-red-500">Remove</button>
                        </div>
              )}
                      </div>
                      
                      {!file && (
                      <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Personal Information(About FundRaiser)</h2>
              <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-md/6 font-medium text-gray-900" >
                    First name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 " placeholder="ravi"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-md/6 font-medium text-gray-900">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name" 
                      required 
                      placeholder="sharma"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-md/6 font-medium text-gray-900">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 "placeholder="abc@gmail.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="amount" className="block text-md/6 font-medium text-gray-900">
                   Amount<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      required
                      autoComplete=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 "placeholder="Enter amount to be Raised" min='2000' max='100000000'
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-4">
                  <label htmlFor="startDate" className="block text-md/6 font-medium text-gray-900">
                   Start Date<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      autoComplete=""
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 "
                      min={new Date().toISOString().split('T')[0]} 
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="endDate" className="block text-md/6 font-medium text-gray-900">
                   End Date<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="endDate"
                      name="endDate"
                      type="date"
                      autoComplete=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="PhoneNo" className="block text-md/6 font-medium text-gray-900">
                   Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="PhoneNo"
                      name="PhoneNo"
                      type="tel"
                      autoComplete=""
                      required
                      pattern="\d{10}"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " placeholder='+91 1234567890'
                    />
                  </div>
                </div>

                
        
                
    
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-md/6 font-medium text-gray-900">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      required
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                    >
                      <option>India</option>
                      
                    </select>
                  </div>
                </div>
    
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-md/6 font-medium text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-md/6 font-medium text-gray-900">
                    City<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="state" className="block text-md/6 font-medium text-gray-900">
                    State / Province<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-md/6 font-medium text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Payment Details</h2>
              <p className="mt-1 text-sm/6 text-gray-600">Feilds marked with * are necessary.</p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                  <label htmlFor="AccName" className="block text-md/6 font-medium text-gray-900" >
                   A/c Holder Name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="AccName"
                      name="AccName"
                      type="text"
                      autoComplete=""
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " placeholder='Enter Account Holder name'
                    />
                  </div>
                </div>
          <div className="sm:col-span-4">
                  <label htmlFor="BankAcc" className="block text-md/6 font-medium text-gray-900">
                   Bank A/C No.<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="BankAcc"
                      name="BankAcc"
                      type="text"
                      pattern="\d{9,18}"
                       maxLength="18"
                       minLength="9"
                      autoComplete=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " placeholder='Enter your Bank Account No.' required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="ifsc" className="block text-md/6 font-medium text-gray-900">
                   IFSC Code<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="ifsc"
                      name="ifsc"
                      type="text"
                      autoComplete=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " placeholder='Enter IFSC Code' required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="Bank" className="block text-md/6 font-medium text-gray-900" >
                   Bank Name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="Bank"
                      name="BankName"
                      type="text"
                      autoComplete=""
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " placeholder='Enter your Bank Name'
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="upi" className="block text-md/6 font-medium text-gray-900">
                   PayTM/UPI Id
                  </label>
                  <div className="mt-2">
                    <input
                      id="upi"
                      name="upi"
                      type="text"
                      autoComplete=""
                       pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-/6 " placeholder='username@bankname'
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="qrImage" className="block text-md/6 font-medium text-gray-900">
                    Add a photo of the QR Code(Optional)
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      
                      {!qrCodeFile && (<PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />)}
                      
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="qrImage"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          {!qrCodeFile && (
                            <div>
                          <span>Upload a file</span>
                          <input id="qrImage" name="qrImage" type="file" className="sr-only" onChange={handleQrCodeFileChange}
                          accept="image/png, image/jpeg, image/gif"  />
                        <p className="pl-1">or drag and drop</p>
                        </div>
                          )}
                        </label>
                        {qrCodeFile && (
                        <div className="mt-2">
                          <img src={URL.createObjectURL(qrCodeFile)} alt="Uploaded"  />
                          <button type="button" onClick={() => setQrCodeFile(null)} className="text-red-500">Remove</button>
                        </div>
              )}
                      </div>
                      
                      {!qrCodeFile && (
                      <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 hover:text-white" onClick={handleReset}>
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
        </div>
      )
}

export default FundRaiserForm;