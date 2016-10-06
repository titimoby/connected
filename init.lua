local http_api = minetest.request_http_api()
if not http_api then
   print("ERROR: in minetest.conf, this mod must be in secure.http_mods!")
end

local node = minetest.register_node("connected:iotswitch", {
	tiles = {"textures/tutorial_decowood.png"},
	groups = {snappy=1,choppy=2,oddly_breakable_by_hand=2,flammable=3},
  on_rightclick = function (pos, node)
		print("punch")
    minetest.after(5, function()
      http_api.fetch({
        url = "http://localhost:3000/resources/feedsonoff",
        timeout = 1
      },
      function (res)
        print(dump(res))
      end)
    end)
	end,
  on_construct = function(pos)
    -- register with rest API to the server ?
    print(dump(pos))
  end
})
