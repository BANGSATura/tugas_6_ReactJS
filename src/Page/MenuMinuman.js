import React, { Component } from 'react';
import DaftarMinuman from '../Lib/DaftarMinuman.js';
import Header from './Header.js';
class Menuminuman extends Component {
  render() {
    return (
      <div>
        <Header/>
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              {
                DaftarMinuman.map((value,index) => {
                  return (
                    <td key={index}>
                      <center>
                        <img src={value.gambar} alt="Gambar Minuman" width="150" heigth="100"/>
                        <p>{value.nama}</p>
                        <p>{value.harga}</p>
                      </center>
                    </td>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Menuminuman;
