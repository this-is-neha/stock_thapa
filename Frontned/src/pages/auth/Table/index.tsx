// import React, { useMemo, useState } from 'react';
// import { useTable } from 'react-table';
// import { HeaderComponent, FooterComponent } from '../../../components/common';

// const Dashboard = () => {
  
//   const mockData = [
//     { id: 1, name: 'Item 1', description: 'Description 1', price: 100, category: 'Electronics' },
//     { id: 2, name: 'Item 2', description: 'Description 2', price: 200, category: 'Clothing' },
//     { id: 3, name: 'Item 3', description: 'Description 3', price: 300, category: 'Furniture' },
//     { id: 4, name: 'Item 4', description: 'Description 4', price: 150, category: 'Food' },
//   ];

//   const [data, setData] = useState(mockData);
//   const [editingRow, setEditingRow] = useState(null);
//   const [formData, setFormData] = useState({ name: '', description: '', price: '', category: '' });

//   const columns = useMemo(
//     () => [
//       { Header: 'Name', accessor: 'name' },
//       { Header: 'Description', accessor: 'description' },
//       { Header: 'Price', accessor: 'price' },
//       { Header: 'Category', accessor: 'category' },
//       {
//         Header: 'Actions',
//         Cell: ({ row }) => (
//           <button
//             onClick={() => handleEdit(row.original)}
//             className="text-blue-500 underline"
//           >
//             Update
//           </button>
//         ),
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
//     columns,
//     data,
//   });

