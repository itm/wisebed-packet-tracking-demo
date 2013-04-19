var wiseml = {
  "setup": {
    "origin": {
      "x": 53.833836,
      "y": 10.704606,
      "z": 33,
      "phi": -145,
      "theta": 0
    },
    "timeinfo": null,
    "interpolation": null,
    "coordinateType": "geographic",
    "description": "This is the description WiseML file of the UzL testbed in Luebeck, Germany containing 54 iSense, 54 telosB and 54 Pacemate sensor nodes.",
    "defaults": null,
    "node": [
      {
        "position": {
          "x": 10,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x221e"
      },
      {
        "position": {
          "x": 10,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x211c"
      },
      {
        "position": {
          "x": 6,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x221c"
      },
      {
        "position": {
          "x": 6,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x201c"
      },
      {
        "position": {
          "x": 8,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x221d"
      },
      {
        "position": {
          "x": 8,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x201d"
      },
      {
        "position": {
          "x": 10.5,
          "y": 3,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2215"
      },
      {
        "position": {
          "x": 10.5,
          "y": 3,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2015"
      },
      {
        "position": {
          "x": 13.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2214"
      },
      {
        "position": {
          "x": 13.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2014"
      },
      {
        "position": {
          "x": 1,
          "y": 6,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2216"
      },
      {
        "position": {
          "x": 1,
          "y": 6,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2114"
      },
      {
        "position": {
          "x": 25.5,
          "y": 11.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2206"
      },
      {
        "position": {
          "x": 25.5,
          "y": 11.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2104"
      },
      {
        "position": {
          "x": 12.5,
          "y": 15.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x220e"
      },
      {
        "position": {
          "x": 12.5,
          "y": 15.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x210c"
      },
      {
        "position": {
          "x": 20.5,
          "y": 1.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x220d"
      },
      {
        "position": {
          "x": 20.5,
          "y": 1.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x200d"
      },
      {
        "position": {
          "x": 17,
          "y": 0.5,
          "z": 0,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x220c"
      },
      {
        "position": {
          "x": 17,
          "y": 0.5,
          "z": 0,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x200c"
      },
      {
        "position": {
          "x": 27.5,
          "y": 2.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2204"
      },
      {
        "position": {
          "x": 27.5,
          "y": 2.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2004"
      },
      {
        "position": {
          "x": 27.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2205"
      },
      {
        "position": {
          "x": 27.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2005"
      },
      {
        "position": {
          "x": 3.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2225"
      },
      {
        "position": {
          "x": 3.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2025"
      },
      {
        "position": {
          "x": 25.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2226"
      },
      {
        "position": {
          "x": 25.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2124"
      },
      {
        "position": {
          "x": 4.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2224"
      },
      {
        "position": {
          "x": 4.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2024"
      },
      {
        "position": {
          "x": 28.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2230"
      },
      {
        "position": {
          "x": 28.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2030"
      },
      {
        "position": {
          "x": 28.5,
          "y": 14,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2231"
      },
      {
        "position": {
          "x": 28.5,
          "y": 14,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2031"
      },
      {
        "position": {
          "x": 8.5,
          "y": 7,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2218"
      },
      {
        "position": {
          "x": 8.5,
          "y": 7,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2018"
      },
      {
        "position": {
          "x": 25.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2235"
      },
      {
        "position": {
          "x": 25.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": null,
        "id": "urn:wisebed:uzl1:0x4218"
      },
      {
        "position": {
          "x": 25.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2035"
      },
      {
        "position": {
          "x": 31.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2236"
      },
      {
        "position": {
          "x": 31.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2134"
      },
      {
        "position": {
          "x": 7.5,
          "y": 7,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2219"
      },
      {
        "position": {
          "x": 7.5,
          "y": 7,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2019"
      },
      {
        "position": {
          "x": 28.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x221a"
      },
      {
        "position": {
          "x": 28.5,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2118"
      },
      {
        "position": {
          "x": 25.5,
          "y": 14,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2234"
      },
      {
        "position": {
          "x": 25.5,
          "y": 14,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2034"
      },
      {
        "position": {
          "x": 34.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2232"
      },
      {
        "position": {
          "x": 34.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2130"
      },
      {
        "position": {
          "x": 17,
          "y": 16.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x222e"
      },
      {
        "position": {
          "x": 17,
          "y": 16.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x212c"
      },
      {
        "position": {
          "x": 31.5,
          "y": 11.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x222d"
      },
      {
        "position": {
          "x": 31.5,
          "y": 11.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x202d"
      },
      {
        "position": {
          "x": 31.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x222c"
      },
      {
        "position": {
          "x": 31.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x202c"
      },
      {
        "position": {
          "x": 1,
          "y": 14,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x222a"
      },
      {
        "position": {
          "x": 1,
          "y": 14,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2128"
      },
      {
        "position": {
          "x": 34.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2229"
      },
      {
        "position": {
          "x": 34.5,
          "y": 10.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2029"
      },
      {
        "position": {
          "x": 34.5,
          "y": 11.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2228"
      },
      {
        "position": {
          "x": 34.5,
          "y": 11.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2028"
      },
      {
        "position": {
          "x": 1,
          "y": 11,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2222"
      },
      {
        "position": {
          "x": 1,
          "y": 11,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2120"
      },
      {
        "position": {
          "x": 1,
          "y": 6,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2221"
      },
      {
        "position": {
          "x": 1,
          "y": 6,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2021"
      },
      {
        "position": {
          "x": 1,
          "y": 6,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2220"
      },
      {
        "position": {
          "x": 1,
          "y": 6,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2020"
      },
      {
        "position": {
          "x": 23,
          "y": 10,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2238"
      },
      {
        "position": {
          "x": 23,
          "y": 10,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2038"
      },
      {
        "position": {
          "x": 23,
          "y": 12,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2239"
      },
      {
        "position": {
          "x": 23,
          "y": 12,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2039"
      },
      {
        "position": {
          "x": 14,
          "y": 5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x223a"
      },
      {
        "position": {
          "x": 14,
          "y": 5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2138"
      },
      {
        "position": {
          "x": 17,
          "y": 13.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x223c"
      },
      {
        "position": {
          "x": 17,
          "y": 13.5,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x203c"
      },
      {
        "position": {
          "x": 14.5,
          "y": 13.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x223d"
      },
      {
        "position": {
          "x": 14.5,
          "y": 13.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x203d"
      },
      {
        "position": {
          "x": 25,
          "y": 1,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x223e"
      },
      {
        "position": {
          "x": 25,
          "y": 1,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x213c"
      },
      {
        "position": {
          "x": 2.5,
          "y": 14,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2244"
      },
      {
        "position": {
          "x": 2.5,
          "y": 14,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2044"
      },
      {
        "position": {
          "x": 10.5,
          "y": 6,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2246"
      },
      {
        "position": {
          "x": 10.5,
          "y": 6,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2144"
      },
      {
        "position": {
          "x": 1,
          "y": 14,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2245"
      },
      {
        "position": {
          "x": 1,
          "y": 14,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2045"
      },
      {
        "position": {
          "x": 6,
          "y": 7,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2242"
      },
      {
        "position": {
          "x": 6,
          "y": 7,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2140"
      },
      {
        "position": {
          "x": 1,
          "y": 12.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2241"
      },
      {
        "position": {
          "x": 1,
          "y": 12.5,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2041"
      },
      {
        "position": {
          "x": 1,
          "y": 11,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2240"
      },
      {
        "position": {
          "x": 1,
          "y": 11,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2040"
      },
      {
        "position": {
          "x": 14,
          "y": 4,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2211"
      },
      {
        "position": {
          "x": 14,
          "y": 4,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2011"
      },
      {
        "position": {
          "x": 14.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2212"
      },
      {
        "position": {
          "x": 14.5,
          "y": 12,
          "z": 2,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2110"
      },
      {
        "position": {
          "x": 14,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2210"
      },
      {
        "position": {
          "x": 14,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2010"
      },
      {
        "position": {
          "x": 17,
          "y": 2.5,
          "z": 0,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x220a"
      },
      {
        "position": {
          "x": 17,
          "y": 2.5,
          "z": 0,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2108"
      },
      {
        "position": {
          "x": 25,
          "y": 2,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2209"
      },
      {
        "position": {
          "x": 25,
          "y": 2,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2009"
      },
      {
        "position": {
          "x": 25,
          "y": 3,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2208"
      },
      {
        "position": {
          "x": 25,
          "y": 3,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2008"
      },
      {
        "position": {
          "x": 31,
          "y": 6,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2200"
      },
      {
        "position": {
          "x": 31,
          "y": 6,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2000"
      },
      {
        "position": {
          "x": 2,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2202"
      },
      {
        "position": {
          "x": 2,
          "y": 1,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense48",
        "description": "Processor: Jennic JN5148 (128kB RAM, 512kB Flash, 32 Bit RISC Controller, 4-32MHz) Radio: IEEE 802.15.4 compliant radio, 250kbit/s, hardware AES encryption, ToF ranging engine)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2100"
      },
      {
        "position": {
          "x": 31,
          "y": 3,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "telosb",
        "description": "Processor: MSP 430F1611 (Ram 10kB, Flash 48kB, op/sleep 22mA, 5myA) Radio: TI CC2420 IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:temperature",
            "datatype": "integer",
            "unit": "degrees",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:light",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:ir",
            "datatype": "integer",
            "unit": "lux",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:humidity",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2201"
      },
      {
        "position": {
          "x": 31,
          "y": 3,
          "z": 1,
          "phi": null,
          "theta": null
        },
        "gateway": true,
        "programDetails": null,
        "nodeType": "isense39",
        "description": "Processor: Jennic JN5139R1 (Ram 96kB, Flash 128kB, op/sleep 39mA,10myA) Radio: IEEE 802.15.4(2,4 GHz)",
        "capability": [
          {
            "name": "urn:wisebed:node:capability:pir",
            "datatype": "integer",
            "unit": "raw",
            "default": "0"
          },
          {
            "name": "urn:wisebed:node:capability:acc",
            "datatype": "integer",
            "unit": "raw",
            "default": "[0,0,0]"
          }
        ],
        "id": "urn:wisebed:uzl1:0x2001"
      }
    ],
    "link": null
  },
  "scenario": null,
  "trace": null,
  "version": "1.0"
}