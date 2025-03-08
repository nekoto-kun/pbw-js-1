// ! Jangan mengubah atau menghapus seluruh isi file ini

import Answers from './index.js'

const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15 } = Answers

describe('Q1', () => {
  it('harus memiliki 2 parameter', () => {
    expect(Q1.length).toBe(2)
  })

  it('harus mengembalikan hasil pemangkatan sebesar p terhadap n', () => {
    expect(Q1(2, 3)).toBe(8)
    expect(Q1(3, 3)).toBe(27)
    expect(Q1(2, 4)).toBe(16)
    expect(Q1(2, 5)).toBe(32)
    expect(Q1(2, 6)).toBe(64)
    expect(Q1(2, 7)).toBe(128)
  })
})

describe('Q2', () => {
  it('harus mengembalikan luas lingkaran yang dibulatkan hingga 2 angka desimal', () => {
    expect(Q2(1)).toBe(3.14)
    expect(Q2(2)).toBe(12.57)
    expect(Q2(3)).toBe(28.27)
    expect(Q2(4)).toBe(50.27)
    expect(Q2(5)).toBe(78.54)
  })

  it('harus memiliki 1 parameter', () => {
    expect(Q2.length).toBe(1)
  })

  it('harus mengembalikan nilai 0 jika parameter yang diberikan bernilai 0 atau negatif', () => {
    expect(Q2(0)).toBe(0)
    expect(Q2(-1)).toBe(0)
    expect(Q2(-2)).toBe(0)
    expect(Q2(-3)).toBe(0)
    expect(Q2(-4)).toBe(0)
    expect(Q2(-5)).toBe(0)
  })
})

describe('Q3', () => {
  it('harus memiliki parameter yang tidak terbatas', () => {
    expect(Q3.length).toBe(0)
  })

  it('harus mengembalikan NaN jika ada parameter yang bukan angka', () => {
    expect(Q3(1, 2, undefined, 4, '5')).toBe(NaN)
    expect(Q3(1, 2, 3, 4, '5', false)).toBe(NaN)
  })

  it('harus mengembalikan rata-rata dari semua parameter yang diberikan', () => {
    expect(Q3(1, 2, 3, 4, 5)).toBe(3)
    expect(Q3(1, 2, 3, 4, 5, 6)).toBe(3.5)
    expect(Q3(1, 2, 3, 4, 5, 6, 7)).toBe(4)
    expect(Q3(1, 2, 3, 4, 5, 6, 7, 8)).toBe(4.5)
    expect(Q3(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(5)
    expect(Q3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(5.5)
  })

  it('harus mengembalikan nilai 0 jika tidak ada parameter yang diberikan atau parameter negatif', () => {
    expect(Q3()).toBe(0)
    expect(Q3(-1, -2, -3, -4, -5)).toBe(0)
    expect(Q3(-1, 2, -3)).toBe(0)
  })

  it('rata-ratanya harus dibulatkan hingga 2 angka desimal', () => {
    expect(Q3(318, 37, 288)).toBe(214.33)
    expect(Q3(44, 12)).toBe(28)
    expect(Q3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(5.5)
    expect(Q3(12, 847, 111, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(85.33)
  })
})

describe('Q4', () => {
  it('harus menerima 2 parameter', () => {
    expect(Q4.length).toBe(2)
  })

  it('harus mengembalikan string yang telah diubah sesuai dengan option yang diberikan', () => {
    expect(Q4('hello', 'uppercase')).toBe('HELLO')
    expect(Q4('HELLO', 'lowercase')).toBe('hello')
    expect(Q4('hello world, how are you?', 'capitalize')).toBe('Hello World, How Are You?')
  })

  it('harus mengembalikan string yang sama jika tidak ada option yang diberikan', () => {
    expect(Q4('hello')).toBe('hello')
  })
})

describe('Q5', () => {
  it('harus menerima parameter yang tidak terbatas', () => {
    expect(Q5.length).toBe(0)
  })

  it('harus menerima parameter yang hanya berupa string untuk diproses', () => {
    expect(Q5(1, 2, 3, 4, 5)).toBe('')
    expect(Q5(1, 2, 3, 4, 5, 'hello')).toBe('olleh')
    expect(Q5('hello', 'world', 1, 2, 3, 4, 5)).toBe('olleh dlrow')
  })

  it('harus mengembalikan string yang telah dibalik urutannya', () => {
    expect(Q5('hello', 'world')).toBe('olleh dlrow')
    expect(Q5('hello', 'world', 'how', 'are', 'you')).toBe('olleh dlrow woh era uoy')
  })
})

describe('Q6', () => {
  it('harus mengembalikan nilai rata-rata dari nilai-nilai yang diberikan', () => {
    expect(Q6(['A', 'B', 'C', 'D'])).toBe(2.5)
    expect(Q6(['A', 'A', 'A', 'A'])).toBe(4)
    expect(Q6(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B'])).toBe(3.5)
    expect(Q6(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C'])).toBe(3)
    expect(Q6(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D'])).toBe(2.5)
  })

  it('harus mengembalikan nilai 0 jika tidak ada parameter yang diberikan', () => {
    expect(Q6()).toBe(0)
  })

  it('harus menghitung nilai dengan huruf \'A\', \'B\', \'C\', dan \'D\' saja', () => {
    expect(Q6(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])).toBe(2.5)
    expect(Q6(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'F', 'G', 'H'])).toBe(2.5)
  })
})

describe('Q7', () => {
  it('harus menerima parameter berupa array of object', () => {
    expect(Q7.length).toBe(1)
  })

  it('harus mengembalikan teks \'Invalid data\' jika ada object yang tidak memiliki property \'name\', \'price\', atau \'quantity\'', () => {
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: 2000 }
    ])).toBe('Invalid data')
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: 2000, quantity: 2 },
      { name: 'C', price: 3000 }
    ])).toBe('Invalid data')
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: 2000, quantity: 2 },
      { name: 'C', quantity: 2 }
    ])).toBe('Invalid data')
  })

  it('harus mengembalikan teks \'Invalid data\' jika ada object yang memiliki property \'price\' atau \'quantity\' dengan nilai negatif', () => {
    expect(Q7([
      { name: 'A', price: -1000, quantity: 2 },
      { name: 'B', price: 2000, quantity: -2 }
    ])).toBe('Invalid data')
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: -2000, quantity: 2 }
    ])).toBe('Invalid data')
  })

  it('harus mengembalikan object dengan property \'items\' yang berisi array of string yang berisi nama dari setiap item dan property \'total\' yang berisi total harga dari semua item', () => {
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: 2000, quantity: 2 }
    ])).toEqual({ items: ['A', 'B'], total: 6000 })
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: 2000, quantity: 2 },
      { name: 'C', price: 3000, quantity: 2 }
    ])).toEqual({ items: ['A', 'B', 'C'], total: 12000 })
    expect(Q7([
      { name: 'A', price: 1000, quantity: 2 },
      { name: 'B', price: 2000, quantity: 2 },
      { name: 'C', price: 3000, quantity: 2 },
      { name: 'D', price: 4000, quantity: 2 }
    ])).toEqual({ items: ['A', 'B', 'C', 'D'], total: 20000 })
  })
})

