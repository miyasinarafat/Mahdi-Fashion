import React, {useCallback, useState} from 'react';
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

import {AllIcons} from "../../assets/icons/all-icons";

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
import {Plus} from "../../components/AllSvgIcon";
import {useDrawerDispatch} from "../../context/DrawerContext";
import ActionWrapper from "../TypeForm/ActionWrapper";

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
        home_title
        home_subtitle
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

const prevButtonDisabledStyles = {
  width: '90px',
  marginRight: '10px',
  color: '#6f6f6f',
  backgroundColor: '#d8d8d8'
};
const nextButtonDisabledStyles = {
  width: '90px',
  marginLeft: '10px',
  color: '#6f6f6f',
  backgroundColor: '#d8d8d8'
};


export default function Coupons() {
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const { data, error, refetch } = useQuery(GET_TYPES);
  const dispatch = useDrawerDispatch();

  const openDrawer = useCallback(
      () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'TYPE_FORM' }),
      [dispatch]
  );


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
    setOffset(offset-12);
    refetch({
      offset: offset - 12,
    });
  }
  function handlePreviousDisabled(data) {
    const result = (data ? data.types.totalCount === 0 : false) || offset === 0;
    return result;
  }
  function handleNext() {
    setOffset(offset+12);
    refetch({
      offset: offset + 12,
    });
  }
  function handleNextDisabled(data) {
    const result = data ? !data.types.hasMore : true;
    return result;
  }

  const Icon = ({ icon }) => {
    let Component =  AllIcons.hasOwnProperty(icon) ? AllIcons[icon] : 'span';
    return <Component />;
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
              <Col md={2}>
                <Button
                    onClick={openDrawer}
                    startEnhancer={() => <Plus />}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          width: '100%',
                          borderTopLeftRadius: '3px',
                          borderTopRightRadius: '3px',
                          borderBottomLeftRadius: '3px',
                          borderBottomRightRadius: '3px',
                        }),
                      },
                    }}
                >
                  Add Type
                </Button>
              </Col>
            </Header>

            <Wrapper style={{ boxShadow: '0 0 5px rgba(0, 0 , 0, 0.05)' }}>
              <TableWrapper>
                <StyledTable $gridTemplateColumns="minmax(70px, 70px) minmax(150px, auto) minmax(150px, auto) minmax(70px, 70px) minmax(70px, 70px) minmax(120px, auto) minmax(160px, 160px)">
                  <StyledHeadCell>#</StyledHeadCell>
                  <StyledHeadCell>Name</StyledHeadCell>
                  <StyledHeadCell>Slug</StyledHeadCell>
                  <StyledHeadCell>Image</StyledHeadCell>
                  <StyledHeadCell>Icon</StyledHeadCell>
                  <StyledHeadCell>Created At</StyledHeadCell>
                  <StyledHeadCell>Action</StyledHeadCell>

                  {data ? (
                      data.types.items.length ? (
                          data.types.items.map((item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                      <StyledBodyCell>{index+1}</StyledBodyCell>
                                      <StyledBodyCell>{item.name}</StyledBodyCell>
                                      <StyledBodyCell>{item.slug}</StyledBodyCell>

                                      <StyledBodyCell>
                                        <ImageWrapper>
                                          <Image src={`${item.image}`} />
                                        </ImageWrapper>
                                      </StyledBodyCell>
                                      <StyledBodyCell>
                                        <IconWrapper>
                                          <Icon icon={item.icon} />
                                        </IconWrapper>
                                      </StyledBodyCell>

                                      <StyledBodyCell>
                                        {dayjs(item.created_at).format('DD MMM YYYY hh:mm:ss A')}
                                      </StyledBodyCell>

                                      <StyledBodyCell>
                                        <ActionWrapper itemsOffset={offset} itemData={item}/>
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
                    style={ handlePreviousDisabled(data) ? prevButtonDisabledStyles : {marginRight: '10px'}}
                    disabled={handlePreviousDisabled(data)}
                    onClick={handlePrevious}>
                  Previous
                </Button>
                <Button
                    style={ handleNextDisabled(data) ? nextButtonDisabledStyles : null}
                    disabled={handleNextDisabled(data)}
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