//   const handleEdit = (row:any) => {
//     setEditingRow(row.id);
//     setFormData(row);
//   };

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     setData((prevData:any) =>
//       prevData.map((item:any) => (item.id === editingRow ? { ...item, ...formData } : item))
//     );
//     setEditingRow(null);
//   };

//   return (
//     <>
    
//       <div className="p-8 space-y-8">
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Items Table</h2>
//           <table {...getTableProps()} className="min-w-full border-collapse">
//             <thead className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
//               {headerGroups.map((headerGroup) => (
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                   {headerGroup.headers.map((column) => (
//                     <th
//                       {...column.getHeaderProps()}
//                       className="py-3 px-4 text-left text-sm font-semibold"
//                     >
//                       {column.render('Header')}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()} className="text-sm divide-y divide-gray-200">
//               {rows.map((row, index) => {
//                 prepareRow(row);
//                 return (
//                   <tr
//                     {...row.getRowProps()}
//                     className={`${
//                       index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
//                     } hover:bg-blue-100`}
//                   >
//                     {row.cells.map((cell) => (
//                       <td {...cell.getCellProps()} className="py-3 px-4 text-gray-700">
//                         {cell.render('Cell')}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         {/* Edit Form */}
//         {editingRow && (
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Item</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Description</label>
//                 <input
//                   type="text"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//               >
//                 Save Changes
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//       <FooterComponent />
//     </>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import axiosInstance from 'axios';

// // Define a type for the form data
// interface FormData {
//   name: string;
//   description: string;
//   price: string;
//   category: string;
// }

// const Dashboard = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [formData, setFormData] = useState<FormData>({ name: '', description: '', price: '', category: '' });
//   const [isAdding, setIsAdding] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get('http://localhost:9006/table/');
//         setData(response.data.result || response.data);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Error fetching data');
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post('http://localhost:9006/table/', formData);
//       setData((prevData) => [...prevData, response.data.result]);
//       setFormData({ name: '', description: '', price: '', category: '' });
//     } catch (err:any) {
//       if (err.response) {
//         // If the error is from the backend
//         console.error('Backend error:', err.response.data);
//       } else {
//         console.error('Error submitting form:', err);
//       }
//     }
    
//   };

//   const handleAddNew = () => {
//     setIsAdding(true);
//   };

//   return (
//     <div className="p-8 space-y-8">
//       {error && <div className="text-red-500 text-center">{error}</div>}
//       <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Items Table</h2>
//         <button
//           onClick={handleAddNew}
//           className="mb-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
//         >
//           Add New Item
//         </button>
//         <table className="min-w-full border-collapse">
//           <thead className="bg-gradient-to-r from-blue-400 to-blue-600 text-black">
//             <tr>
//               <th className="py-3 px-4 text-left text-sm font-semibold">Name</th>
//               <th className="py-3 px-4 text-left text-sm font-semibold">Description</th>
//               <th className="py-3 px-4 text-left text-sm font-semibold">Price</th>
//               <th className="py-3 px-4 text-left text-sm font-semibold">Category</th>
//             </tr>
//           </thead>
//           <tbody className="text-sm divide-y divide-gray-200">
//             {data.map((item, index) => (
//               <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-100`}>
//                 <td className="py-3 px-4 text-gray-700">{item.name}</td>
//                 <td className="py-3 px-4 text-gray-700">{item.description}</td>
//                 <td className="py-3 px-4 text-gray-700">{item.price}</td>
//                 <td className="py-3 px-4 text-gray-700">{item.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isAdding && (
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Item</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {['name', 'description', 'price', 'category'].map((field) => (
//               <div key={field}>
//                 <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
//                 <input
//                   type={field === 'price' ? 'number' : 'text'}
//                   name={field}
//                   value={formData[field as keyof FormData]}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//             ))}
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//             >
//               Create
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import axiosInstance from 'axios';

// Define a type for the form data
interface FormData {
  name: string;
  description: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [data, setData] = useState<any[]>([]);
  const [formData, setFormData] = useState<FormData>({ name: '', description: '', price: '', category: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:9006/table/');
        setData(response.data.result || response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && editItemId) {
        const response = await axiosInstance.put(`http://localhost:9006/table/${editItemId}`, formData);
        setData((prevData) =>
          prevData.map((item) => (item._id === editItemId ? response.data.result : item))
        );
        setIsEditing(false);
      } else {
        const response = await axiosInstance.post('http://localhost:9006/table/', formData);
        setData((prevData) => [...prevData, response.data.result]);
      }
      setFormData({ name: '', description: '', price: '', category: '' });
    } catch (err: any) {
      if (err.response) {
        console.error('Backend error:', err.response.data);
      } else {
        console.error('Error submitting form:', err);
      }
    }
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setIsEditing(false);
  };

  const handleEdit = (itemId: string) => {
    const item = data.find((item) => item._id === itemId);
    if (item) {
      setFormData({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
      });
      setIsEditing(true);
      setEditItemId(itemId);
      setIsAdding(false);
    }
  };

  const handleDelete = async (itemId: string) => {
    try {
      await axiosInstance.delete(`http://localhost:9006/table/${itemId}`);
      setData((prevData) => prevData.filter((item) => item._id !== itemId));
    } catch (err: any) {
      console.error('Error deleting item:', err);
    }
  };

  return (
    <div className="p-8 space-y-8">
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Items Table</h2>
        <button
          onClick={handleAddNew}
          className="mb-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Add New Item
        </button>
        <table className="min-w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-400 to-blue-600 text-black">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Description</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Price</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Category</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-100`}>
                <td className="py-3 px-4 text-gray-700">{item.name}</td>
                <td className="py-3 px-4 text-gray-700">{item.description}</td>
                <td className="py-3 px-4 text-gray-700">{item.price}</td>
                <td className="py-3 px-4 text-gray-700">{item.category}</td>
                <td className="py-3 px-4 text-gray-700">
                  <button
                    onClick={() => handleEdit(item._id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="ml-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(isAdding || isEditing) && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{isEditing ? 'Edit Item' : 'Add New Item'}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {['name', 'description', 'price', 'category'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                <input
                  type={field === 'price' ? 'number' : 'text'}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {isEditing ? 'Update' : 'Create'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