describe('Q8', () => {
  it('harus menerima parameter berupa array of number', () => {
    expect(Q8.length).toBe(1)
  })

  it('harus menghitung total skor berdasarkan angka posisi untuk 15 pembalap teratas', () => {
    expect(Q8([1, 2, 1, 3])).toBe(86)
    expect(Q8([15, 17, 1, 4, 9])).toBe(46)
    expect(Q8([1, 1, 1, 1, 1])).toBe(125)
    expect(Q8([1, 2, 3, 4, 5])).toBe(85)
    expect(Q8([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(140)
  })

  it('harus mengembalikan teks \'Invalid data\' jika ada nilai bukan angka dari 1 sampai 24', () => {
    expect(Q8([1, 2, 1, 3, '4'])).toBe('Invalid data')
    expect(Q8([1, 2, 1, 3, 4, 26])).toBe('Invalid data')
  })
})

describe('Q9', () => {
  it('harus menerima parameter berupa array of number', () => {
    expect(Q9.length).toBe(1)
  })

  it('harus mengembalikan nilai terbesar dari array yang diberikan', () => {
    expect(Q9([1, 2, 3, 4, 5])).toBe(5)
    expect(Q9([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10)
    expect(Q9([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100])).toBe(100)
  })

  it('harus mengembalikan nilai 0 jika tidak ada parameter yang diberikan', () => {
    expect(Q9()).toBe(0)
  })
})

describe('Q10', () => {
  it('harus menerima parameter berupa array of number', () => {
    expect(Q10.length).toBe(1)
  })

  it('harus mengembalikan nilai terkecil dari array yang diberikan', () => {
    expect(Q10([1, 2, 3, 4, 5])).toBe(1)
    expect(Q10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1)
    expect(Q10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100])).toBe(1)
  })

  it('harus mengembalikan nilai 0 jika tidak ada parameter yang diberikan', () => {
    expect(Q10()).toBe(0)
  })
})

describe('Q11', () => {
  it('harus menghitung jumlah huruf vokal yang ada pada string yang diberikan', () => {
    expect(Q11('hello world')).toBe(3)
    expect(Q11('hello world, how are you?')).toBe(8)
    expect(Q11('abcdefghijklmnopqrstuvwxyz')).toBe(5)
  })

  it('harus mengembalikan nilai 0 jika tidak ada parameter yang diberikan', () => {
    expect(Q11()).toBe(0)
  })

  it('harus mengembalikan nilai 0 jika parameter yang diberikan bukan string', () => {
    expect(Q11(1)).toBe(0)
    expect(Q11(1, 2, 3, 4, 5)).toBe(0)
    expect(Q11(1, 2, 3, 4, 5, 'hello')).toBe(0)
  })
})

describe('Q12', () => {
  it('harus memecah string menjadi array kata-kata', () => {
    expect(Q12('hello world')).toEqual(['hello', 'world'])
    expect(Q12('hello world, how are you?')).toEqual(['hello', 'world,', 'how', 'are', 'you?'])
    expect(Q12('abcdefghijklmnopqrstuvwxyz')).toEqual(['abcdefghijklmnopqrstuvwxyz'])
  })

  it('harus mengembalikan array kosong jika tidak ada parameter yang diberikan', () => {
    expect(Q12()).toEqual([])
  })

  it('harus mengembalikan array kosong jika parameter yang diberikan bukan string', () => {
    expect(Q12(1)).toEqual([])
    expect(Q12(1, 2, 3, 4, 5)).toEqual([])
    expect(Q12(1, 2, 3, 4, 5, 'hello')).toEqual([])
  })
})

describe('Q13', () => {
  it('harus menerima 2 parameter wajib dan 1 parameter opsional', () => {
    expect(Q13.length).toBe(2)
  })

  it('harus mengembalikan nilai aset setelah sejumlah tahun berdasarkan tingkat bunga yang dibulatkan hingga 2 desimal', () => {
    expect(Q13(1000, 0.1, 1)).toBe(1100)
    expect(Q13(1000, 0.1, 2)).toBe(1210)
    expect(Q13(1000, 0.1, 3)).toBe(1331)
    expect(Q13(1000, 0.1, 4)).toBe(1464.1)
    expect(Q13(1000, 0.1, 5)).toBe(1610.51)
  })
})

describe('Q14', () => {
  it('harus menerima parameter berupa array of object dan number', () => {
    expect(Q14.length).toBe(2)
  })

  it('harus mengembalikan teks \'Invalid data\' jika ada elemen yang tidak memiliki property \'name\' atau \'price\'', () => {
    expect(Q14([
      { name: 'A', price: 1000 },
      { price: 2000 }
    ])).toBe('Invalid data')
    expect(Q14([
      { name: 'A', price: 1000 },
      { name: 'B' }
    ])).toBe('Invalid data')
  })

  it('harus mengembalikan teks \'Invalid data\' jika ada elemen yang memiliki property \'price\' dengan nilai negatif atau 0', () => {
    expect(Q14([
      { name: 'A', price: 0 },
      { name: 'B', price: -2000 }
    ])).toBe('Invalid data')
  })

  it('harus mengembalikan teks \'Invalid data\' jika parameter kedua bukan number atau bernilai negatif', () => {
    expect(Q14([
      { name: 'A', price: 1000 },
      { name: 'B', price: 2000 }
    ], '0.1')).toBe('Invalid data')
  })

  it('harus mengembalikan array of object yang sama dengan perubahan harga setelah PPN', () => {
    expect(Q14([
      { name: 'A', price: 1000 }, { name: 'B', price: 2000 }
    ], 0.1)).toEqual([
      { name: 'A', price: 1100 }, { name: 'B', price: 2200 }
    ])
    expect(Q14([
      { name: 'A', price: 1000 }, { name: 'B', price: 2000 }
    ], 0.11)).toEqual([
      { name: 'A', price: 1110 }, { name: 'B', price: 2220 }
    ])
  })
})

describe('Q15', () => {
  it('harus menerima 2 parameter berupa angka', () => {
    expect(Q15.length).toBe(2)
  })

  it('harus mengembalikan hasil perhitungan sisi ketiga sesuai rumus Pythagoras dan dibulatkan hingga 2 desimal', () => {
    expect(Q15(3, 4)).toBe(5)
    expect(Q15(5, 12)).toBe(13)
    expect(Q15(8, 15)).toBe(17)
    expect(Q15(7, 24)).toBe(25)
    expect(Q15(9, 40)).toBe(41)
    expect(Q15(4, 4)).toBe(5.66)
    expect(Q15(5, 5)).toBe(7.07)
  })

  it('harus mengembalikan nilai 0 jika tidak ada parameter yang diberikan atau tidak lengkap', () => {
    expect(Q15()).toBe(0)
    expect(Q15(1)).toBe(0)
  })

  it('harus mengembalikan nilai 0 jika parameter yang diberikan bukan angka', () => {
    expect(Q15('3', '4')).toBe(0)
    expect(Q15(3, '4')).toBe(0)
    expect(Q15('3', 4)).toBe(0)
  })

  it('harus mengembalikan nilai 0 jika parameter yang diberikan bernilai negatif', () => {
    expect(Q15(-3, -4)).toBe(0)
    expect(Q15(-3, 4)).toBe(0)
    expect(Q15(3, -4)).toBe(0)
  })
})
