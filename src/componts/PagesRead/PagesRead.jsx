import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Cell, XAxis, YAxis } from 'recharts';
import { getStoredBook } from '../../Utility/localstarage';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']
const PagesRead = () => {
    const books = useLoaderData();
    // const localstore = getStoredBook();
    const [appliedBooks, setAppliedBooks] = useState([])
    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            // const readBooks=books.filter(book=> storedBookIds.includes(book.bookIdItn))
            const bookAplied = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    bookAplied.push(book)
                }
            }
            setAppliedBooks(bookAplied)
            // console.log(bookAplied)


        }
    }, [books]);
    console.log(appliedBooks)

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
   
    return (
        <div className='mt-8 h-[700px] border rounded-3xl bg-[#F3F3F3] '>
            <div className='mt-20 ml-40'>
                <BarChart width={700} height={500} data={appliedBooks}>
                    <XAxis dataKey="bookName" />
                    <YAxis dataKey="totalPages" />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} >
                        {
                            appliedBooks.map((entry, index ) =>(<Cell key={`cell-${index}`} fill={colors[index % 20]}/>))
                        }
                    
                    </Bar>

                </BarChart>
            </div>
        </div>
    );
};

export default PagesRead;


