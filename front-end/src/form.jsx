import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  import {
    Button,
    Center,
    Flex,
    Heading,
    IconButton,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tooltip,
    Tr,
  } from "@chakra-ui/react";
  import axios from "axios";
  import './form.css';
  import { useEffect, useMemo, useState } from "react";
  import { useTable, useSortBy, usePagination } from "react-table";
  const url = "http://127.0.0.1/api/chart_pagination.php";
  
  const tableColumn = [
    {
      Header: "Data Table for the above chart",
      columns: [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Device ID",
          accessor: "deveui",
        },
        {
          Header: "Inlet Pressure",
          accessor: "Inlet_p",
        },
        {
          Header: "Outlet Pressure",
          accessor: "Outlet_p",
        },
        {
          Header: "Flow Rate",
          accessor: "Flow_rate",
        },
        {
          Header: "Cumulative Flow",
          accessor: "Cumulative_flow",
        },
        {
          Header: "Daily Flow",
          accessor: "Daily_flow",
        },
        {
          Header: "Update Time",
          accessor: "updated_at",
        },
      ],
    },
    
  ];
  
  const App1 = () => {
    const [products, setProducts] = useState([]);
    const columns = useMemo(() => tableColumn, []);
    const data = useMemo(() => products, [products]);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      gotoPage,
      nextPage,
      prevPage,
      pageCount,
      pageOptions,
      setPageSize,
      canPreviousPage,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 1 },
      },
  
      useSortBy,
      usePagination
    );
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const { data } = await axios.get(url);
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProducts();
    }, []);
    console.log(products);
  
    if (products.length === 0)
      return (
        <Center>
          <Spinner />
        </Center>
      );
  
    return (
      < >
        <center>
        <Table style={{border:"2px solid", width:'98vw', textAlign:"center"}} {...getTableProps()}>
          <Thead className="th">
            {headerGroups.map((headerGroup) => (
              <Tr className="th"{...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                    {}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
  
              return (
                <Tr className="tr" {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        </center>
        <center>
        <Flex justify="space-between" m={4} style={{width:"97vw"}}>
          <Flex gap="4">
            <Tooltip label="First Page">
              <Button className="btn"
                onClick={() => gotoPage(0)}
                isDisabled={!canPreviousPage}
                
              > First Page </Button>
            </Tooltip>
            <Tooltip label="Prev Page">
              <Button className="btn"
                onClick={() => gotoPage(pageIndex - 1)}
                isDisabled={!canPreviousPage}
                
              > Previous Page</Button>
            </Tooltip>
          </Flex>
  
          <Flex style={{color:"white"}} align="center" gap={4}>
            <Flex align="center" gap="2">
              Page{" "}
              <Text fontWeight="bold" as="span">
                {pageIndex + 1}
              </Text>
              of
              <Text fontWeight="bold" as="span">
                {pageOptions.length}
              </Text>
            </Flex>
  
            <Flex  align="center" gap={4}>
              Goto Page{" "}
              <NumberInput
                w={28}
                min={1}
                max={pageOptions.length}
                onChange={(value) => {
                  const page = value ? value - 1 :0;
                  gotoPage(page);
                }}
                
              >
                <NumberInputField />
                <NumberInputStepper>
                  {/* <NumberIncrementStepper />
                  <NumberDecrementStepper /> */}
                </NumberInputStepper>
              </NumberInput>
            </Flex>
  
            <Select 
              w="32"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 14].map((pageSize) => (
                <option  value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Select>
          </Flex>
  
          <Flex gap="4">
            <Tooltip label="Next Page">
              <Button className="btn"
                onClick={nextPage}
                
              > Next Page </Button>
            </Tooltip>
            <Tooltip label="Last Page">
              <Button className="btn"
                onClick={() => {
                  gotoPage(pageCount - 1);
                }}
                
              > Last Page</Button>
            </Tooltip>
          </Flex>
        </Flex>
        </center>
      </>
    );
  };
  
  export default App1;