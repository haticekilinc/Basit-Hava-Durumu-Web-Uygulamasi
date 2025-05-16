# Basit Hava Durumu Uygulaması

Bu, girilen şehre göre güncel hava durumu bilgilerini gösteren basit bir web uygulamasıdır. Ayrıca gelecek günlere ait temel tahminleri de sunar.

## Nasıl Çalışır?

Uygulama, OpenWeatherMap API'sini kullanarak hava durumu verilerini alır. Kullanıcı arama çubuğuna bir şehir adı girdiğinde ve "Ara" butonuna tıkladığında, uygulama bu şehre ait güncel hava durumu ve tahmin bilgilerini API'den çekerek ekranda gösterir.

## Özellikler

* **Güncel Hava Durumu:** Sıcaklık, hava durumu açıklaması, ikon, hissedilen sıcaklık, rüzgar hızı ve nem oranı gibi bilgileri gösterir.
* **Gelecek Hava Durumu Tahmini:** Önümüzdeki birkaç gün için (günlük bazda) en yüksek ve en düşük sıcaklıkları ve hava durumu ikonlarını gösterir.
* **Basit ve Kullanıcı Dostu Arayüz:** Kolayca şehir arayabilir ve hava durumu bilgilerine ulaşabilirsiniz.

## Kullanım

1.  Bu projenin dosyalarını ( `index.html`, `style.css`, `script.js` ) bir web sunucusuna yükleyin veya doğrudan tarayıcınızda `index.html` dosyasını açın.
2.  Arama çubuğuna bir şehir adı girin (örneğin, "İstanbul", "London", "New York").
3.  "Ara" butonuna tıklayın.
4.  Uygulama, girdiğiniz şehre ait güncel hava durumu ve gelecek tahmin bilgilerini ekranda gösterecektir.

## Kurulum

Bu uygulama tamamen istemci tarafında (browser) çalıştığı için özel bir kurulum gerektirmez. Ancak, OpenWeatherMap API'sinden veri çekebilmesi için `script.js` dosyasındaki `'Sizin_OpenWeatherMap_API_Anahtarınız'` kısmına kendi API anahtarınızı girmeniz gerekmektedir.

1.  [https://openweathermap.org/api](https://openweathermap.org/api) adresinden ücretsiz bir OpenWeatherMap hesabı oluşturun ve bir API anahtarı edinin.
2.  Projenin `script.js` dosyasını bir metin düzenleyici ile açın.
3.  Aşağıdaki satırı bulun:
    ```javascript
    const apiKey = 'Sizin_OpenWeatherMap_API_Anahtarınız';
    ```
4.  `'Sizin_OpenWeatherMap_API_Anahtarınız'` ifadesini kendi API anahtarınızla değiştirin (tırnak işaretlerini silmeyin).
5.  Dosyayı kaydedin.

## Katkıda Bulunma

Bu basit bir örnek uygulamadır ancak geliştirmeye açıktır. Katkıda bulunmak isterseniz, lütfen bir "pull request" gönderin. Önerileriniz ve geri bildirimleriniz değerlidir.

## Lisans

Bu proje herhangi bir özel lisans altında değildir. İstediğiniz gibi kullanabilir ve değiştirebilirsiniz.
