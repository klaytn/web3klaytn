from base.testing import KlaytnBaseTesting


class TestNodeInfo(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
       

    def test_post(self):
        self.response = self.w3.mainbridge.get_node_info(
        )
