import React, { useReducer } from 'react';
import schedules from 'features/checkouts/data';
import { ProfileContext } from './profile.context';

type Action =
  | { type: 'HANDLE_ON_INPUT_CHANGE'; payload: any }
  | { type: 'ADD_OR_UPDATE_CONTACT'; payload: any }
  | { type: 'DELETE_CONTACT'; payload: any }
  | { type: 'ADD_ADDRESS'; payload: any }
  | { type: 'UPDATE_ADDRESS'; payload: any }
  | { type: 'DELETE_ADDRESS'; payload: any }
  | { type: 'ADD_CARD'; payload: any }
  | { type: 'DELETE_CARD'; payload: any }
  | { type: 'SET_PRIMARY_CONTACT'; payload: any }
  | { type: 'SET_PRIMARY_ADDRESS'; payload: any }
  | { type: 'SET_PRIMARY_SCHEDULE'; payload: any }
  | { type: 'SET_PRIMARY_CARD'; payload: any };
function reducer(state: any, action: Action): any {
  switch (action.type) {
    case 'HANDLE_ON_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'ADD_OR_UPDATE_CONTACT':
      if (action.payload.id !== null ) {
        return {
          ...state,
          phones: state.phones.map((item: any) =>
            item.id == action.payload.id
              ? { ...item, ...action.payload.values }
              : item
          ),
        };
      }
      const newContact = {
        ...action.payload.values,
      };
      console.log(newContact)
      return {
        ...state,
        phones: [...state.phones, newContact],
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        phones: state.phones.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    case 'ADD_ADDRESS':
      const newAdress = {
        ...action.payload
      };
      return {
        delivery_address: [newAdress],
      };
    case 'UPDATE_ADDRESS':
      
        console.log(action.payload)
        /*if (action.payload.id) {
          return {
            ...state,
            delivery_address: state.delivery_address.map((item: any, index: any) =>
              index === action.payload.id
                ? { ...item, ...action.payload }
                : item
            ),
          };
        }*/
        const MynewAdress = {
          ...action.payload
        };
        return {
          ...state,
          delivery_address: [...state.delivery_address, newAdress],
      };

    case 'DELETE_ADDRESS':
      return {
        ...state,
        delivery_address: state.delivery_address.filter(
          (item: any, index: any) => index !== action.payload
        ),
      };
    case 'ADD_CARD':
      const newCard = {
        id: action.payload.id,
        type: state.card.length === '0' ? 'primary' : 'secondary',
        cardType: action.payload.brand.toLowerCase(),
        name: state.name,
        lastFourDigit: action.payload.last4,
      };
      return {
        ...state,
        card: [newCard, ...state.card],
      };
    case 'DELETE_CARD':
      return {
        ...state,
        card: state.card.filter((item: any) => item.id !== action.payload),
      };
    case 'SET_PRIMARY_CONTACT':
      return {
        ...state,
        phones: state.phones.map((item: any) =>
          item.id === action.payload
            ? { ...item, type: 'primary' }
            : { ...item, type: 'secondary' }
        ),
      };
    case 'SET_PRIMARY_ADDRESS':
      return {
        ...state,
        delivery_address: state.delivery_address.map((item: any, index: any) =>
          index == action.payload
            ? { ...item, is_primary: true }
            : { ...item, is_primary: false }
        ),
      };
    case 'SET_PRIMARY_SCHEDULE':
      return {
        ...state,
        schedules: state.schedules.map((item: any) =>
          item.id === action.payload
            ? { ...item, type: 'primary' }
            : { ...item, type: 'secondary' }
        ),
      };
    case 'SET_PRIMARY_CARD':
      return {
        ...state,
        card: state.card.map((item: any) =>
          item.id === action.payload
            ? { ...item, type: 'primary' }
            : { ...item, type: 'secondary' }
        ),
      };
    default:
      return state;
  }
}

type ProfileProviderProps = {
  initData: any;
};

export const ProfileProvider: React.FunctionComponent<ProfileProviderProps> = ({
  children,
  initData,
}) => {
  const [state, dispatch] = useReducer(reducer, { ...initData, schedules });
  // console.log(state, 'profile provider state');

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
