// src/mock/index.js
//导入mockjs
import Mock from 'mockjs'


const dataSource = [
	{
	  key: '1',
	  name: 'John Brown',
	  age: 32,
	  address: 'New York No. 1 Lake Park',
	},
	{
	  key: '2',
	  name: 'Jim Green',
	  age: 42,
	  address: 'London No. 1 Lake Park',
	},
	{
	  key: '3',
	  name: 'Joe Black',
	  age: 32,
	  address: 'Sidney No. 1 Lake Park',
	},
	{
	  key: '4',
	  name: '小凯',
	  age: 19,
	  address: '湖北省武汉市洪山区',
	},
	{
	  key: '5',
	  name: '小李',
	  age: 24,
	  address: '北京市',
	}
  ]

const columns = [
	{
	  name: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Age',
	  dataIndex: 'age',
	  key: 'age',
	},
	{
	  title: 'Address',
	  dataIndex: 'address',
	  key: 'address',
	},
	{
	  title: 'Action',
	  key: 'action',
	},
  ];

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
Mock.mock('http://localhost:8080/test', 'get', {
	status: 200, //请求成功状态码
	dataSource: dataSource, //模拟的请求数据
	columns: columns,
})

Mock.mock('http://localhost:8080/removeById', 'post', (res) => {
	const id = res.body
	const index = dataSource.findIndex(item => item.key === id)
	dataSource.splice(index, 1)
	return {
		code: 0,
		data: '操作成功',
		dataSource: dataSource
	}
})

//导出

