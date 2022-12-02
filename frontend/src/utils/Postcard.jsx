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


    return (
        <section class="flex mt-10 bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
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
                        <div class="p-4 bg-white dark:bg-gray-700">
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
                                <Input
                                    // prefix={<LockOutlined className="site-form-item-icon" />}
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
                        <div class="p-4 bg-white dark:bg-gray-700">
                            <select onChange={countryToRecieveHandler}>
                                <option value={'none'} selected disabled hidden>Select a Country</option>
                                {countriesName?.map(itm => (
                                    <option>{itm}</option>
                                ))}
                            </select>
                        </div>
                        <Form>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input amount to Send' }]}
                            >
                                <Input
                                    // prefix={<LockOutlined className="site-form-item-icon" />}
                                    type='number'
                                    placeholder="Enter Amount"
                                />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Postcard