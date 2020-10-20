import React, { useState } from 'react';
import dayjs from 'dayjs';
import { withStyle } from 'baseui';
import {
  Grid,
  Row as Rows,
  Col as Column,
} from '../../components/FlexBox/FlexBox';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Wrapper, Header, Heading } from '../../components/WrapperStyle';

import {AllIcons, Icon} from "../../assets/icons/all-icons";

import {
  TableWrapper,
  StyledTable,
  StyledHeadCell,
  StyledBodyCell,
  Image,
  ImageWrapper,
  IconWrapper,
} from './Types.style';
import NoResult from '../../components/NoResult/NoResult';

const GET_TYPES = gql`
  query GetTypes(
    $searchText: String
    $offset: Int
  ) {
    types(
      searchText: $searchText
      offset: $offset
    ) {
      items {
        id
        name
        slug
        image
        icon
        meta_title
        meta_keyword
        meta_description
        created_at
      }
      totalCount
      hasMore
    }
  }
`;

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));
const Row = withStyle(Rows, () => ({
  '@media only screen and (min-width: 768px)': {
    alignItems: 'center',
  },
}));


export default function Coupons() {
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const { data, error, refetch } = useQuery(GET_TYPES);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    refetch({
      searchText: value,
    });
  }
  function handlePrevious() {
    setOffset(offset-1);
    refetch({
      offset: offset - 1,
    });
  }

  function handleNext() {
    setOffset(offset+1);
    refetch({
      offset: offset + 1,
    });
  }

  return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Header
                style={{
                  marginBottom: 30,
                  boxShadow: '0 0 5px rgba(0, 0 ,0, 0.05)',
                }}
            >
              <Col md={2}>
                <Heading>Types</Heading>
              </Col>

              <Col md={6}>
                <Input
                    value={search}
                    placeholder="Ex: Search By Name"
                    onChange={handleSearch}
                    clearable
                />
              </Col>
            </Header>

            <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
              <TableWrapper>
                <StyledTable $gridTemplateColumns="minmax(70px, 70px) minmax(200px, auto) minmax(200px, auto) minmax(70px, 70px) minmax(70px, 70px) minmax(150px, auto)">
                  <StyledHeadCell>#</StyledHeadCell>
                  <StyledHeadCell>Name</StyledHeadCell>
                  <StyledHeadCell>Slug</StyledHeadCell>
                  <StyledHeadCell>Image</StyledHeadCell>
                  <StyledHeadCell>Icon</StyledHeadCell>
                  <StyledHeadCell>Created At</StyledHeadCell>

                  {data ? (
                      data.types.items.length ? (
                          data.types.items
                              .map((item) => Object.values(item))
                              .map((row, index) => {
                                return (
                                    <React.Fragment key={index}>
                                      <StyledBodyCell>{index+1}</StyledBodyCell>
                                      <StyledBodyCell>{row[1]}</StyledBodyCell>
                                      <StyledBodyCell>{row[2]}</StyledBodyCell>
                                      <ImageWrapper>
                                        <Image src={row[3]} />
                                      </ImageWrapper>
                                      <IconWrapper>
                                        <Icon icon={row[4]} />
                                      </IconWrapper>
                                      <StyledBodyCell>
                                        {dayjs(row[8]).format('DD MMM YYYY HH:mm:ss')}
                                      </StyledBodyCell>
                                    </React.Fragment>
                                );
                              })
                      ) : (
                          <NoResult
                              hideButton={false}
                              style={{
                                gridColumnStart: '1',
                                gridColumnEnd: 'one',
                              }}
                          />
                      )
                  ) : null}
                </StyledTable>
              </TableWrapper>
            </Wrapper>

            <Row>
              <Col md={8}>
              </Col>
              <Col md={4}
                   style={{ display: 'block', textAlign: 'right', marginTop: '20px' }}
              >
                <Button
                    style={{ width: '90px', marginRight: '10px', color: '#6f6f6f', backgroundColor: '#d8d8d8' }}
                    disabled={(data ? data.types.totalCount === 0 : false) || offset === 0}
                    onClick={handlePrevious}>
                  Previous
                </Button>
                <Button
                    style={{ width: '90px', color: '#6f6f6f', backgroundColor: '#d8d8d8' }}
                    disabled={data ? !data.types.hasMore : true}
                    onClick={handleNext}>
                  Next
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
  );
}
