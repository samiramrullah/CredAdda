import React from 'react';
import { DownOutlined, } from '@ant-design/icons';
import { Button, Dropdown, Space, } from 'antd';

const DropdownCustom = ({setSendingCountry,setRecivingCountry}) => {
  const handleMenuClick = (e) => {
    setSendingCountry(e.key)
    setRecivingCountry(e.key)
  };
  const items = [
    {
      label: 'Canada',
      key: '1',
      // icon: <NA/>,
    },
    {
      label: 'Qatar',
      key: '2',
      // icon: <QA />,
    },
    {
      label: 'USA',
      key: '3',
      // icon: <IN />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Space wrap>
    <Dropdown menu={menuProps}>
      <Button defaultValue={'Select'}>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
  )
}

export default DropdownCustom