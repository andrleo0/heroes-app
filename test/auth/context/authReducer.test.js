import { authReducer , types } from "../../../src/auth";

describe('Pruebas en authReducer', () => { 

    const inicialState = { logged: false };

    test('debe de regresar el estado por defecto', () => { 

        const state = authReducer( inicialState , {} );
        expect( state ).toEqual( inicialState );

     });

     test('debe de (login) llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Andres'
            }   
        };

        const state = authReducer( inicialState , action );
   
        expect( state ).toEqual({
             logged: true, 
             user: action.payload
        });

     });

     test('debe de (logout) borrar el name del usuario y logged en false', () => { 

        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Andres'
            }   
        };

        const action = {
            type: types.logout
        };

        const newState = authReducer( state , action );
        
        expect( newState ).toEqual({ logged: false });

     });

 })