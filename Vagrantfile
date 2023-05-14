Vagrant.configure("2") do |config|

  if Vagrant.has_plugin? "vagrant-vbguest"
     config.vbguest.no_install = true
     config.vbguest.auto_update = false
     config.vbguest.no_remote = true
  end
  config.vm.define :balanceador do |balanceador|
    balanceador.vm.box = "bento/centos-stream-9"
    balanceador.vm.network :private_network, ip: "192.168.50.4"
    balanceador.vm.hostname = "balanceador"
    balanceador.vm.provider "virtualbox" do |v|
      v.cpus = 2 
    end
  end
  config.vm.define :servidor1 do |servidor1|
    servidor1.vm.box = "bento/centos-stream-9"
    servidor1.vm.network :private_network, ip: "192.168.50.3"
    servidor1.vm.hostname = "servidor1"
    servidor1.vm.provider "virtualbox" do |v|
      v.cpus = 2 
    end
  end
  config.vm.define :servidor2 do |servidor2|
    servidor2.vm.box = "bento/centos-stream-9"
    servidor2.vm.network :private_network, ip: "192.168.50.2"
    servidor2.vm.hostname = "servidor2"
    servidor2.vm.provider "virtualbox" do |v|
      v.cpus = 2 
    end
  end
end