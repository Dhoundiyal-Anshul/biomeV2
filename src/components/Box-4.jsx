import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function Box4() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      image: "https://media.licdn.com/dms/image/v2/C4E03AQEvH5i_84c71A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516574069088?e=2147483647&v=beta&t=kJ0wC6kRAszes-GMxeQxYdopgc1FbgVoZnRtmEIy1T0",
      position: "Co-Founder & Chief Operations Officer",
      linkedin: "https://www.linkedin.com/in/himanshu-garg-32b30976/"
    },
    {
      id: 2,
      image: "https://media.licdn.com/dms/image/v2/D5603AQE_yMFNQu9Elw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722002468251?e=2147483647&v=beta&t=lvt2MoR9HZkk3hxzXGZF0mV_hRFiul0TI7_6AoN9MXY",
      position: "Co-Founder & Chief Sustainability Officer",
      linkedin: "https://www.linkedin.com/in/sumeetpopli/"
    },
    {
      id: 3,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBIQEBIQEBAQEBAPDxAPEA8VEBUPFRUWFhUVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAUGAAECBwj/xAA/EAACAQMCBAMGAwQHCQAAAAABAgADBBEFIQYSMUFRYXETIoGRocEHUrEjMnLRFDNCkqLh8RUWJDVDYnOC8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC2KsKqzFWFVYGKsIqzarCKsDSrCBZ0qwgWByqzsLO1WdhYHAWdBYQLA3l5SoqWqMqgeJGYBAsBXvKVM4d1U+ZHfpPOOJPxEfmKUMKoyCfH0lAv9brVmLO7MTtue0D22+4ysqQJ9oG5diF3OZBV/wATrcH3KbHr1x4zx81GPjOSG6QPZLb8TrZtnpup37gjMk9O45s6uzNyMegPSeEYI6zk1COmYH01a3lKsM03Vx5GHKz5w0fiCvbvmnUZT6nB9Z6Jon4kMCq3K5BwCyjeB6SVnJWasL2ncIHpMGUjO0OVgLFZwVjJWcMsBVlgmWNssEywFWWDZY0ywTLAUZYJljTrBMsBflmQvLMgNKsKqzSrCqsDarCqsxVhVWBpVhVWYqwqrA5CwgWdBZF8R6wtnRL9Xx7q7fPHhAX4j4jo2SHmOahB5V8/P6TxbiHiSrd1Odz25QB0xma1q9q3NVnYseYnAyTgeHpEaVg5PT5wECST6x230/Iz18v5R2lY46qcen3jFDKZGAQR0PhATXTWXcDII/zgGpYxJUVgRgEhh8vQ/wA5weQ5B2J6eHwgRl3RHL8v0idalgZHToJKuc+4d+285ubU4C9QMEZ8CN4Fdaod/pGbOoc5J+Bhrm0IJwPQRGpRKwLhw7xFWtHD0mJBPvKdwfLE9k4d4hpXiDGFqYHMn3GZ800bh0PU7Sw6LxBUpuKisQVwfl6QPo4rBssiOEeIkv6PNsKi/vr9xJxlgLMsEyxplgmWAsywTLGWEEywFWWCdYy6wTCAvyzITEyA0ohlWcqIZRA2qwqrMVYVVgYqwirMVYVVgaxgZ8J5RxPUq310aanmAPKgU7Y+09H4hvRQoMf7RGFG+5+Ei+BtG5UNzUGalUkpnqF8fjAitF4AVQDUwT1OZYU4RtwQcdPKWMCdAQKlecH0juuP0kBqnCQIOBg+OJ6aViNyoMDxavwrVDHb/SB/3Zrfl8+k9dr2wMB/Qx8YHmFPhh22IMl6XDew26DEurUcdoJkgUa74WDdB2kRd8InBIG/pPSaiwFRRA8avOGqig7H5SFq2bU8g5E9yuaSnYgSt6rodOoDgAGBSeFuIqtnVVlY4BGcdxPoLh/V0vaC1U2J2Zc9DPm3W9Oeg/TaXH8KeJTQuVosfcrEIc9m7GB7iywTLGGEGywFmEC4jTLAsICrCBcRp1gXEAHLMneJkBtBDKJwghkEDpRCqJpRCqIG1EKonKiFUQK1xHQFxWpW/ieZuuy9T9B9ZZaKBVCgYCgADyEiLRQ1zVqflxTHr3kn7TEBoCYXAipuDFa1QmA3VuvCKVKmYvzHvOWbfp8YBWaa6mchQZnIIGyoi9wsLUUCBdhiBH1oq5jlyNpHVngBrGJVISs5irkwI/WtKSvTIIGex7zzK35rW6Un/p1FbGcA4Pj2nrJqSg8ZWYFTnHfrA+itOq+0o03/ADIp+YhXEgPw7uzW063Y9eTlPw2+0sLCAuwgXEZYQLCAs4gXEacReoIAcTJ1iZAcQQyCDQQyiB2ohlE4UQqiB0ohBOVE7xtAgtNbClj1d3f5kx0HMj6J91ZKWqZgd0qXN5TurbQxcKIJroQFHtoCrTxHmriL1mzAUXOYTeaCQirAWcbwNQx40cxeqkCNuTtIq4STVysi7hIEY6RWscR6uZG3BgBLbyA4lo86+gku1TeJX+GBED0T8Jv+WUvJnH+Iy3tKd+Ep/wCA5fy1ag+ufvLk0ADCDYQzQTCABxAOIy4gHEAOJk6xMgNoIZRBLDLAKohVg1hFgEWdY2nKzsQK6gAIzsBCLrVNNsiV/jO7em4pU8jPMzEdcZwPvKTXqXG/Irt3yTA9Sr65TPeINqiH+0PnPIr67vxnFNh57EyJpa7XU4qmonngwPeqeoA9DC/034zxrR+I3BAL5x33wR9perHVCR1zAt1O7Hr5QwugDK1RvN5q6vyN4Fiq34HcRM3oPeU2/wBbxtnvv6Sp6txJURiFbAA7HrA9WrXII6yMurkDuJ5HU4zr+JOPAwVTimu+MlvhmB6VXvVB6xavUDDI3lA/26zgZJyOhH3hKevPT3zle4PaBbjFrlO84sbxayB1I3647GHrbqYHo/4Z0OWxB/M7t/iMtbSA4CplbCj5qW/vEn7yfaAJoJoVoJoAXgXh3gXEAUybmQGkhkgVhlgFWGWCWFWB2J2JyJ0IFS4ksQ9XnPbEreo1qVIbkDtLlroOGI7TyzX9MuazFgGUH3Q3ZV748z4wEdW4utqOQcsfAAZkBd8QUquM0+QOMoagIDDOMgkYIyMS0ahwjSqWRpUeWnVwG94jLOMHdvPxlBs+FLypUWnURqdMMQzMQVUZy3KAe/lAlLYUydhyk9OmD6HvLVotRsgTi60SigHsVqe6EHLy+63QEn8pxk5klpVj+0VV3OYFisrUsPDER1VGUHeXBdO9lTGeuAZVtaXrAouoMSZA3dFc4ILMegEuBsw7EdDFLPSVqVihZUQMFdicOc+A8POBA2FGih99FX+JlEsVB7bGyqR4rysPpKx+I2iGxuqdWmoaiwRkZ1Dpzqd1YHII6bHYyE0KwrXdcmgDRGSzGlzBF8h8e0D0Q2lrU3UIfTEhdU0Jc5pjHj4fKRYu69Or7KttUU4WsnRseIljs7tnADjfv4H0gR/D1s1IsvQH5Zk7VGEJPhMSkBviN06XMUU9GdM/w53+kD1bh2h7O1op+Wmo+gj7QFlcU2UKjK2ANgd8Q5gBYQZhmgmgCeAeHaAeAOZMmQGkhlMCkKsAywqwKmGWAQTsThZ2DATe3Dk58ZFatpXMpC4B8+kmVqYJg6zBoHnF9pNcE/s0PmGH+sBS0+t0JCDwTr85fK1oWgDYqvmYFWSwIGFB36k9ZP8ADejBGDHcxlaIEndKo7c2PSBzqy+78JSdSpBiZe9VXKSj3+QTAr9SzKtkRirbFwMABh3wPqO8byDHKVEEbQK7XpMFKVKYdD15feQjzU9IkKtOiCtPCDsFQCW57aCe1B6gH1EDz+ppwqvzcpO+d5L0NMAxtiWVbPyEyrbgCBXqtLB9JopkqPMRy6AzEK1TlxvjcDMCzcLVi14FXoqMWPyGJf2lL4ERPaVD/b5VIPlnf7S5mBw0G0I0E0AbwDwzwLwBzJkyAwhhlMXUwywDrDLAKYVTAKDO8wamdAwIy7c82B4zdIeMHqh5Xz4iCSvtAedxjaK1WgjVg6zQC21M1HCjoNyZZUUKAPCV2xuBSQk9Sc/CdvrqkbdYEjqVXbEqmr0+YEjqJIV9V5lwZDXV+pOMwIRqhU5PTO5k5YfrIi6Iwc94/wAP1OZPTYekCY9nkQbU8Qyvic1GgKsAIhdVBGripIq6qbQIy8feBt6AqMFPhnfxnNw+8LpVJ3cldgNswLVwpTCVgB+Vh+kuBlW4XsXDe0btsPPzlnJgctBsZ0xgmMDhzAuYRzAOYHOZk5m4DCGGUxdTDKYDCmFUxdTCKYBwZ2DAgzsGBHa4Dyg42B6yLRu8nr9Oakw8s/LeVui8BynGaVAk+UDQjouFXbvAR1ayaojBSVbG0oNOjc27tzVGfc/s3Gw/haekVbkHpKzrluxPN28cQK1daw4GOVs+HfMg7irfMQ6OtLfcFc5EtnsNsnGYnWo7+MBKlVrVgEG56M2MCW7SKPskA9MyLs6qrgYAkrRuAYEmzbZgKlWD9rtEqtcePrA3c1ZD3dTAMar1ZD3laAtUqbyb0iqy09u5yZXlBZgO5OJa9NtHflp8pU7AkkY9RiBerAAU0x0KgwrGDopyqF8ABNsYGmMGxmyYNjA4cwLmduYFzA1mbg8zIDKmFUxZTCqYDKmFUxZTCqYB1adgwIM7BgFO8qt4hSoR4H6SzgyI16hsKg7bN6QFKdfAzI271JVbLHHxnftvdIlY1uz9uCOYj0O8CwNxPRT933j9JxV4kLjDBCp7GVDS+GWIx7Zg2ds4Ix26yQveGLukRurjsR/lAlq19QIBwR5ZyIrU1BOuBgSDa0uFPKyA+mciBr2VxuAhGPEjECc/2hRY/lnXtiMcp+MqD2dx3UDHi0BbXN2lUKMMmd8E7QPR6F3zLv1EHVqxC3qnlBPXEJVbaAK4rSKuH3hK9TeJ1DAe0Sj7SqPBdzPRNGtsnnPbpKpoNryU8nq25l20n+rEB/M4YzCZwzQNMYNjNsYJjA05gHM7YwLGBmZkHmZAYVoVWiqmGQwGVaFUxZWhA0BkNOwYurQgaAcGc1VDAqdwRgzgNOswKbqdE0nKfI+IkaWHeXHXbEVaZI/fQEr5juJSmGfWAH+k+ybmHTviSdvxGp64Mh69uTI+rp5O6kqfLp8oFtq63Tdh7uAB18Zq91Ohy4A7d/GVAafcDpUHxEBXs7k9WGPLOYHeqahliF38JrTKJzzN3nFHT+Xc5J842hPQQHhUAgLi6G5i9WpjrI+tV3xANVrZg0fJHmRiKVK0b0ikWqpnuwA+cD1HSdORqSluuBJlFCjA6QNqvKgXwEIWgdEzhmmi0GzQNkwbNNM0EzQMZoJ2m2aCZoGc03BZmQDq0KrRVWhVaA2rQgaKK0KrQGladhosrTsNAYDTsNFlM7DQDZnn12nI58M4l7Lym3pWozFSGUsxUjoQTtAGpBHaLVlHpE7io9PoCV+sTq6kD3gO1q+O82tWRTXyHv8AWbW7Ud4EqwBi9cARMX47kD4xG+1PbAMDL2484hUrxStd5mUULHygNW68x8sye0UYuKP/AJF/WKWVtgZjFtVFKsjnYK6sT5A7wPWw05LRO0vqdZeam6uPFSD8/CGLwCFpwzQZecFoHTNBM00zQbNA2Wg2acloNmgdc03A80yAcNCK0WVoRWgNK0IGiqtCK8BpWnYaKh509YKMsQAOpMBsPOa1yqDLHErt9r/UUh/7N9hIqtdMVJYlmbqSe2Rt+sBvXdUrV1ajSPshV/Z5H7yoc8zZ8eUHHmRA0qa01CKMKgCqPAAYEWs6uamT1979B/nD1mwYGVFDSD1LSlckj3W+kmC0DcVQevXtApN1p9VTjriKu1VezS03TA7GINWx1gQLvVbbDfWaFtWbrtJ43C9YE1wYCFCw8d/WS1pQA7QS1AI1bVgN4Eiq4EjLx94zVvBiRlxWyYAqVepQqc1N2Q9UZSQcdwfHH6S5aRxyMBblTzDY1E7+ZX+XylPrUuZPMbj1ERLgbntufSB7PZ6nSrjNJ1fyB3HqOohmeeH0dTQMCtTlbsckH5yyWHF1xTwGIqr/AN/X+8IHpBecFpWrPi6g+zhqZ891+cmaV2lQZRgw8iDAZLQTNOS84LQOszcFzTIDCztZkyARYQTJkDsSJ4j6J/F/OZMgQQhK37vx+4m5kAGnfv8Axb9DHa/abmQArE7mZMgRl12kbXmTICzTadf/ALwmTIGGM0+k1MgbqxXvNzID69PhIhuvwP3mTIEZd9DCaN/V/H+c1MgSQk5wx+/8ZkyBeRNGZMgczJkyB//Z",
      position: "Chief Technology Officer",
      linkedin: "https://www.linkedin.com/in/anshul-dhoundiyal/"
    }
  ];

  return (
    <div className="relative max-w-[100vw] overflow-hidden px-10 py-20">
      <div className="max-w-[1222px] mx-auto">
        <div className="bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.9)_50%,_rgba(0,0,0,0.8)_100%)] rounded-[100px] p-16">
          <div className="flex justify-between items-center gap-10">
            {/* Left content */}
            <div className="max-w-[400px]">
              <motion.h2 
                className="text-white text-[48px] font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                We are engineers, farmers, scientists, technologist, dreamers...
              </motion.h2>
              
              <motion.p 
                className="text-white text-lg mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                20years of leading sustainable project development and decision making in the real estate & construction sector
              </motion.p>

              <motion.button
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Meet Our Team
              </motion.button>
            </div>

            {/* Right content - Team images */}
            <div className="relative w-[600px] h-[600px]">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="relative"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <motion.img
                    src={member.image}
                    alt={`Team member ${index + 1}`}
                    className={`absolute ${
                      index === 0 ? 'top-0 right-0' :
                      index === 1 ? 'top-0 right-[280px]' :
                      'top-[280px] right-[140px]'
                    } w-[250px] h-[250px] rounded-full object-cover transition-transform duration-300 ${
                      hoveredMember === member.id ? 'scale-105' : ''
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          />
                  
                  {hoveredMember === member.id && (
                    <div className="absolute flex flex-col items-center justify-center bg-black/60 rounded-full w-[250px] h-[250px]"
                      style={{
                        top: index === 0 ? '0' : index === 1 ? '0' : '280px',
                        right: index === 0 ? '0' : index === 1 ? '280px' : '140px'
                      }}
                    >
                      <p className="text-white text-lg font-medium mb-3 text-center px-4">{member.position}</p>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box4;