import React from 'react'
import { useState } from 'react';
import { Form, Input } from 'antd';
import { QA, CA, US, IN } from 'country-flag-icons/react/3x2';
const Postcard = () => {
    const countriesName = [
        'NEPAL',
        'QATAR',
        'CANADA',
        'INDIA',
        'USA',
    ]
    const [sendingCountry, setSendingCountry] = useState('');
    const [recivingCountry, setRecivingCountry] = useState('')
    const [sendingAmount,setSendingAmount]=useState();
    const [recivingAmout,setRecivingAmout]=useState();

    const countryToSendHandler = (e) => {
        if (recivingCountry === e.target.value) {
            alert('Same Selected')
        }
        else {
            setSendingCountry(e.target.value)
        }
    }
    const countryToRecieveHandler = (e) => {
        if (sendingCountry === e.target.value) {
            alert("Same Country Selected")
        }
        else {
            setRecivingCountry(e.target.value)
        }

    }
    
   const sendAmountHandler=(e)=>{
    setSendingAmount(e.target.value)
    setRecivingAmout(sendingAmount)
   }
    return (
        <>
            <section class="flex mt-10 lg:h-full  font-poppins dark:bg-gray-900 ">
                <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                        <div>
                            <div class="relative w-full h-56">
                                {sendingCountry === countriesName[2] && <CA title="CANADA"
                                    class="object-cover w-full h-full " />}
                                {sendingCountry === countriesName[1] && <QA title="QATAR"
                                    class="object-cover w-full h-full " />}
                                {sendingCountry === countriesName[4] && <US title="USA"
                                    class="object-cover w-full h-full " />}
                                {sendingCountry === countriesName[3] && <IN title="INDIA"
                                    class="object-cover w-full h-full " />}
                                {sendingCountry === '' && <IN title="INDIA"
                                    class="object-cover w-full h-full " />}
                                <span class="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                                    Sender</span>
                            </div>
                            <div class="p-4  dark:bg-gray-700">
                                <select onChange={countryToSendHandler}>
                                    <option value="none" selected disabled hidden>Select a Country</option>
                                    {countriesName?.map(itm => (
                                        <option>{itm}</option>
                                    ))}
                                </select>``
                            </div>
                            <Form>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input amount to Send' }]}
                                >
                                    <Input onChange={sendAmountHandler}
                                        type='number'
                                        placeholder="Enter Amount"
                                    />
                                </Form.Item>
                            </Form>
                        </div>
                        <div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <div>
                            <div class="relative w-full h-56">
                                {recivingCountry === countriesName[2] && <CA title="CANADA"
                                    class="object-cover w-full h-full " />}
                                {recivingCountry === countriesName[1] && <QA title="QATAR"
                                    class="object-cover w-full h-full " />}
                                {recivingCountry === countriesName[4] && <US title="USA"
                                    class="object-cover w-full h-full " />}
                                {recivingCountry === countriesName[3] && <IN title="INDIA"
                                    class="object-cover w-full h-full " />}
                                {recivingCountry === '' && <IN title="INDIA"
                                    class="object-cover w-full h-full " />}
                                <span class="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                                    Receiver</span>
                            </div>
                            <div class="p-4  dark:bg-gray-700">
                                <select onChange={countryToRecieveHandler}>
                                    <option value={'none'} selected disabled hidden>Select a Country</option>
                                    {countriesName?.map(itm => (
                                        <option>{itm}</option>
                                    ))}
                                </select>
                            </div>
                            <input type="text" readonly="readonly" value={recivingAmout}/>
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center'>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Send
                </button>
            </div>
        </>
    )
}

export default Postcard