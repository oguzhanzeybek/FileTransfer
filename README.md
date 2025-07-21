# FileTransfer
Bu geliştirilen uygulama dosya paylaşım uygulamasıdır.İç ağda çalışır. Gönderici ve alıcı arasında bır oda oluşturulur ve bu şekilde dosyalar paylaşılabilir. İç ağda dosya paylaşım uygulamasıdır.

- Nasıl Kullanılır?
ilk olarak, iç ağdaki bir bilgisayardan server.js adındaki dosya çalıştırılır.

server ip si girilmek üzere, 
-- Gönderici taraf bilgisayarında "192.168.x.x:5000" adresine girer.
-- Alıcı taraf "192.168.x.x:5000/receiver.html" adresine girer.

-- Gönderici bir oda oluştur butonuna tıklayıp rastgele oluşturulan bır id alır. Alıcı bu id yı kendı bilgisayarına girer, odaya katıl dedıgı zaman iki kullanıcı da ortak bır odaya alınmış olur.
Gönderici dosyayı gönderirir ve iki tarafta da dosya aktarımı sayılarla gosterılır. Bu işlem sonrasında , yuklenme oranı %100 olduktan sonra alıcı tarafa nereye indirileceği sorulur. Herhangı bır dosya aktarım sınırlaması yoktur.


______________________________________________________________________________________________

FileTransfer
This is a file sharing application developed for use within a local network. A room is created between the sender and the receiver, enabling file sharing. It operates entirely within the internal network.

How to Use It?
First, the server.js file must be run from a computer within the local network.

To connect using the server's IP address:
-- On the sender's computer, go to 192.168.x.x:5000.
-- On the receiver's computer, go to 192.168.x.x:5000/receiver.html.

-- The sender clicks on the “Create Room” button and receives a randomly generated room ID. The receiver enters this ID on their own computer and clicks “Join Room”. Once this is done, both users are placed into the same room.

The sender selects a file to send, and the file transfer progress is displayed numerically on both sides. Once the upload progress reaches 100%, the receiver is prompted to choose a download location.

There is no limit on the size of the file transfer.



______________________________________________________________________________________________

