from base.testing import KlaytnBaseTesting


class TestAdminStartStateMigration(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.start_state_migration()
        if self.response is not None:
            self.assertIsInstance(self.response, str)
        else:
            self.assertIsNone(self.response)
